---
title: "Design Pattern - Command"
layout: notes
---

[behavioral]: https://mdecker.net/notes/software-architecture/design-patterns/intro.html#/24

[motivation]: /images/design-patterns/command/command-motivation.svg
[paste]: /images/design-patterns/command/command-paste.svg
[open]: /images/design-patterns/command/command-open.svg
[macro]: /images/design-patterns/command/command-macro.svg
[structure]: /images/design-patterns/command/command-structure.svg
[sequence]: /images/design-patterns/command/command-sequence.svg

# Command
> Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations

* [Behavioral Pattern][behavioral]
* AKA: Action, Transaction

# Command: Motivation
![motivation]

# Paste Command
![paste]

# Open Command
![open]

# Macro Command
![macro]

# Command: Applicability
* Use the command pattern when you want to:
* Parameterize objects by an action to perform, as Menultem objects did above. Commands are an object-oriented replacement for callbacks.
* Specify, queue, and execute requests at different times

# Command: Applicability
* Support undo. `execute()` stores state for reversal, `unexecute()` reverses the effects of a previous `execute()`. Executed commands are stored in a history list, with unlimited undo and redo
* Support logging changes to reapply in case of a system crash
* Structure a system around high-level operations built on primitives operations, and support transactions

# Command: Structure
![structure]

# Command: Participants
* Command - Declares an interface for executing an operation.
* ConcreteCommand (e.g., PasteCommand, OpenCommand)
	* Defines a binding between a Receiver object and an action
	* Implements `execute()` by invoking the corresponding operation(s) on Receiver

# Command: Participants
* Client (e.g., Application) Creates a ConcreteCommand object and sets its receiver
* Invoker (e.g., Menultem) Asks the command to carry out the request
* Receiver (e.g., Document, Application) Knows how to perform the operations associated with carrying out a request

# Command: Collaborations
* The client creates a ConcreteCommand object and specifies its receiver
* An Invoker object stores the ConcreteCommand object.
* The invoker issues a request by calling `execute()` on the command. When commands are undoable, ConcreteCommand stores state for undoing the command before invoking Execute.
 * The ConcreteCommand object invokes operations on its receiver to carry out the request.

# &nbsp;&nbsp;

![sequence]

# Command: Consequences
![structure]

* Command decouples the object that invokes the operation from the one that knows how to perform it
* Commands are first-class objects and can be manipulated and extended like any other object.

# Command: Consequences (continued)
![structure]

* Multiple commands can be assembled into a composite command (e.g., MacroCommand), and are instances of the Composite pattern
* Easy to add new Commands, because you don’t have to change existing classes.

# Implementation
![structure]

* How intelligent should a command be?
* Supporting undo and redo
* Avoiding error accumulation in the undo
* Using C++ templates to avoid creating Command subclasses

# Related Patterns
* *Composite* 
	* Used to implement MacroCommands
* *Memento* 
	* Keep state the command requires for an undo
* *Prototype* 
	* Command is copied before being placed on a history list acts as a Prototype
