---
title: "Refactoring"
layout: notes
---

# Source Code Activities
* Fix a bug (Debugging)
* Add a new feature (Development)
* Understand what some part of the code is doing (Comprehension)
* Change for a new API (Adaptive Maintenance)

# Levels of Software Changes
* High Level
    * Features to be added to a system
    * e.g., Support new output format
* Intermediate Level
    * Change design
    * e.g., Move a method from one class to another
* Low Level
    * Change lines of code
    * e.g., Change code in a method

# Mathematics: Factor
* fac.tor
    * One of two or more quantities that divides a given quantity     without a remainder, e.g., 2 and 3 are factors of 6; a and b are   factors of ab
    * Multiple forms: 2 \* 3 = 6 and 1 \* 6 = 6 are equivalent
    * Multiple forms: x^2 - 4 and (x - 2)(x + 2) are equivalent
    * Best form depends on the problem being solved

* fac.tor.ing
    * To determine or indicate explicitly the factors of

# SE: Factoring
* fac.tor
    * The individual items that combined together form a complete      software system:
        * identifiers
        * contents of methods
        * contents of classes
        * relationship of a class to other classes
        * Many different ways to factor a software system

* fac.tor.ing
    * Determining the items, at design time, that make up a software      system

# Refactoring
* Process of changing a software system in such a way that it does not alter the external behavior of the code, yet improves its internal structure [Fowler'99]
* A program restructuring operation to support the design, evolution, and reuse of object oriented frameworks that preserve the behavioural aspects of the program [Opdyke'92]

# Specifics
* Source to source transformation
* Remain inside the same language, e.g., Java to Java, C++ to C++
* Does not change the programs behavior
* Originally designed for object-oriented languages, but can also be applied to non-object oriented language features, i.e., functions

# Relationship to Process
* Not the same as "cleaning up code" (which may cause changes to the behavior of the program), and is **not** an effective strategy
* Changes can be made in a small context, or to entire program
* Key element of entire process in agile methodologies
* Views design as an evolving process
* Strong testing support to preserve behavioral aspects

# Example:  Rename Method (before)
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=rename-method-before.hpp"></script>

# Example:  Rename Method (after)
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=rename-method-after.hpp"></script>

# Example: Rename Method Timeline
1. Copy the declaration/definition of the old method to the new method
1. Compile.  Can also commit at this point.
1. Change the body of the old method to call the new method
1. Compile and **be sure to commit**
1. Find all calls to the old method, and replace with calls to the new method
1. Compile after each change.  **Commit at least once**.
1. Remove the old method declaration and definition (if not a public interface)
1. Compile and commit

# Quick Examples
* Introduce Explaining Variable
* Rename Method
* Move Method
* Pullup Method
* Change Value to Reference
* Remove Parameter
* Extract Hierarchy


# Example: Split Temporary Variable (before)
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=split-temporary-variable-before.cpp"></script>


# Example: Split Temporary Variable (after)
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=split-temporary-variable-after.cpp"></script>


# Example:  Pull-Up Method

<img src="http://yuml.me/diagram/class/[Employee]^[Salesman||+getName()],[Employee]^[Engineer||+getName()]"/>

<img src="http://yuml.me/diagram/class/[Employee||+getName()]^[Salesman],[Employee||+getName()]^[Engineer]"/>

* *Methods with identical results in subclasses*
* **Move them to the superclass**


# Example:  Replace Superclass with Delegation
<img src="http://yuml.me/diagram/class/[Vector||+empty()]^[Stack]"/>

<img src="http://yuml.me/diagram/class/[Vector||+empty()]<-[Stack||+empty()]"/>

* *A subclass uses only part of a superclasses interface or does not want to inherit data.*
* **Create a field for the superclass, adjust methods to delegate to the superclass, and remove the subclassing**

# Catalog
* Collected by Fowler
* Refactoring entry composed of:
    * Name
    * Summary
    * Motivation
    * Mechanics
    * Examples

* Based on Java, but applicable to any OO language, and even to non-OO languages

# Categories
* Composing Methods
* Organizing Data
* Moving Features Between Objects
* Simplifying Conditional Expressions
* Simplifying Method Calls
* Dealing with Generalization
* Big Refactorings

# Why: Design Preservation
* Code changes often lead to a loss of the original design
* Loss of design is cumulative:
* Difficulties in design comprehension -\> Difficulties in preserving
    design -\> More rapid decay of design

* Refactoring improves the design of existing code

# Why: Comprehension
* Developers are most concerned with getting the program to work, not about future developers
* Refactoring makes existing code more readable
* Increases comprehension of existing code, leading to higher levels of code comprehension
* Often applied in stages

# Why: Debugging
* Greater program comprehension leads to easier debugging
* Increased readability leads to the discovery of possible errors
* Understanding gained during debugging can be put back into the code

# Why: Faster Programming
* Counterintuitive argument made by Fowler
* Good design is essential for rapid development
* Poor design allows for quick progress, but soon slows the process down
* Spend time debugging
* Changes take longer as you understand the system and find duplicate code
* Supported by Lehman's laws

# When?
* Adding Functionality
* Comprehension of existing program
* Preparation for addition
* Debugging
* Comprehension of existing program
* Code Review
* Preparation for suggestions to other programmers
* Stimulates other ideas
