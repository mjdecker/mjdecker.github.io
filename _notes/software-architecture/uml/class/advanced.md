---
title: "Advanced Concepts of Class Diagrams"
layout: notes
---

# Expressing Design
* UML Class Diagram shows overview of important classes in a system, and (more importantly) the relationship between them

# Properties: Attributes & Association
![](http://yuml.me/diagram/class/[Student%7C+%20name%20:%20Name%7C])
![](http://yuml.me/diagram/class/[Student]1-˖name%201%3E[Name])

* Another notation for property (alternative to attribute)
* Use attributes for properties that are types, e.g., primitive types, or whatever is considered a type in your design
* Use associations for types that will be implemented as classes, and   whose methods are of interest at the design level

# Classes
![](http://yuml.me/diagram/class/[Student],[Name])

# Class Relationships
* Relationships between classes form a coupling between the classes
* The type of coupling in a design has a great impact on the complexity of the system, and ability to develop and make changes
* Classes, operators, and attributes can be expressed in code, documentation (e.g., Javadoc), not just in UML
* However, class relationships are difficult to observe in real code
* Most clearly seen in a diagram, and biggest benefit to using a diagram

# UML Relationships
* Association
* Generalization
* Dependency
* Aggregation
* Composition

# Code: Association (Directional)
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=directional.hpp"></script>

# UML: Association

![](http://yuml.me/diagram/class/[Student]1-%20˖names%20*>[Name])

* In association, a class (e.g., Student) uses another class as a field type (e.g., Name)
* This is a [has-a](http://en.wikipedia.org/wiki/Has-a) relationship and has
	* directionality
	* multiplicity
	* labels

# Code:  Association (Bidirectional)
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=bidirectional.hpp"></script>

* Note:  Have to be careful to implement correctly for compiling

# UML:  Association (Bidirectional)

![](http://yuml.me/diagram/class/[Student]-[Course])

* Implementation and testing of class Course requires class Student, and vice-versa
* Classes Student and Course cannot be used independently
* Bidirectional associations are problematic, and should be avoided

# Code:  Inheritance
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=inheritance.hpp"></script>
	
* Permits specialization of behavior, and additions to interface
* Permits common handling, e.g., a container of Students

# UML: Generalization

![](http://yuml.me/diagram/class/[Student]^[GradStudent])

* Expression of is a relationship:  [Substitutability](http://en.wikipedia.org/wiki/Liskov_substitution_principle)
* Maps directly to inheritance in most OOP languages
* Superclass/supertype/base class is a generalization of subclass/subtype/derived class
* Subclass/subtype/derived class is a specialization of superclass/supertype/base class
* Highest semantically defined relationship
* Often overused: The purpose of generalization (inheritance) is to  solve design problems. If you don't have a design problem, don't use generalization (inheritance) \[Collard\].

# Code:  Dependency
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=dependency.hpp"></script>

# UML: Dependency

![](http://yuml.me/diagram/class/[Student]%20-.->[Name])

* Changes to the definition of the supplier/source may cause changes to the client/target
* Code: Class used as a parameter or local variable only (**not** a data member/field) results in a dependency
* Dependencies are weaker than Associations, and therefore preferred due to decreased coupling

# Code:  Aggregation
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=aggregation.hpp"></script>

# UML: Aggregation

![](http://yuml.me/diagram/class/[Club]<>-*>[Person])

* *part of* relationship
* Special kind of association
* Roles and multiplicities often used
* Targets may be shared, i.e., source (e.g., *Club*) doesn't control the lifetime of the target (e.g., *Person*)
* Code: Fields (data members) are pointers/references to this type, and the objects are created externally
* So how does this differ from association?

# Code:  Composition
<script src="https://gist.github.com/mjdecker/04e5857841ec88a8fa0ef9a48040acaf.js?file=composition.hpp"></script>

# UML: Composition

![](http://yuml.me/diagram/class/[Shape]++-*>[Point])

* Often confused with aggregation
* Target belongs only to the source
* No sharing, i.e., source (e.g., *Shape*) controls the lifetime of the target (e.g., *Point*)
* Code: These objects are fields/data members, or pointers/references to objects created (and destroyed) internally
* Often preferred to aggregation

# Keywords/Stereotypes

![](http://yuml.me/diagram/class/[&laquo;entity&raquo;%0aSession])
![](http://yuml.me/diagram/class/[&laquo;entity&raquo;%0aSession{bg:green}])

* Stereotype is an extension mechanism to UML used as part of profiles
* Keyword is a formally defined stereotype
* Often confused in the SE vernacular, so we will use the term
stereotype

# Abstract Classes/Methods

![](http://yuml.me/diagram/class/[｛abstract｝;Event%7C%7C+getDescription%28%29｛abstract｝]^-[DateEvent])

* Abstract classes do not support direct instantiation. I.e., you can't create an object from that class, you have to create an object of a derived class. E.g., you can create a *DateEvent* object, but not an *Event* object.
* An abstract class has one or more abstract methods. An abstract method is one that is declared, but not defined, and must be defined in a derived class.
* Displayed (both classes and methods) in italics or with a label  *{abstract}*, or abbreviated label *{A}*

# Interfaces

![](http://yuml.me/diagram/class/[&laquo;Interface&raquo;;Event]^-.-[Widget])

* No data, all operations are public, and no operation has a method body
* Cleanly models interfaces in Java, COM, CORBA
* Indicated with label *«interface»* or abbreviated label *«I»*
* In this case, inheritance means implementation
* We can also have a dependency relationship with an interface
* Also ball-and-socket notation. Ball - class provides interface (labeled), Socket - class requires interface

# Notes

![](http://yuml.me/diagram/class/[note%3A%20for%20observer%20in%20ObserverCollection%20call%20observer.notify%28%29])

* Using text to clarify diagram/design
* No format definition of note content

# Products

![](http://yuml.me/diagram/class/[note%3A%20Current%20design%20for%20Order%20Project{bg:cornsilk}],[Customer]<>1-orders%200..*>[Order],%20[Order]++*-*>[LineItem],%20[Order]-1>[DeliveryMethod],%20[Order]*-*>[Product],%20[Category]<->[Product],%20[DeliveryMethod]^[National],%20[DeliveryMethod]^[International])

# Role in Process
* Forward Engineering:
	
	Class Diagrams (design) -> Code (implementation)
	
* Amount of detail depends on UmlMode (Fowler)
* Reverse Engineering:

    Code (implementation) -> Class Diagrams (design)
  