---
title: "Software Design"
layout: notes
---

# Software Design
> Software design is the process of defining software methods, functions, objects, and the overall structure and interaction of your code so that the resulting functionality will satisfy user requirements [UCAR](https://sea.ucar.edu/best-practices/design)

# Explanation

* > Software design is the process by which an agent creates a specification of a software artifact, intended to accomplish goals, using a set of primitive components and subject to constraints [[1]](https://link.springer.com/chapter/10.1007%2F978-3-540-92966-6_6). Software design may refer to either "all the activity involved in conceptualizing, framing, implementing, commissioning, and ultimately modifying complex systems" or "the activity following requirements specification and before programming, as ... [in] a stylized software engineering process"[[2]](https://dl.acm.org/doi/10.1145/1012037.1012054).

* > Software design usually involves problem solving and planning a software solution. This includes both a low-level component and algorithm design and a high-level, architecture design.

[src](https://en.wikipedia.org/wiki/Software_design)

# Levels of Design
* System

* Subsystem

* Namespace/Directory

* **Class**/File

* **Method**/Function

* Statement (?)

# Types of Design
* *structured design*

	* From structured programming
	* What are the functions?

* *object-oriented design*

	* From object-oriented programming
	* What are the classes?

# Class Design
* What classes exist

* Identifier (name) of the classes

* Methods of the class: name, parameters, return type, specifiers (e.g., *const*), access (e.g., *public*, *private*, *protected*)

* Relationship of classes to other classes

# Target Audience for Design Decisions
* You as a developer

* Other developers

* You in a few months

* Other developers in a few months

* Future developers

# Informally, what indicates a good design?
* Easy to add features

* Easy to determine where bugs are coming from, and to fix

* Has the required efficiency

* Has the required security

* Handles errors safely

# Why does bad design occur?
* Design involves making choices between tradeoffs

* Design decisions are made before the problem is fully understood

* Incomplete knowledge by previous and current software engineers

* Requirements have changed since design was made

* Security requirements have changed since the design was made

# Good Design Features
* Consistent, shared vocabulary

* Simplicity

* Clear roles

* High *cohesion*

* Low *coupling*

# Design Example: MethodCount

> Count the number of methods per class for a software system written in C++.

# Design Choices

![](https://yuml.me/collard/software-design-methodcount-internal.svg)
![](https://yuml.me/collard/software-design-methodcount-external.svg)
![](https://yuml.me/collard/software-design-methodcount-parser.svg)

# Software Design Characteristics

| | |
|--------------------------------|---------------|
|compatibility (interoperability)|extensibility  |
|fault-tolerance                 |modularity     |
|reliability                     |maintainability|
|usability                       |reusability    |
|performance (efficiency)        |security       |
|scalability                     |portability    |
|robustness                      |               |

# Software Design Characteristics Definitions I
* Compatibility ([Interoperability](https://en.wikipedia.org/wiki/Interoperability)) - The software can operate with other products designed for interoperability. For example, a piece of software may be backward-compatible with an older version of itself.
* [Extensibility](https://en.wikipedia.org/wiki/Extensibility) - Developers can add new capabilities to the software without significant changes to the underlying architecture.
* [Modularity](https://en.wikipedia.org/wiki/Modularity) - The software comprises well defined, independent components. This independence leads to better maintainability. The components could then be implemented and tested in isolation before being integrated to form a desired software system.  Isolation before integration allows the division of work in a software development project.

# Software Design Characteristics Definitions II
* [Fault-tolerance](https://en.wikipedia.org/wiki/Fault-tolerance) - The software is resistant to and able to recover from component failure.
* [Maintainability](https://en.wikipedia.org/wiki/Maintainability) - A measure of how easily developers can make bug fixes or functional modifications. High maintainability can be the product of modularity and extensibility.
* Reliability ([Software durability](https://en.wikipedia.org/wiki/Software_durability)) - The software is able to perform a required function under stated conditions for a specified period of time.

# Software Design Characteristics Definitions III
* [Reusability](https://en.wikipedia.org/wiki/Reusability) - Some or all aspects of the software are usable in other projects with little to no modification.
* [Robustness](https://en.wikipedia.org/wiki/Fault-tolerant_system) - The software can operate under stress or tolerate unpredictable or invalid input. For example, a design can be resilient to low memory conditions.
* [Security](https://en.wikipedia.org/wiki/Computer_security) - The software can withstand and resist hostile acts and influences.

# Software Design Characteristics Definitions IV

* [Usability](https://en.wikipedia.org/wiki/Usability) - The software [user interface](https://en.wikipedia.org/wiki/User_interface) must be usable for its target user/audience. Default values for the parameters are a good choice for the majority of the users.
* [Performance](https://en.wikipedia.org/wiki/Performance) - The software performs its tasks within a time-frame that is acceptable for the user, and does not require too much memory.
* [Portability](https://en.wikipedia.org/wiki/Software_portability) - The software should be usable across many different conditions and environments.
* [Scalability](https://en.wikipedia.org/wiki/Scalability) - The software adapts well to increasing data or the number of users.
