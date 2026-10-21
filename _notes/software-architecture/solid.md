---
title: "SOLID Design Principles"
layout: notes
---

# SOLID Principles for Object-Oriented Design
* Five basic principles (guidelines) for object-oriented programming and design
* Leads to system that are:
	* Easy to maintain
	* Easy to extend
* SOLID is a guide for:
	* creating designs from scratch
	* improving existing designs

# SOLID Principles
* **S**ingle Responsibility Principle (SRP)
* **O**pen/closed Principle (OCP)
* **L**iskov Substitution Principle (LSP)
* **I**nterface Segregation Principle (ISP)
* **D**ependency Inversion Principle (DIP)

# Single Responsibility Principle
> Every class should have a single responsibility

* Responsibility - a reason to change
* Responsibility should be entirely encapsulated by the class
* All class services should be focused on that single responsibility
* Why?
	* More cohesive
	* Easier to understand
	* Easier to maintain

# SRP - Multiple Responsibilities
![](https://app.yuml.me/diagram/v1/class/clean/%5Bspaceship|%20+name%20:%20string|%20+takeoff%28%29;+fly%28%29;+land%28%29;+approve_landing%28%29%5D.svg)

# SRP - Single Responsibility
![](https://app.yuml.me/diagram/v1/class/clean/%5Bspaceship|%20+name%20:%20string|%20+takeoff%28%29;+fly%28%29;+land%28%29;],%20%5Bspaceport|%20|%20+approve_landing%28:spaceship%29;],%20%5Bspaceport]-.-%3E[spaceship%5D.svg)

# Open/closed Principle
> Software entities (classes, function, etc.) should be open for extension, but closed for modification

* Closed - as can be compiled, stored in a library, and used by client classes
* Open - as any new class can inherit and add new features
* Why?
 	* Client code dependent on base (closed) class unaffected
	* Less testing
	* Less code to review

# OCP - Meyer's open/close principle
![](https://app.yuml.me/diagram/v1/class/clean/%5Bparser||+parse%28%29;]^-%5Bnew_parser||+parse%28%29;%5D.svg)

* Implementation is extended through inheritance


# OCP - Polymorphic open/closed principle
![](https://app.yuml.me/diagram/v1/class/clean/%5B&laquo;abstract&raquo;%20parser||+parse%28%29;],%20%5B&laquo;abstract&raquo;%20parser]^-%5Bparser_impl||+parse%28%29;],%20%5B&laquo;abstract&raquo;%20parser]^-%5Bnew_parser_impl||+parse%28%29;%5D.svg)

* abstract base class and multiple implementations that can be substituted foreach other


# Liskov Substitution Principle
> Object in a program should be replaceable with instance of subtypes without affecting program correctness

* [Preconditions](https://en.wikipedia.org/wiki/Precondition) cannot be strengthened in a subtype
* [Postconditions](https://en.wikipedia.org/wiki/Postcondition) cannot be weakened in a subtype
* [Invariants](https://en.wikipedia.org/wiki/Class_invariant) of supertype must be preserved in subtype
* History constraint - new methods in subtype cannot introduce state changes (modifying object history) in a way that is not permissible in supertype
* Why?
	* Knowledge/assumptions about base-class apply to sub-class
	* Easier to understand
	* Easier to maintain

# LSP - Not substitutable
![](https://app.yuml.me/diagram/v1/class/clean/%5Bimmutable_point|-x%20:%20int;%20-y%20:%20int|%20+get_x%28%29%20:%20int;%20+get_y%28%29%20:%20int;]^-%5Bmutable_point||+set_x%28%29;%20+set_y%28%29;%5D.svg)

# LSP - Substitutable
![](https://app.yuml.me/diagram/v1/class/clean/%5Bimmutable_point|%20-x%20:%20int;%20-y%20:%20int|%20+get_x%28%29%20:%20int;%20+get_y%28%29%20:%20int]^-%5Bfixed_circle|%20+radius%20:%20int|%20%5D.svg)

# Interface Segregation Principle
> Many client specific interfaces are better than one general-purpose interface

* A client should not be forced to depend on methods it does not use
* Why?
	* More cohesive
	* Lower coupling
	* Easier to understand
	* Easier to maintain

# ISP - General Interface
![](https://app.yuml.me/diagram/v1/class/clean/%5Bxerox_job||+print%28%29;+staple%28%29;%5D.svg)

# ISP - Multiple Specific Interfaces
![](https://app.yuml.me/diagram/v1/class/clean/%5Bxerox_print_job||+print%28%29;],%20%5Bxerox_staple_job||+staple%28%29;%5D.svg)

# Dependency Inversion Principle
> Depend upon abstractions not concretions

* Abstractions should not depend on details, but details on abstractions
* High-level modules should not depend on low-level modules
	* high-level modules independent of low-level modules
* Why?
	* Lower coupling
	* Reuse
	* Easier to test
	* Easer to understand
	* Easier to maintain

# DIP - Traditional Layered Architecture (violates principle)
![](https://app.yuml.me/diagram/v1/class/clean/%5BPolicy%20Layer%5D-.-%3E%5BMechanism%20Layer%5D.svg)

# DIP - Ownership Inversion (upholds principle)
![](https://app.yuml.me/diagram/v1/class/clean/%5BPolicy%20Layer%5D-.-%3E%5B&laquo;interface&raquo;%20Policy%20Service%20Interface%5D,%20%5B&laquo;interface&raquo;%20Policy%20Service%20Interface%5D^-%5BMechanism%20Layer%5D.svg)

# Ending Remarks
* Meant to be applied together
* Make it more likely that the system is easy to maintain and extend over time
* SOLID principles are guidelines
	* Do not guarantee success
	* Can be misused
* Use in conjunction with other principles
	* Occam's Razor (KISS)
	* GRASP
	* DRY
