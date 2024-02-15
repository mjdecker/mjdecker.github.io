---
title: "Project: Bigint"
layout: markdown
---

# Project 1: Bigint

## Objective(s)
* Develop, implement, and use an Abstract Data Type (ADT) with the class construct in C++. 

## Overview
* You will be implementing a *bigint* class.  

## Problem and Specification
* The data type *int* in C++ is limited to the word size of the CPU architecture (e.g., 32 or 64 bit). Therefore you can only work with signed integers up to 2,147,483,647 (in the case of signed 32 bit). Unsigned 32 bit is still only 10 digits. Max int for 64 is somewhat larger at 9,223,372,036,854,775,807 but still only 19 digits. Clearly, this causes difficulties for working with very large integer values (say 100 digits). An ADT (called *bigint*) has been created to support an arbitrary number of digits (specified at compile time).  For simplicity, the implementation is limited to non-negative integers. 

* Representation is a key issue for this assignment. An array of integers is recommended, with each element representing one single digit (0 to 9) of the big number. One could use an array of char, but the memory savings is pretty minimal. Placing the values in the array is the interesting part. The naïve representation makes storing the bigint easy but makes the operations (add) very difficult to implement. A slightly more clever representation makes storing the big number a little bit harder but makes implementing the operations way easier.

* Take the number 12486

|bigint|||||||||
|---|---|---|---|---|---|---|---|---|
|index:|0|1|2|3|4|5| ... |n|
|naïve:|1|2|4|8|6|0| ... |0|
|best:|6|8|4|2|1|0|...|0|

* Notice this corresponds to:

|bigint|||||||||
|---|---|---|---|---|---|---|---|---|
|index:|0|1|2|3|4|5| ... |n|
|place:|10<sup>0</sup>|10<sup>1</sup>|10<sup>2</sup>|10<sup>3</sup>|10<sup>4</sup>|10<sup>5</sup>| ... |10<sup>n</sup>|
|best:|6|8|4|2|1|0|...|0|



## Requirements
* Follow,  class [Programming Requirements](https://mjdecker.github.io/standards/coding-standards.html)
* Finished work must be submitted to GitHub.
* You must use the provided class construct to implement your ADT.
* Don't edit `bigint.hpp` or the supplied test files.
* The ADT *bigint* need only work for positive integers.
* **Iteration 1 - 50 points**- [Rubric](#Iteration-1-Rubric)
	* Implementation
		* Develop the `cpp` file to implement your ADT.
		* A default constructor to initialize a bigint to zero.
		* A constructor to initialize a bigint to an int value you provide [0, maxint]. Example: bigint(128).
		* A constructor to initialize a bigint to a char[] you provide. You can assume what is provided is a valid bigint. Example: bigint("299793").
		* Overload `operator==` to compare if two bigints are equal. It should return a bool - true if equal and false otherwise.
		* A `debug_print` method is provided for you to help developing and debugging.
	* Testing
		* There are a provided set of tests to validate your you implementation of the above.

	* **Iteration 2 - 50 points**- [Rubric](#Iteration-2-Rubric)
		* Implementation
			* Overload output `operator<<` as a friend, so that it takes a stream and bigint as input and writes the bigint to the stream. It should print at most 25 digits per line. No leading zeros should be printed.
			* Overload input `operator>>` a bigint in the following manner: Read in any number of digits [0-9] until a semi colon ";" is encountered. The number may span over multiple lines. You can assume the input is valid.
			* Overload the subscript `operator[]`. It should return the i-th digit, where i is the 10^i position. So the first digit is the one's place (10^0) and the second digit is the ten's place (10^1).
			* Overload the `operator+` so that it adds two bigint together.
			* Implement `add.cpp`.  The main reads from the file data1-1.txt and must do the following:
				* Test for success of opening the file in your program.
				* Continually until end-of-file:
					* Read in two numbers into bigints and write both out on separate lines.
					* Add these together and write the result.
				* All output must be labeled and neat.
			* Testing
				* There are a provided set of tests to validate your implementation of the above.

## Iteration 1 Rubric
* [] No use of using namespace (if use -25 points)
* [] Programming style/requirements (up to -10)
* [] Use of constant for Bigint size (5 points)
* [] Implementations are in cpp file (5 points)
* [] Default constructor (10 points)
    * [] implementation present
    * [] tests pass
* [] int constructor (10 points)
    * [] implementation present
    * [] tests pass
* [] C-string constructor (10 points)
    * [] implementation present
    * [] tests pass
* [] equality operator (10 points)
    * [] implementation present
    * [] tests pass

## Iteration 2 Rubric
* [] No use of using namespace (if use -25 points)
* [] Programming style/requirements (up to -10)
* [] Implementations are in cpp file (5 points)
* [] output operator (10 points)
    * [] implementation present
    * [] tests pass
* [] input operator (10 points)
    * [] implementation present
    * [] tests pass
* [] subscript operator (5 points)
    * [] implementation present
    * [] tests pass
* [] addition operator (10 points)
    * [] implementation present
    * [] tests pass
* [] add program (10 points)
    * [] work attempted
    * [] works correctly
