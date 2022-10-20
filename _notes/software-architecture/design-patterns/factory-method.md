---
title: "Design Pattern - Factory Method"
layout: notes
---


[creational]: https://www.cs.bgsu.edu/mdecke/classes/software_architecture/notes/design_patterns.html#/18

[motivation]: /images/design-patterns/factory-method/template-method-gof-update.svg
[structure]:  /images/design-patterns/factory-method/factory-method.svg
[parallel]:   /images/design-patterns/factory-method/factory-method-parallel-hierarchy.svg
[mazegame]:   /images/design-patterns/factory-method/maze-game.svg


# Factory Method
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=FactorySort.cpp"></script>

# Factory Method
> A class pattern that defines an interface for creating an object, but let subclasses decide which class to instantiate, lets a class defer instantiation to subclasses.

* [Class Creational Pattern][creational]
* AKA: Virtual Constructor

# Factory Method
* Frameworks use abstract classes to define and maintain relationships between objects
* Also responsible for creating these objects
* However, knowledge of what type of object to create may not be in the framework

# Factory Method: Motivation
![][motivation]

# Factory Method: Applicability
* Classes can't anticipate the class of objects it must create
* Classes want subclasses to specify the objects it creates
* Classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which helper subclass is the delegate

# Factory Method: Structure
![][structure]

# Factory Method: Product Participants
* Product (e.g., Document)
	* Defines the interface of objects the *factory method* creates
* ConcreteProduct (e.g., MyDocument)
	* Implements the Product interface

# Factory Method: Creator Participants
*  {:.nospace } Creator (e.g., Application)
	* Declares the *factory method*, which returns an object of type Product
	* May also define a default implementation of the factory method that returns a default ConcreteProduct object
	* May call the *factory method* to create a Product object.
* ConcreteCreator (e.g., MyApplication)
	* Overrides the factory method to return an instance of a ConcreteProduct.

# Factory Method: Collaborations
* Creator relies on subclasses to define the factory method so that it returns an instance of the appropriate ConcreteProduct

# Factory Method: Consequences 
* Code only deals with Product interfaces, so it can work with any user-defined ConcreteProduct classes
* Does require a client to subclass Creator for each unique ConcreteProduct
* Can define a non-abstract default, e.g., CreateFileDialog, that subclasses can override if needed

# Factory Method: Parallel Class Hierarchies
![][parallel]

# Implementation: Maze
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=MazeCreateNew.cpp"></script>

# Implementation: Factory
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=MazeFactory.cpp"></script>

# Implementation: Using Factory
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=MazeCreateNew2.cpp"></script>

# Implementation: Subclassing
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=EnchantedMazeGame.hpp"></script>

# UML
![][mazegame]

# Lazy Initialization
<script src="https://gist.github.com/mjdecker/1aabd0ce4bd678eab81a0c2bcdaeed43.js?file=LazyInitialization.hpp"></script>

# Known Uses
> Factory methods pervade toolkits and frameworks

# Related Patterns
* *Abstract Factory*
	* Often implemented with factory methods
* *Template Methods*
	* Typically called to create a proper object 
