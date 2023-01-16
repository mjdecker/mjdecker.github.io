---
title: Equivalence Partitioning
layout: notes
---

[weak-normal]: /images/equivalence-partitioning-types/equivalence-partitioning-types-weak-normal.png )
[pure-weak-robust]: /images/equivalence-partitioning-types/equivalence-partitioning-types-pure-weak-robust.png )
[revised-weak-robust]: /images/equivalence-partitioning-types/equivalence-partitioning-types-revised-weak-robust.png )
[strong-normal]: /images/equivalence-partitioning-types/equivalence-partitioning-types-strong-normal.png )
[strong-robust]: /images/equivalence-partitioning-types/equivalence-partitioning-types-strong-robust.png )

# Motivating Example 1
* The following is a function `is_palindrome` which return if the string argument is a palindrome:
```
is_palindrome(string) : bool
```

* Take the following tests:
	* "kayak"
	* "level"
	* "madam"
* Are all of these necessary?

# Motivating Example 1
* The following is a function `is_palindrome` which return if the string argument is a palindrome:
```
is_palindrome(string) : bool
```

* Take the following tests:
	* "kayak"
	* "level"
	* "madam"
* Are all of these necessary?
	* No, they are equivalent

# Motivating Example 2
* The following is a method of a *date* class (holds a calendar date).   The method increments the date held by the object and returns a reference to the object.

```
next() : date
```

* Ranges
	* 1 <= day <= 31, 1 <= month <= 12, & 1970 <= year <= 2000

* Some boundary-value tests are: <table><tr><td>February 30, 1970</td><td>February 31, 1970</td></tr></table>

* Others are: <table><tr><td>June 15, 1970</td><td>June 15, 1971</td><td>June 15, 1985</td></tr>
<tr><td>June 15, 1999</td><td>June 15, 2000</td><td></td></tr></table>

* Are all of these necessary or valid?

# Motivating Example 2
* The following is a method of a *date* class (holds a calendar date).   The method increments the date held by the object and returns a reference to the object.

```
next() : date
```

* Ranges
	* 1 <= day <= 31, 1 <= month <= 12, & 1970 <= year <= 2000

* Some boundary-value tests are: <table><tr><td>February 30, 1970</td><td>February 31, 1970</td></tr></table>

* Others are: <table><tr><td>June 15, 1970</td><td>June 15, 1971</td><td>June 15, 1985</td></tr>
<tr><td>June 15, 1999</td><td>June 15, 2000</td><td></td></tr></table>

* Are all of these necessary or valid?
	* February 30th and 31st are invalid
	* All June 15th tests are equivalent

# Equivalence Partitioning
* AKA Equivalence Class Testing
* Based on mathematical notion of equivalence class
* Idea: Partition the input such that all member of each partition may be considered equivalent

# Considerations
* Invalid values - do we test invalid partitions?
	* Normal vs Robust
* Single fault assumption - can we assume faults are the result of a single variable?
	* Weak vs Strong

# Basic Method
* Partition the input into equivalent classes
	* Each input value in exactly one equivalent class
	* All members of a class are can be treated as equivalent
* Pick any value from each equivalence class to represent and cover that class
* Write tests such that:
	* Minimize the number of tests
	* Each equivalence class of all variables appears in at least one test

# A Partitioning
* Will illustrate using 2-variables.  Extend the same to more variables
* Let:
	* a <= Variable 1 <= d
	* e <= Variable 2 <= g

# Variable 1 Equivalence Classes
* Variable 1 can be partitioned as:
	* Valid: 
		* a <= Variable 1 < b
		* b <= Variable 1 < c
		* c <= Variable 1 <= d
	* Invalid:
		* Variable 1 < a
		* Variable 1 > d

# Variable 2 Equivalence Classes
* Variable 2 can be partitioned as:
	* Valid: 
		* e <= Variable 2 < f
		* f <= Variable 2 <= g
	* Invalid:
		* Variable 2 < e
		* Variable 2 > g

# Weak Normal
* Cover each valid partition
* Multiple ways to partition

![weak-normal]

# Weak Robust
* Weak Normal with Invalid Partitions
* Pure: Consider all Invalid Partitions
* Revised: 1 variable is invalid partition, rest valid partitions
	* Identifies faults due to a single variable


# Pure Weak Robust
![pure-weak-robust]

# Revised Weak Robust
![revised-weak-robust]

# Strong Normal
* Test combinations of variables (valid partitions)
* Detects errors due to variable interactions

![strong-normal]

# Strong Robust
* Test combinations of variables on valid and invalid partitions
* Strengths of Strong and Robust
* Number of tests can grow large quickly

![strong-robust]

# Defining a Partition
* A partition may not be numeric
* There is not always one way to identify equivalence classes and partition
* Some partitions are better than others
* Better partition results in stronger test cases
* Creating a good partition is based on careful consideration of the input domain, output domain, and special situations
* May create multiple sets of equivalent classes and test each

# Partitioning Alternatives
* The following is a method of a *date* class (holds a calendar date: day/month/year).   The method increments the date held by the object and returns a reference the object.

```
next() : date
```

* Consider the following partitions on the month:
	* Month has 30 days
	* Month has 31 days

* Is there any duplication or gaps?
* Can we partition it better?

# Partitioning Alternatives
* The following is a method of a *date* class (holds a calendar date: day/month/year).   The method increments the date held by the object and returns a reference the object.

```
next() : date
```

* Consider the following partitions on the month:
	* Month has 30 days
	* Month has 31 days
	* Month is February

* Is there any duplication or gaps?
* Can we partition it better?

# Partitioning Alternatives
* The following is a method of a *date* class (holds a calendar date: day/month/year).   The method increments the date held by the object and returns a reference the object.

```
next() : date
```

* Is this better:
	* Month has 30 days
	* Month has 31 days (except December)
	* Month is February
	* Month is December
* How might we split days?
* Do all months need all day partitions tested?

# With Boundary Value testing
* Equilavent partitioning is commonly paired with boundary value testing
	* Break down into equivalence classes
	* Test boundary (and a typical) value of equivalence classes

# Additional Remarks
* Minimize the number of tests without sacrificing necessary quality
* Common partitions to include:
	* empty, zero, and/or null
	* positive/negative
	* zero, single, many
* It can be helpful to partition based on a single property at a time to help derive tests.  However, avoid picking redundant tests.
* If have variable that only has one reasonable partition (character in split), should still test two.

# Additional Remarks (II)
* Start with simple tests and incrementally make more difficult (add one more tested piece of functionality)
	* Can help localize errors
* Functions/methods/etc call other functions, methods, etc. (and thus are dependent)
	* Start testing the entity of least dependence
	* E.g., in a class, constructors are often the most important as all methods/functions depend on that working correctly
	*  E.g., if you define equality (`operator==`), make sure you test thoroughly and early

# Additional Remarks (III)
* A test suite defines the intended behavior
* A good test suite is a requirement for efficient programming

