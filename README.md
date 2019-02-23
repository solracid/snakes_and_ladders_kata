# Snakes and Ladders Kata, Feature 1

Implementation in node.js of the [Kata](http://agilekatas.co.uk/katas/SnakesAndLadders-Kata)

## Approach
The kata is implemented using TDD approach. Tests for each requested functions are developed and evaluated. Source code is refactored until meets all tests criteria.


## Decisions
Kata implemented in ES5 with node.js. Using this version of JS any translators, such as Babel, can be omitted. Node.js offers portability, easy integration of testing modules, and easy project escalability if needed at any future point. 

Tests are implemented with Jest. Other considered testing frameworks were Jasmine and Mocha. Jest is very simple to use and presents tests results very visually.

## Envision
Solution is implemented with a single function that acts as a class. This allows to expand its methods with newer features, while already defined methods will be consistent and will pass the tests.

