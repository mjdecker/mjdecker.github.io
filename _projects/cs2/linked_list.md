---
title: "Project: Linked List"
layout: markdown
---

# Project 2: Linked List

## Objective(s)
* Develop & implement a doubly linked list ADT in C++. 

## Overview
* You will be implementing a *linked_list* class.  

## Problem and Specification
* Along with vectors, linked-list are a fundamental data structure used in programming. There are tradeoffs between picking one over the other. Here a brief comparison of vectors and linked lists:

* Vector
    * Benefits
        * Quick random access (any element is equally fast to access)
        * Easy to add/remove elements to the end
    * Disadvantages
        * Adding/removing from beginning or middle is costly
* Linked List      
    * Benefits
        * Efficient add/removal of elements (beginning, middle, and end)
        * Efficient access to front of list (possibly, end depending on implementation)
    * Disadvantages
        * Does not support efficient random access

* You will be implementing a linked-list for this project. As part of this you will be implementing some methods that linked list is ideal for (e.g., insert/remove) and some non-traditional linked list methods to help you get an idea of where it is not efficient (e.g., operator[]).
* The type of linked-list you will be implementing is known as a doubly linked list.  Instead of the ones we have seen so far that have a node that points to the next element, this one will have a pointers that point to both the next and the previous element.  The first (i.e., head) node will have a previous pointer set to `nullptr` just as the last element (i.e., tail) will have a next that points `nullptr`. See `linked_list.hpp` for what the node class provides.

## Requirements
* Follow,  class [Programming Requirements](https://mjdecker.github.io/standards/coding-standards.html)
* Finished work must be submitted to GitHub.
* You must use the provided class construct to implement your ADT.
* Don't edit `linked_list.hpp` or the supplied test files.
* For more information on proper usage, see the file with tests for the given item
* **Iteration 1 - 50 points**-  [Rubric](#iteration-1-rubric)
    * Default constructor - intialize to empty list, head is `nullptr`
    * Copy constructor - Deep copy of another linked list
    * Destructor - Deallocates the memory
    * `swap` - Swaps data members with another linked list
    * Copy assignment - Deep copy of another linked list
    * `is_empty` - returns if the linked list is empty
    * `front` - Both const/non-const, returning the head element's value
    * Testing
        * There are a provided set of tests to validate your implementation of the above. These are run by auto-grader, but not Visual Studio.

* **Iteration 2 - 50 points** - [Rubric](#iteration-2-rubric)
    * `length` - Returns how many elements are in the linked list
    * `insert_before` - Inserts the given string as a new node before the specified node
    * `remove` - Remove the given node from the list. Make sure to deallocate
    * `operator[]` - Return the node at the given index, return `nullptr` if invalid index
    * `find` - Return the node with given string value, if it does not exist return `nullptr`
    * Testing
        * There are a provided set of tests to validate your implementation of the above. These are run by auto-grader, but not Visual Studio.

## Iteration 1 Rubric
* [] No use of using namespace (if use -25 points)
* [] Programming style/requirements (up to -10)
* [] Implementations are in cpp file (5 points)
* [] Default constructor (5 points)
    * [] implementation present
    * [] tests pass
* [] Copy constructor (10 points)
    * [] implementation present
    * [] tests pass
* [] Destructor (5 points)
    * [] implementation present
    * [] tests pass
* [] Copy/assignment & Swap (10 points)
    * [] implementation present
    * [] tests pass
* [] is_empty (5 points)
    * [] implementation present
    * [] tests pass
* [] front (10 points)
    * [] both implementations present
    * [] tests pass

## Iteration 2 Rubric
* [] No use of using namespace (if use -25 points)
* [] Programming style/requirements (up to -10)
* [] Implementations are in cpp file (5 points)
* [] length (5 points)
    * [] implementation present
    * [] tests pass
* [] insert_before (10 points)
    * [] implementation present
    * [] tests pass
* [] remove (10 points)
    * [] implementation present
    * [] tests pass
* [] subscript operator (10 points)
    * [] implementation present
    * [] tests pass
* [] find (10 points)
    * [] implementation present
    * [] tests pass
