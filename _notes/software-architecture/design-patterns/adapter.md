---
title: "Design Pattern - Adapter"
layout: notes
---

[structuralpatterns]: https://www.cs.bgsu.edu/mdecke/classes/software_architecture/notes/design_patterns.html#/20

[motivation]: /images/design-patterns/adapter/motivation.svg
[classstructure]: /images/design-patterns/adapter/class-structure.svg
[objectstructure]: /images/design-patterns/adapter/object-structure.svg
[implementation1]: /images/design-patterns/adapter/implementation1.svg
[implementation2]: /images/design-patterns/adapter/implementation2.svg

# Adapter
> Convert the interface of a class into another interface clients expect

> Adapter lets classes work together with incompatible interfaces

* [Structural Pattern][structuralpatterns]
* AKA: Wrapper

# Adapter: Motivation
![][motivation]

# Adapter
![][motivation]

* Converts requests to the client into requests for the target class
* Allows a current class to be used by a client expecting a different interface
* Often the first step towards replacement/major changes to a class with the "wrong" interface
* May add functionality missing in the target class

# Adapter: Applicability
![][motivation]

* Want to use an existing class, and its interface does not match the one you need
* Want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don’t necessarily have compatible interfaces
* *object adapter* We Need to use several existing subclasses, but it’s impractical to adapt their interface by subclassing every one

# Adapter: Class Adapter Structure
![][classstructure]

<script src="https://gist.github.com/mjdecker/b7c3fed883750d121dca3b8c724a526a.js?file=class.cpp"></script>

# Adapter: Object Adapter Structure
![][objectstructure]

<script src="https://gist.github.com/mjdecker/b7c3fed883750d121dca3b8c724a526a.js?file=object.cpp"></script>

# Adapter: Structure Comparison
![][classstructure]

![][objectstructure]

# Adapter: Code Comparison

<script src="https://gist.github.com/mjdecker/b7c3fed883750d121dca3b8c724a526a.js?file=class.cpp"></script>

<script src="https://gist.github.com/mjdecker/b7c3fed883750d121dca3b8c724a526a.js?file=object.cpp"></script>

# Adapter: Participants
![][objectstructure]

*  Target (e.g., Shape)
    * Defines the domain-specific interface that Client uses
* Client (e.g., DrawingEditor)
    * Collaborates with objects conforming to the Target interface
* Adaptee (e.g., TextView)
    * Defines an existing interface that needs adapting
* Adapter (e.g., TextShape)
    * Adapts the Adaptee interface to the Target interface

# Adapter: Collaborations
![][objectstructure]

* Clients call operations on an Adapter instance
* The adapter calls Adaptee operations that carry out the request

# Adapter: Class Adapter Consequences
![][classstructure]

* Adapts Adaptee to Target by committing to a concrete Adaptee class, which does not allow adaptation of a class and its subclasses
* Since Adapter is a subclass of Adaptee, the Adapter can override some of Adaptee's behavior
* Introduces only one object, with no further pointer indirection

# Adapter: Object Adapter Consequences
![][objectstructure]

* Adapter works with many Adaptees (i.e., Adaptee and all of its subclasses) adding functionality to all Adaptees at once
* Harder to override adaptee behavior, requires subclassing Adaptee and making Adaptor refer to subclass
* Introduces an additional object, with a further pointer indirection
    
# Adapter: Questions
* How much adapting does Adapter do?
* Pluggable adapters
* Two-way adapters
* Note: Avoid class adapters in C++ unless necessary

# Implementation 1
![][implementation1]

# Implementation 2
![][implementation2]

# Implementation Comparison
![][implementation1]

![][implementation2]

# Related Patterns
* *Bridge*
    * A similar structure but different intent
    * Separates interface from implementation
* *Decorator*
    * Add functionality to an existing object without changing the interface
    * Supports recursive composition
* *Proxy*
    * A representative or surrogate for another object
    * Does not change its interface
