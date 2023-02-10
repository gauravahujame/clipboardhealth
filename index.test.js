import getDeterministicPartitionKey from "./index";

describe("getDeterministicPartitionKey", () => {
  it("should generate a deterministic partition key from an event", () => {
    const event = { hello: "world" };
    const partitionKey = getDeterministicPartitionKey(event);
    expect(typeof partitionKey).toBe("string");
  });

  it("should use the partition key provided in the event if it exists", () => {
    const event = { partitionKey: "custom-partition-key", hello: "world" };
    const partitionKey = getDeterministicPartitionKey(event);
    expect(partitionKey).toBe("custom-partition-key");
  });

  it("should hash the event data if no partition key is provided", () => {
    const event = { hello: "world" };
    const partitionKey = getDeterministicPartitionKey(event);
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBe(128);
  });

  it("should hash the partition key if it's too long", () => {
    const event = { partitionKey: "a".repeat(300), hello: "world" };
    const partitionKey = getDeterministicPartitionKey(event);
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBe(128);
  });

  it("should convert the partition key to a string if it's not already a string", () => {
    const event = { partitionKey: { key: "value" }, hello: "world" };
    const partitionKey = getDeterministicPartitionKey(event);
    expect(partitionKey).toBe('{"key":"value"}');
  });
});
