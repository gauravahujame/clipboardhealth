# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. The refactored code makes simple to understand that if a partition key is provided in the event, we simply return it. If not, then we generate a key using SHA3-512
2. The comments make it very easy to understand
3. I've leveraged latest JS features to default value assignment to arguments and destructuring which reduced the lines of code and helped me remove unnecessary checks. We're also using import and export keywords.
4. I've renamed the variables to be more intuitive which IMHO helps a great deal in improving understandability
