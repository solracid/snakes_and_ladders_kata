# Snakes and Ladders Kata, Feature 1

Implementation in node.js of the [Kata](http://agilekatas.co.uk/katas/SnakesAndLadders-Kata)

## Approach
The kata is implemented using TDD approach. Tests for each requested functions are developed and evaluated. Source code is refactored until meets all tests criteria.


## Decisions
Kata implemented in ES5 with node.js. Using this version of JS any translators, such as Babel, can be omitted. Node.js offers portability, easy integration of testing modules, and easy project escalability if needed at any future point. 

Tests are implemented with Jest. Other considered testing frameworks were Jasmine and Mocha. Jest is very simple to use and presents tests results very visually.

## Envision
Solution is implemented with a single function that acts as a class. This allows to expand its methods with newer features, while already defined methods will be consistent and will pass the tests.

## Install
The projects runs on `Node.js`. To run it you need to have installed [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [nodejs.org](https://nodejs.org/en/download/)

Open terminal and change working directory to where you want to install it. Run:

```
https://github.com/solracid/snakes_and_ladders_kata.git
```

```
cd snakes-and-ladders-kata
```

```
npm install
```

Once installed, check the game's features are working properly:
```
npm run test
```

Output should look like this one:

![Tests passed](./test_features.png)

