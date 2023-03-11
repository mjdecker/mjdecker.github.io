---
title: "Code Smells"
layout: notes
---

 [Taxonomy]: https://mmantyla.github.io/BadCodeSmellsTaxonomy

# Code Smell
* Indicates the need for a refactoring
* Typically based on developer intuition
* Code smells [Fowler, Beck]
* [Taxonomy] \[Mantlya]
	* Mäntylä, M. V. and Lassenius, C. "Subjective Evaluation of Software Evolvability Using Code Smells: An Empirical Study". Journal of
Empirical Software Engineering, vol. 11, no. 3, 2006, pp. 395-431

# Smells: The Bloaters

> An entity that has grown so large or long that it can't be effectively
handled.

* Long Method
* Large Class
* Primitive Obsession
* Long Parameter List
* Data Clumps

# Long Method

> Too much code in one method

* Hinders: comprehension, reuse
* Good naming creates an abstraction
* Main Refactoring: Extract Method
* Supporting Refactorings:
    -   Replace Temp with Query
    -   Introduce Parameter Object
    -   Preserve Whole Object

# Large Class

> Classes that have too many fields (instance variables), i.e., store too
much state

* Don't confuse with a single field that is a container
* Hinders: non-duplicated code
* Main Refactorings: Extract Class, Extract Subclass many times
* Supporting Refactoring: Extract Interface

# Primitive Obsession Example
<script src="https://gist.github.com/mjdecker/fb3c10b769d46c468e1c2e25639694ab.js?file=car-primitives.hpp"></script>

<script src="https://gist.github.com/mjdecker/fb3c10b769d46c468e1c2e25639694ab.js?file=car-color-type.hpp"></script>

# Primitive Obsession

> Use of primitive types when object is needed, e.g., array, Money, Data,
etc.

* E.g., Use of string or int to represent specific states
* Hinders: comprehension, reuse
* Main Refactoring: Replace Data Value with Object, Replace Type Code
    with {Class, Subclasses, State/Strategy}
* For many fields: Extract Class
* For many parameters: Introduce Parameter Object
* For arrays: Replace Array with Object

# Long Parameter Lists

> Too many parameters

* Functionality is wrong, or not enough use of fields
* Hinders: comprehension, use, adding parameters
* Main Refactoring: Replace Parameter with Method, Preserve Whole
    Object, Introduce Parameter Object

# Data Clumps

> Bunches of data that always hang around together

* Hinders: comprehension, reuse
* For fields: Extract Class
* For method signatures: Introduce Parameter Object, Preserve Whole
    Object

# Smells: Object-Orientation Abusers

> Where code does not fully exploit the possibilities of object-oriented
design

* Switch Statements
* Temporary Field
* Refused Bequest
* Alternative Classes with Different Interfaces

# Switch Statements

> Most switch statements should be replaced by polymorphism

* Hinders: comprehension, reuse
* Secondary Refactorings: Extract Method, Move Method
* Main Refactorings: Replace Type Code with {Subclasses,
    State/Strategy}, Replace Conditional with Polymorphism
* When polymorphism is overkill: Replace Parameter with Explicit
    Methods
* Case is Null: Introduct Null Object

# Temporary Field

> Field which is only set/used in certain situations

* Hinders: comprehension, reuse
* Main Refactoring: Extract Class, Introduce Null Object

# Refused Bequest

> Subclass doesn't use all the inherited methods or data

* Hinders: comprehension, reuse
* Check Hierarchy: Push Down Method, Push Down Field
* Reusing behavior, but not reusing interface: Replace Inheritance
    with Delegation

# Alternative Classes with Different Interfaces

> Classes that are similar on the inside, but differ on the outside

* Hinders: comprehension, reuse
* Main Refactoring: Rename Method
* For a class that is not doing enough: Move Method

# Smells: Change-Preventers

> Hinder further changing or developing the system

* Divergent Change
* Shotgun Surgery
* Parallel Inheritance Hierarchies

# Divergent Change

> One class is commonly changed in different ways for different purposes
(i.e., feature changes)

* Typically when each change is a set of methods.
* Hinders: comprehension, reuse
* Main Refactoring: Extract Class

# Shotgun Surgery

> When a change is made to a system, lots of little changes have to be
performed in many classes.

* Opposite of Divergent Change
* Want a 1-1 link between (feature) changes and classes
* Hinders: comprehension, reuse
* Try: Move Method, Move Field

# Parallel Inheritance Hierarchies

> Every time you create a subclass one hierarchy, you have to create a
subclass in another hierarchy

* Often common prefix names
* Hinders: comprehension, reuse
* Main Refactorings: Move Method, Move Field

# Smells: Dispensables

> Code or classes that should be removed

* Lazy Class
* Data Class
* Duplicate Code
* Dead Code
* Speculative Generality

# Lazy Class

> A class that is not doing enough

* Hinders: comprehension, reuse
* Main Refactorings: Collapse Hierarchy, Inline Class

# Data Class

> Classes with fields, getters, and setters, but nothing else

* Hinders: comprehension, reuse
* Main Refactorings: Move Method

# Duplicate Code

* Hinders: comprehension, maintenance
* Main Refactorings: Extract Method, Pull Up Field, Form Template
    Method, Substitute Algorithm

# Dead Code

> Program entity (class, method, parameter, code fragment, statement,
variable) that is unused in the system.

* Hinders: comprehension, maintenance
* Just delete the code

# Speculative Generality

> Code that was over-generalized in an attempt to predict future needs

* Hinders: comprehension, maintenance
* Abstract classes that aren't doing much: Collapse Hierarchy
* Remove unnecessary delegation: Inline Class
* Methods with unused parameters: Remove Parameter
* Methods with odd abstract names: Rename Method

# Smells: Couplers

> Lowering coupling, and problems that you get when trying to do so

* Feature Envy
* Inappropriate Intimacy
* Message Chains
* Middle Man

# Feature Envy

> One method is too interested in other classes

* Hinders: comprehension, maintenance

# Inappropriate Intimacy

> Two classes that are too tightly coupled to each other

* Hinders: comprehension, maintenance

# Message Chains

> A class needs data from another class, and has to go through a long
chain of calls to get to it

<script src="https://gist.github.com/mjdecker/fb3c10b769d46c468e1c2e25639694ab.js?file=message-chain.hpp"></script>

* Hinders: comprehension, maintenance

# Middle Man

* Hinders: comprehension, maintenance

# Coda

* Code smells are an indication that refactoring should occur
* How do we find them?
* How do we automatically find them? Metrics? AI? Heuristics?
