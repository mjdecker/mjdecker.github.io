---
title: "Design Pattern - Singleton"
layout: notes
---

[structural]: https://mdecker.net/notes/software-architecture/design-patterns/intro.html#/21

[singleton]: /images/design-patterns/singleton/singleton.svg
[structure]: /images/design-patterns/singleton/singleton.svg

# Singleton
> Ensure a class only has one instance and provide a global point of access to it

* [Structural Pattern][structural]

# Singleton
![singleton]

# Singleton: Motivation
* Sometimes, a class must have exactly one instance, e.g., a class that maps to a physical resource
* How do we ensure that a class has only one instance and that the instance is easily accessible? A global variable makes an object accessible, but it doesn’t keep you from instantiating multiple objects.
* A better solution is to make the class itself responsible for keeping track of its sole instance, i.e., a Singleton

# Singleton: Applicability
* Use the Singleton pattern when
	* There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point
	* When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code

# Singleton: Structure
![structure]

# Singleton: Participants
* *Singleton*
	* Defines an instance operation that lets clients access a unique instance
	* The instance (in C++) is a static member function
	* Class may be responsible for creating a unique instance (typical)

# Singleton: Consequences
* Controls access to the sole instance
* In place of global variables, and avoids polluting the global namespace
* The Singleton class can be subclassed
* Once in place, can change your mind and allow more than one instance
* More flexible than static member functions, which are not polymorphic (i.e., cannot make them virtual)

# Implementation
<script class="medium" src="https://gist.github.com/mjdecker/7b3bcce938d6d4e5c557ba95e2ed6120.js?file=PatternSingleton.hpp"></script>

# Thread-Safe Implementation
<script class="smaller" src="https://gist.github.com/mjdecker/7b3bcce938d6d4e5c557ba95e2ed6120.js?file=PatternSingleton2.hpp"></script>

# [DCL (Double-Checked Locking) Pattern](https://en.wikipedia.org/wiki/Double-checked_locking)
<script class="smaller" src="https://gist.github.com/mjdecker/7b3bcce938d6d4e5c557ba95e2ed6120.js?file=PatternSingleton3.hpp"></script>

# Related Patterns
* *Abstract Factory*, *Builder*, *Prototype*
	* Can be implemented using the Singleton pattern

# Discussion
* Some strong opinions against the necessity of using the Singleton pattern
* Singleton may be used to get around a poor design
* Note that the implementations of many standard data structures are not entirely thread safe
