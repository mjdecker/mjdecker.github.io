---
title: Anatomy of a Test
layout: notes
---


# Discussion
* Parts of a single test
* Learn a basic format of a test
* Write several tests in this format

# Lab Grading Policy
* Labs are worth 10 points
	* 5 points for attending
	* 1 point for good commit messages
	* 1 point for incremental commits
	* 3 points for completing 
		* 1 - anything started
		* 2 - about half complete
		* 3 - >= mostly complete
* Labs are due before the following Friday

# A Basic Test Format
<script src="https://gist.github.com/mjdecker/19cf2939d0d752ff5f20c80a8da9e4dc.js"></script>

* Each object under test has its own file with a main function
* All test cases for that test object are written within the main function
* A single typical test case consists of three parts: setup, test, and verify
* Repeat this same structure for each test case

# Basic Test Anatomy
<script src="https://gist.github.com/mjdecker/19cf2939d0d752ff5f20c80a8da9e4dc.js@filename=test_is_perfect.cpp"></script>

* A single test is contained within an expression block (i.e.,`{}`)
* An expression block helps to isolate the test from others
	* Success/failure of one test case impacting another
	*  Reuse variable names
* Parts - AKA, AAA Testing - Arange, Act, Assert
	* *setup* gives the code needed to run before the test can be executed (i.e., it sets up the test). Often, this consists of initializing the data for the test
	* *test* performs the actual test and obtains the results
	* *verify* verifies that the actual result of the object under test matches the expected

# More about Verify 
* `assert` (a feature of many languages) is used to perform the verification
* Included with `#include <cassert>`
* Takes a *true*/*false* value corresponding to if the actual result matches the expected (e.g., `result == true`). I
	* If *true*, does nothing (i.e., the test passes)
	* if *false*, the test fails, an assertion failure occurs, and the program terminates with an error. 

# Assertion Failure
* On an assertion failure, the program terminates with a non-zero return status 
* The assertion failure indicates what file, function, and line the failure occurred at, and therefore, what test case failed
* Pro Tip: 
	* Lay out your test cases such that each test case incrementally builds and tests more than the previous test case
	* When an assertion failure occurs, this can be used to help narrow down the cause and code responsible

```
Assertion failed: (result), function main, file test_is_perfect.cpp, line 19.
Abort trap: 6
```

# (Good) Testing is Automatic
* Executing the test file executes all tests
* No assertion failure means all tests pass, otherwise, something needs fixed (code or test)
* Can be tied into a build system/CICD to be run automatically

# Developers are Lazy (not a negative)
<script src="https://gist.github.com/mjdecker/19cf2939d0d752ff5f20c80a8da9e4dc.js@filename=test_is_perfect_short.cpp"></script>

* The full three parts were separately shown for illustration/explanation purposes; follow this practice for now
* In practice, parts may be inlined, especially when they are trivial. 

# Other Comments
* Why test the input`number == 6`?
	* Helpful to make sure that, if the test is failing, it is the object under test and not an error with the setup.
	* This is a good habit to form, but it is excessive in the simple example given
* `assert` takes anything that results in true or false
	* Result is a boolean; nothing special needs to be done
	* Use a comparison (e.g., `answer == 42`) or helper function (returning a boolean or something that can be compared).

# Exercise Requirements
* The starting code is found in the supplied Git repository (see below)
* The starting code consists of four files:
	* `rotate.hpp` - header file for `rotate` function
	* `rotate.cpp` - implementation file for `rotate` function
	* `test_rotate.cpp` - file you will write tests for `rotate` function
	* `CMakeLists.txt` - File to build/test `rotate` function (not required to use)
* An example test case is given in `test_rotate.cpp`
* Write 3 additional test cases for the `rotate` function in `test_rotate.cpp` that follow the format and anatomy discussed above
* All tests **MUST** pass

# Completion Requirements
* You have used [good commit messages](https://cbea.ms/git-commit/)
* You have committed incrementally
* You have committed and pushed the completed exercise
* You have written three tests for `rotate` correctly
