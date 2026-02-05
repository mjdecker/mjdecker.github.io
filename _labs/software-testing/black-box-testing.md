---
title: Black-box Testing Lab
layout: notes
---

[standards]: https://mdecker.net/standards/coding-standards.html
[good commit messages]: https://cbea.ms/git-commit/

# Discussion
* Sign attendance sheet
* Short `Makefile` discussion
* Apply black-box testing techniques to a `String` class

# Makefile
<script src="https://gist.github.com/mjdecker/9be8120fcd74d6dcceebec9dcbc905a6.js?file=Makefile"></script>

* A Makefile is a common Unix build tool (Windows has NMake)
* You specify *rules* (which are more like *recipes*) in a file `Makefile` and the tool `make` uses these to build a program

# make

|command|description|
|---|---|
|make|Use Makefile in current directory and run top rule|
|make target|Build specified target with Makefile in current directory|
|make -f file|Build using file, running top rule|

* Uses `Makefile` to build a program or perform some other operation
* Common Makefile Rules/Targets
	* clean - remove generated build files
	* test or tests - run test suite
	* install - install the application

# Setup
* Use the link provided on Canvas, to create and clone the repository for the lab.

# String class
* `String` is implemented as fixed-size (7 character + 1 null character) array with the following invariants:
	* `str[length()] == 0`
	* `0 <= length() <= capacity()`
	* `capacity() == STRING_SIZE - 1 // (8 - 1)`
* `String` is specifically designed only to work with ASCII characters and you need not worry about non-ASCII characters
* Use this information when developing tests

# Test String class
* Apply black box testing techniques to rigorously test (each in a separate file)
	* `String()` - Default constructor: initialize to empty String
	* `String(const char[])` - C-String Constructor: initialize String to copy of c-string parameter
	* `operator==(const String&)` - Performs standard string equality
* You may use other String methods and assume they work correctly
* Don't assume another method/constructor works if it is untested
	* E.G., Can't use `operator==` in other test files until you have made sure it works
* `make tests` builds and runs the tests

---

# A Few Constructor Testing Gotchas
<script src="https://gist.github.com/mjdecker/7da39b1afa3371a8d88d962d8d5b3892.js?file=test_constructors.cpp"></script>

* Need to make sure your asserts are really testing something
* The following asserts have the `lhs` and `rhs` constructed via the same constructor and are not testing much of anything

# Completion Requirements
* You have used [good commit messages]
* You have committed incrementally
* You have committed and pushed the completed exercise
* Followed the class coding [standards]
* Each of the test files rigorously tests the appropriate method