---
title: Boundary-value Testing
layout: notes
---

[std::initializer_list]: https://en.cppreference.com/w/cpp/utility/initializer_list
[standards]: https://mdecker.net/standards/coding-standards.html

# Discussion
* Using CMake
* std::initializer_list

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

# Clone Lab
* Accept lab from URL on Canvas
* Clone repository

# CMake
* Build system generator
* Encode project build info in `CMakeLists.txt` file
* Generate build using `cmake`

# Example CMakeLists.txt
<script src="https://gist.github.com/mjdecker/99fececba24f26b104d339ab955b06d2.js?file=CMakeLists.txt"></script>

# Example Usage
<script src="https://gist.github.com/mjdecker/02b6e403407d2b7ece6a542d3c7260b0.js?file=cmake.sh"></script>

# [std::initializer_list]
<script src="https://gist.github.com/mjdecker/d4ad62727ebe9a49b7b9b81547efc248.js?file=initializer_list.cpp"></script>

* `std::initializer_list<T>`  - a lightweight proxy object that provides access to an array of objects of type const T
* Used to allow other objects to use array initialization syntax (i.e,`{ }`)

# Test Set ADT
1. Lab repo contains code for a Set ADT
2. This Set only works for integers in the range of [0-7]. Internally, an array of booleans is used to indicate integer membership, where a true at position `i` in the array denotes that the integer `i` is in the set.
3. Test each of the following using boundary-value testing:
	1. `set(std::initializer_list<int> a)` - specify values in set e.g., `{1, 4, 7}`
	2. `operator[](int num)` - check if `num` is in set
	3. `operator+(set a, set b)` - perform set union of `a` and `b` 

# Example `set(std::initializer_list<int> a)` Test
<script src="https://gist.github.com/mjdecker/fada6c1f03badcb9d874025b149767ad.js?file=test_initializer_list.cpp"></script>

# Example `operator[](int num)` Test
<script src="https://gist.github.com/mjdecker/fada6c1f03badcb9d874025b149767ad.js?file=test_subscript.cpp"></script>

# Example `operator+(set a, set b)` Test
<script src="https://gist.github.com/mjdecker/fada6c1f03badcb9d874025b149767ad.js?file=test_union.cpp"></script>

# Completion Requirements
* You have used [good commit messages](https://cbea.ms/git-commit/)
* You have committed incrementally
* You have committed and pushed the completed exercise
* Followed the class coding [standards]
* You have correctly applied boundary-value testing for each of the three constructors/methods
* Each constructor/method is tested in its own file
