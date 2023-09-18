---
title: Coupling
layout: notes
---

# Coupling

> Degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between modules.

* External measure of the relationships of a class to other classes

# Coupling

* Dependency between elements
* Degree of reliance between elements
* Increasing cohesion may lead to more coupling (Why?)
* Entropy of systems and designs increases coupling
* Coupling needs to be limited and controlled

# Why is Coupling Important?

* Perhaps the most important characteristics of a system
* Affects development path
* Affects how we partition the system for testing
* Affects how much reuse is possible
* Great effect on the complexity of a system

# Coupling Goal

* Minimize external interaction (extramural) with other elements (*coupling*)
* For classes: Minimize and reduce relationships with other classes

# States of Coupling

* *tightly coupled* High degree of coupling
     - Very difficult to develop/test/maintain/use
* *loosely coupled* Low degree of coupling
    - Much easier to develop/test/maintain/use
* *decoupled* Classes with zero to minimal coupling
    - Very easy to develop/test/maintain/use
    - Common refactoring activity

# Types of Coupling

* Message Coupling (very best)
* Data Coupling (best)
* Stamp Coupling
* Control Coupling
* Common Coupling
* Content Coupling (worst)

# Content Coupling

* A module directly references the content of another module:
    - One module *p* modifies a statement of another module *q*
    - One module *p* references or alters local data of another module *q*
    - One module *p* branches into another module *q*

# Content Coupling (cont)

* Content coupled modules are inextricably interlinked
    - Change to module *q* requires a change to module *p* including
        recompilation
    - Reusing module *p* requires using module *q*
* Exposing data members with public access is a form of this

# Common Coupling

* Using global variables, i.e., global coupling
* All modules have read/write access to a piece of global data
* Functions exchange data using the global data instead of arguments

# Common Coupling Example
<script src="https://gist.github.com/mjdecker/86a386138adc62a8e401018e54327885.js?file=common_coupling.cpp"></script>

# Common Coupling (cont)

* Single function with write access where all other functions only have read access is *not* common coupling
* To determine why a variable has a particular state have to examine all functions
* Side effects, so all the code in a function needs to be examined
* Function is exposed to more data than is needed

# Control Coupling
<script src="https://gist.github.com/mjdecker/86a386138adc62a8e401018e54327885.js?file=control_coupling.cpp"></script>

* Client passes a flag or command that explicitly controls what the called code is doing
* Independent reuse is not possible
* Client should pass data and leave control path decisions private to  a module

# Stamp Coupling

* One module passes more data than needed to another module
<script src="https://gist.github.com/mjdecker/86a386138adc62a8e401018e54327885.js?file=stamp_coupling.cpp"></script>

  
* Often involves records (structs) with lots of fields
* Entire record passed, but only a few fields are used
* Efficiency considerations?

# Data Coupling
<script src="https://gist.github.com/mjdecker/86a386138adc62a8e401018e54327885.js?file=data_coupling.cpp"></script>


* Only required data passed from one module to another
*  All arguments are homogenous data items
    -   simple data type
    -   complex data type, but the client code uses all parts
* Allows for comprehension, reuse, maintenance, security, etc.


# Message Coupling

* Client code passes parameters via a non-private data format
* Most flexible, since any language or tool can generate the data
* Possible to store or cache requests
* All arguments are homogenous data items
    -   simple data type
    -   complex data type, with all parts used
* Allows for comprehension, reuse, maintenance, security, ...
* Potential performance overhead (?)

# Comparison

* Tightly Coupled
    -   Change in one module leads to changes in other modules
    -   Difficult to test/reuse individual parts
    -   Difficult to assemble separately
    -   Difficult to add additional feature/use of the system
* Loosely Coupled
    -   Allows independent changes to modules
    -   Easily test/reuse individual parts
    -   Easier to assemble separately

# Coupling Observations

* If there is no way to make the modules have loose coupling, perhaps they could be combined (or packaged together), or used in precise ways
* Subclass Coupling - Between derived and base class

# Advantages of Tightly-Coupled Modules I

* Obtain only the data that is needed. E.g., parsing source code for a specific query
* Directly use the data with no need to translate to/from a data format
* Layers can be skipped that are not needed. E.g., ISO 7-level network model vs. TCP/IP
* All the features of a specific API can be used. E.g., writing code for mySQL instead of a generic database format (ODBC)

# Advantages of Tightly-Coupled Modules II

* Decoupling leads to abstractions, which can make the programming task more difficult than direct use
* In general, tightly-coupled modules can be more efficient, but at a great cost of flexibility
