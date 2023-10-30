---
title: "Design Pattern - Observer"
layout: notes
---

[motivation]: /images/architecture/MVC.png

# Observer
* [Behavioral Object Pattern](https://www.cs.bgsu.edu/mdecke/classes/software_architecture/notes/design_patterns.html#/23)
* *Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically*
* Maintains consistency between related objects while avoiding classes being tighly coupled
* AKA: Dependents, Publish-Subscribe

# Observer: Motivation
![][motivation]

# Observer: Applicability
* When an abstraction has two aspects, one dependent on the other. As separate objects allows you to vary and reuse independently
* When change to one object requires changing others and you don't know how many need changed
* When an object should be able to notify other objects without making assumptions about who these object are (don't want tightly-coupled)

# Observer: Participants
* Subject
	* Knows its observers (0 or more) and provides interface for adding/removing Observer objects
* ConcreteSubject
	* Stores state, implements Subject to notify observers when state changes
* Observer
	* Defines an update interface for objects that want to be notified of changes to Subject
* ConcreteObserver
	*  Maintains reference to ConcreteSubject and implements Observer to keep its state consistent with subject's or to react when subject's state changes

# Observer Structure
![](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:0201633612/files/graphics/pg294fig01.jpg)

# Observer: Collaborations
* ConcreteSubject notifies observers whenever a relevant state change occurs
* ConcreteObserver may query subject for information upon notification of state change, reconciling its state with the subject

# Observer: Sequence Diagram

![](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:0201633612/files/graphics/pg295fig01.jpg)

# Adapter: Consequences
* Coupling between subjects and observers is abstract and minimal
* No notification target is required which allows for a dynamically changing number of observers
* Observers have no knowledge of each others presense, and have no idea of the cost a change to subject can incur

# Related Patterns
* *Mediator*
	* By encapsulating complex update semantics, a change manager can act as a mediator between subjects and observers
* *Singleton*
	* ChangeManager may use a Singleton pattern to make it unique and globally accessible
