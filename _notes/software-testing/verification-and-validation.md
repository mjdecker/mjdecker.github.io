---
title: "Verification and Validation"
layout: notes
---

# Verification and Validation
* **Verification**: The software should conform to its specification (Are we building the product right?)
* **Validation:** The software should do what the user really requires (Are we building the right product?)

# V & V Goals
 * Verification and validation should establish confidence that the software is fit for its purpose
* This does NOT mean completely free of defects
* Rather, it must be good enough for its intended use and the type of use will determine the degree of confidence that is needed

# Life-cycle
* Requirements, Design, Code, Testing
* V & V is applied to all stages of life-cycle
* Easier (less expensive) to fix faults early on

#  V & V Principles
*  The discovery of defects in a system
*  The assessment of whether or not the system is usable in an operational situation.

# Static vs Dynamic Verification
* Dynamic - Exercising and observing product behavior
	* Software Testing
	* This is where we will start
* Static - Concerned with analysis of static representation to discover problems
	* Pair programming, inspections, and walk-throughs
	* We will get to this later

# Software Testing
* Goal of testing: Cause failures to uncover faults and errors

# [is_perfect](https://en.wikipedia.org/wiki/Perfect_number) Example
```
is_perfect(anumber:number) : bool
```
* How many tests are needed to robustly test is_perfect?
	* number in range (inclusive): 0 - 7

# [is_perfect](https://en.wikipedia.org/wiki/Perfect_number) Example
```
is_perfect(anumber:number) : bool
```
* How many tests are needed to robustly test is_perfect?
	* number in range (inclusive): 0 - 7
	* number in range (inclusive): 0 - 127

# [is_perfect](https://en.wikipedia.org/wiki/Perfect_number) Example
```
is_perfect(anumber:number) : bool
```
* How many tests are needed to robustly test is_perfect?
	* number in range (inclusive): 0 - 7
	* number in range (inclusive): 0 - 127
	* number in range (inclusive): 0 - 2147483647

# [is_perfect](https://en.wikipedia.org/wiki/Perfect_number) Example
```
is_perfect(anumber:number) : bool
```
* How many tests are needed to robustly test is_perfect?
	* number in range (inclusive): 0 - 7
	* number in range (inclusive): 0 - 127
	* number in range (inclusive): 0 - 2147483647
	* number is any positive integer

# Methods for Identifying Tests
* Specification Testing
	* Tests derived from the object of test's specification
	* Code is ignored
	* Data driven testing
	* AKA Black-box testing, Functional Testing
* Code-based Testing
	* Tests derived from looking at object of tests's code
	* Specification is ignored
	* Logic driven testing
	* AKA White-box testing, Clear-box testingn
