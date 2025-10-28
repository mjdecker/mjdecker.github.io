---
title: "Design Pattern - Template Method"
layout: notes
---

[behavioral]: https://mdecker.net/notes/software-architecture/design-patterns/intro.html#/24


[motivation]: /images/design-patterns/template-method/template-method-gof-update.svg
[structure]:  /images/design-patterns/template-method/template-method.svg
[parser]:     /images/design-patterns/template-method/template-parser.svg

# Template Method
> A class pattern that defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior

* [Behavioral Pattern][behavioral]
* Class pattern uses generalization/inheritance

# Template Method
* A fundamental technique for code reuse
* Particularly important in class libraries to factor out common behavior
* Template methods lead to Inversion of Control (IoC), that’s sometimes referred to as “the Hollywood principle,” that is, “Don’t call us, we’ll call you” [Swe85]
* The Template Design Pattern is **not** related to C++ templates and uses inheritance, not C++ templates

# Template Method: Applicability
* Implement *invariant* parts of an algorithm and leave it up to subclasses to implement behavior that can vary
* Factor and localize common behavior in subclasses to avoid code duplication
* Control subclass extensions with "hook" operations

# Template Method: Structure (GOF Example)
![][motivation]

# Template Method: Structure
![][structure]

# Template Method: Participants
* AbstractClass (e.g., `Application`)
    * Defines *primitive operations* that concrete subclasses define to implement steps of an algorithm
    * Implements a *template method* defining the skeleton of an algorithm, which calls primitive operations (in ConcreteClass), operations in AbstractClass, or anything else
* ConcreteClass (e.g., `MyApplication`)
    * Implements the *primitive operations* to carry out subclass-specific steps of the algorithm

# Template Method: Collaborations
* ConcreteClass relies on AbstractClass to implement invariant steps of the algorithm

# Template Method: Consequences - Kinds of Operations
* *primitive operations* (i.e., abstract operations) ***must* override**
* *hook operations* - default behavior that subclasses can extend if necessary. ***may* override** and often does nothing
* concrete operations (ConcreteClass or on client classes)
* concrete AbstractClass operations (i.e., operations that are generally useful to subclasses)
* factory methods (later)

# Extension via Direct Overriding
<script src="https://gist.github.com/mjdecker/0ebc4a6dfddaf87332b357beb079c075.js?file=DirectOverriding.cpp"></script>

* Useful when no common parent (class) behavior

# Extension via Hook Operation
<script src="https://gist.github.com/mjdecker/0ebc4a6dfddaf87332b357beb079c075.js?file=HookOperation.cpp"></script>

* Useful when extension may not be needed
* Useful when the extension is a *side-effect* of standard processing 

# Parser.hpp
<script class="smaller" src="https://gist.github.com/mjdecker/0ebc4a6dfddaf87332b357beb079c075.js?file=Parser.hpp"></script>

# FilenameParser.hpp
<script class="medium" src="https://gist.github.com/mjdecker/0ebc4a6dfddaf87332b357beb079c075.js?file=FilenameParser.hpp"></script>

# UML
![][parser]

# MemoryParser.hpp
<script src="https://gist.github.com/mjdecker/0ebc4a6dfddaf87332b357beb079c075.js?file=MemoryParser.hpp"></script>

# Implementation
* The template method is the only method that calls the primitive operations; therefore, the primitive operations do not have to be public
* A template method can be a private, non-virtual member function
* Primitive operations that require overriding are declared pure virtual
* Minimize the number of primitive operations a subclass is required to implement

# Known Uses
* Found in almost every abstract class

# Related Patterns
* *Factory Methods*  
    * Are often called by template methods  
* *Strategy Pattern*
    * Template Method pattern uses *inheritance* to vary parts of an algorithm. Strategy patterns use *delegation* to vary the entire algorithm.
