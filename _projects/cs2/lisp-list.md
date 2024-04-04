---
title: "Project: Lisp List"
layout: markdown
---

# Project 3: Lisp List

## Objective(s)
* Develop a recursive list class

## Overview
* You will be implementing a *list* class modeled off of Lisp's list structre

## Problem and Specification
* [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) (short for list processing) is a functional programming language first introduced in 1960.  It is a highly fluential programming langauge who has modern dialects today and influences modern programming languages.  At its core, Lisp has two fundamental data types: atoms & lists. Here we will focus on lists, which correspond to a linked list in other languages

* Lists in Lisp are a recursive structure built using [cons](https://en.wikipedia.org/wiki/Lisp_(programming_language)#Conses_and_lists) (short for construct). A cons is a pair of pointers: car & cdr, where car points to the first element of the list (i.e. the head) and cdr points to the rest of the list. You can think of cons as a node where car is the data and cdr is the next. For an explanation on why they are called car and cdr see: [here](https://en.wikipedia.org/wiki/CAR_and_CDR). 

* For our implementation, a list has a cons called a cell.  For an empty list, the cell is a *nullptr*, otherwise it has a dynamically allocated cons (the cons struct is fully implemented and provided for you).   In our cons, car is an int (no pointer), and cdr is a pointer to another list object containing the rest of the list. For example, given a list: *{1, 2, 3, 4}*. cell is a cons where car is the int *1* and cdr is the list *{2, 3, 4}*.

## Requirements
* Follow,  class [Programming Requirements](https://mjdecker.github.io/standards/coding-standards.html)
* Finished work must be submitted to GitHub.
* You must use the provided `list` class and `cons` struct to implement your ADT.
* Don't edit `lisp_list.hpp`, the supplied test files, or the provided constructors/methods in `list_list.cpp`
* All constructors, destructor, and methods have comments explaining them in `lisp_list.hpp`
* Constructors, destructors, and methods that have a comment with ***Recursive implementation*** must be implemented using recursion. These are also listed below as Non-recursive and Recursive
* An initializer_list constructor is provided for testing. Do NOT use it to implement any of the required constructors, destructors, or methods
* For more information on proper usage, see the file with tests for the given item

* **Non recursive**
    * Default constructor - intialize to empty list, where `cell` is `nullptr`
    * int constructor - intialize to single element list, where` cell` is dynamically allocated with its `car` being the provided int and its `cdr` an empty list.
    * `is_empty` - returns if the  list is empty
	* `first` - returns first element, cell's car
	* `rest` - returns rest of list, cell's cdr
    * `swap` - swaps data members with another linked list
    * Copy assignment - deep copy of another linked list

* **Recursive**
    * Copy constuctor - initializes list as a deep copy of a given list
    * Destructor - deletes memory dynamically allocated for list
    * `size` - returns how many elements are in the list
    * `nth` - retuns the nth item in list (0 is 1st, 1 is second, etc.)
    * `operator==` - compares two lists for equality
    * `operator<<` - outputs a list with items (the ints) space separated. Last element does not have a space after it.
    * `operator+` - returns a new list that is lhs concatenated with rhs

* Testing
	* There are a provided set of tests to validate your implementation of the above.  A visual studio solution is provided for each
    * Destructor is tested via checking of memory leaks in auto-grader
    * In order to provide this testing, some of the above constructors/methods may require other constructors/destructor/methods

## Rubric
* [] No use of using namespace (if use -50 points)
* [] Programming style/requirements (up to -20)
* [] Implementations are in cpp file (10 points)

* [] Default constructor (5 points)
    * [] implementation present
    * [] tests pass
* [] Int constructor (5 points)
    * [] implementation present
    * [] tests pass
* [] is_empty (5 points)
    * [] implementation present
    * [] tests pass
* [] first (5 points)
    * [] implementation present
    * [] tests pass
* [] rest (5 points)
    * [] implementation present
    * [] tests pass
* [] swap (5 points)
    * [] implementation present
    * [] tests pass
* [] Copy assignment (5 points)
    * [] implementation present
    * [] tests pass

* [] Copy constructor (10 points)
    * [] implementation present
    * [] tests pass
* [] Destructor (10 points)
    * [] implementation present
    * [] tests pass
* [] size (5 points)
    * [] implementation present
    * [] tests pass
* [] nth (5 points)
    * [] implementation present
    * [] tests pass
* [] operator== (10 points)
    * [] implementation present
    * [] tests pass
* [] operator<< (5 points)
    * [] implementation present
    * [] tests pass
* [] operator+ (10 points)
    * [] implementation present
    * [] tests pass
