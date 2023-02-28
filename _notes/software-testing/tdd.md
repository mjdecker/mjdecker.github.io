---
title: Test-Driven Development
layout: notes
---

[Source-code]: https://gist.github.com/mjdecker/3b6150cda6916a6763b90682add216f8
[TTY Plays]: https://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/tty_plays/tdd/
[Iteration 1]: https://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/tty_plays/tdd/tdd-iteration1.txt
[Iteration 2]: https://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/tty_plays/tdd/tdd-iteration2.txt
[Iteration 3]: https://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/tty_plays/tdd/tdd-iteration3.txt

# Test-Driven Development (TDD)
* Software development methodology where software requirements are used to derive test cases before code is written
* Unit testing - class, module, method/function
* Developed/Rediscovered by Kent Beck
* Core component of agile processes such as XP

# Steps - TDD Process

1. Add a test
2. Red Phase: Run tests to ensure failure 
3. Make it work
4. Green Phase: Run tests to ensure passes
5. Refactor
6. Repeat

# Add a test
* Each interation a new test is written
* Each test case defines more of the desired behavior
* Be incremental

# Red Phase
* Run test suite
* Written test is on newly unimplemented behavior and should fail
* If passes, problem with test harness or test case is flawed

# Make it work
* Implement code to cause test to pass
* May be imperfect, inelegant
* Do not implement behavior beyond the scope of the test 

# Green Phase
* Run test suite
* Verify implemented code provides behavior required by test case

# Refactor
* Improve the design and implementation of the code
* Do not modify behavior, test suite must still pass
* Code may have been inelegent or imperfect
* Several interations of TDD can compound this

# Repeat
* Repeat the entire process
* You are done when all requirements are tested and pass

# Palindrome Example
* We will develop a function to check if a string is a palindrome or not
* We will develop it using TDD
* [Source-code]
* [TTY Plays]

# [Iteration 1]

# [Iteration 2]

# [Iteration 3]

# Repeat Until all Functionality is Implemented/Tested

# TDD Retrospective
* Tests and unit under test are developed incrementally
* Each test tests one new thing
* A test suite encodes the desired behavior
* May find out missing tests, which you add/support latter

