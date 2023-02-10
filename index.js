import crypto from "crypto";

/**
 * Generates a deterministic partition key from an event.
 * @param {Object} event - The event to generate the partition key from.
 * @returns {String} - The deterministic partition key.
 */
const getDeterministicPartitionKey = (event = {}) => {
  // Default value if no event or partition key is provided
  const DEFAULT_PARTITION_KEY = "0";
  // Maximum length of the partition key
  const MAX_KEY_LENGTH = 256;

  let { partitionKey: partitionKeyCandidate } = event;

  // If the event did not contain a partition key, generate one using SHA3-512
  if (!partitionKeyCandidate) {
    const eventData = JSON.stringify(event);
    partitionKeyCandidate = crypto.createHash("sha3-512").update(eventData).digest("hex");
  }

  // If a candidate exists, make sure it's a string
  if (partitionKeyCandidate) {
    if (typeof partitionKeyCandidate !== "string") {
      partitionKeyCandidate = JSON.stringify(partitionKeyCandidate);
    }
  } else {
    partitionKeyCandidate = DEFAULT_PARTITION_KEY;
  }

  // If the length of the candidate is too long, hash it again using SHA3-512
  if (partitionKeyCandidate.length > MAX_KEY_LENGTH) {
    partitionKeyCandidate = crypto.createHash("sha3-512").update(partitionKeyCandidate).digest("hex");
  }
  return partitionKeyCandidate;
};

export default getDeterministicPartitionKey;
