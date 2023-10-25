---
title: "Design Pattern"
layout: notes
---

[design-patterns]: /images/design-patterns/design-patterns.png

# Background
* Well ("good enough") designed system leads to easier and more successful development
* Poor designed systems leads to slower and unsuccessful development
* What are good designs?
	* Designs are emergent from practice (via trial and error)
	* Search for recurring successful designs from emergent designs
* Goal: Support higher-levels of reuse (i.e., design reuse)

# Origins of Design Patterns

> Each pattern describes a problem which occurs over and over again in our environment and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it in the same way twice

* Christopher Alexander, A Pattern Language, 1977
* Context: City Planning and Building architectures

# Design Patterns - High-level
* Represent solutions to problems that arise when developing software within a particular context, e.g., problem/solution pairs within a given context
* Describe *recurring* design structures
* Describe the context of usage
* Patterns capture the static and dynamic relationships between structure and collaboration among key participants in software designs
* Micro-architecture

# Software Design Patterns

* *Design Patterns: Elements of Reusable Object-Oriented Software* Gamma, Helm, Johnson, Vlissides

* AKA, "Gang of 4 Book" (GoF'95)

# Elements of Design Patterns
* Design patterns have four essential elements
	1. Name
	2. Problem
	3. Solution
	4. Consequences

# 1. Pattern Name
* A handle used to describe:
	* A design problem
	* its solutions
	* its consequences
* Increases design vocabulary and provides common vocabulary
* Makes it possible to design at a higher level of abstraction
* Enhances communication

# 2. Problem
* Describes when to apply the pattern
* Explains the problem and its context
* May describe specific design problems and/or object structures
* May contain a list of preconditions that must be met for application of pattern to make sense

# 3. Solution
* Describe the elements that make up the design
	* Classes
	* Relationships
	* Responsibilities
	* Collaborations
* Does not describe specific concrete implementations
* Abstract description of design problems and how the pattern solves it

# 4. Consequences
* Results and trade-offs of applying the pattern
* Critical for:
	* Evalutation design alternatives
	* Understanding costs
	* Understanding benefits of applying the pattern
* Includes the impacts of a pattern of a system's
	* Extensibility
	* Portability

# What Design Patterns are and are NOT

* NOT
	* A design that can be encoded in classes and reused as is (e.g., vector, string)
	* Complex domain-specific designs (for an entire application or subsystem)
* Are
	> Descriptions of communicating object and classes that are customized to solve a general design problem in a particular context

# Where Used
* Object-oriented languages
* Procedural languages that define
	* Inheritance
	* Polymorphism
	* Encapsulation

# Design Pattern Descriptions
* UML is not generally sufficient
* Alternatives and tradeoffs that led to design decision are necessary to evaluate reuse of design decision
* Concrete examples are important
* History of why, when, and how set stage for context of usage

# Full Design Pattern Descriptions


|||
|-----------------------|----------------|
|Name and Classification|Collaborations  |
|Intent                 |Consequences    |
|AKA                    |Implementation  |
|Motivation             |Sample Code     |
|Applicability          |Known Uses      |
|Structure              |Related Patterns|
|Participants           |                |

# Categorizing Design Patterns
* Design patterns have a purpose and scope

# Pattern Purpose
* *Creational Patterns*
	* E.g., *Factory Method*  
* *Structural Patterns*
	* E.g., *Proxy*  
* *Behavioral Patterns*
	* E.g., *Template Method*

# Pattern Scope
* Scope is the domin over which a pattern applies
	* Class - relationships between base classes and their subclasses (static semantics)
	* Object -  relationships between peer objects (composition)
		* Most powerful form of reuse via variation of composition
* Some patterns apply to both scopes

# Design Patterns
![Design Patterns][design-patterns]

# Creational Patterns
* How the program creates and configures classes and objects
* *creational class patterns*
	* Abstracts how objects are instantiated
	* Hides creation process
	* May want to delay specifying class name explicitly when instantiating
* *creational object patterns*
	* Abstracts how sets of objects are created

# Creational Pattern List
* *Factory Method* - instantiation is deferred to subclasses
* *Builder* - separate object construction from representation
* *Abstract Factory* - create families of objects using only abstract classes
* *Prototype* - create new objects by copying an existing object
* *Singleton* - only allow one object of a class to exist

# Structural Patterns
* How classes and objects are composed to form larger objects, and
* How to decouple interface and implementation of classes/objects
* *structural class patterns*
	* Use inheritance to compose interface or implementation
	* Static, Compile-time only
* *structural object patterns*
	* Ways to assemble objects to realize new functionality
	* Static and dynamic, compile-time and runtime

# Structural Patterns List I
* *Proxy* -	a surrogate for an object
* *Adapter* - convert the interface of an object into one that clients expect
* *Bridge* - decouple an abstraction from implementation so both can vary
* *Composite* - allow clients to treat individual objects and composition of objects uniformly

# Structural Patterns List II
* *Decorator* - attach features to an object dynamically instead of subclassing
* *Facade* - unified interface to a set of interfaces, making a subsystem more straightforward to use
* *Flyweight* - efficiently handle large numbers of fine-grained objects

# Behavioral Patterns
* How with societies of classes and objects interact dynamically 
* Algorithms and the assignment of responsibilities between objects
* *class behavioral patterns* 
	* Captures how classes cooperate with sublasses with their subclasses specifiying semantics
* *object behavioral patterns* 
	* Groups of peer objects cooperate to perform a task

# Behavioral Patterns List I
* *Template Method* - a class pattern that defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior
* *Interpreter* - implements a specialized language
* *Mediator* - allows loose coupling between classes by being the only class that has detailed knowledge of their methods
* *Chain of Responsibility* - delegates commands to a chain of processing objects
* *Observer* - is a publish/subscribe pattern which allows many observer objects to see an event
* *Strategy* - allows one of a family of algorithms to be selected on-the-fly at runtime

# Behavioral Patterns List II
* *Command* - creates objects which encapsulate actions and parameters
* *State* - allows an object to alter its behavior when its internal state changes
* *Iterator* - accesses the elements of an object sequentially without exposing its underlying representation
* *Memento* - provides the ability to restore an object to its previous state (undo)
* *Visitor* - separates an algorithm from an object structure by moving the hierarchy of methods into one object
