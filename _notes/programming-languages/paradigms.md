---
title: Programming Paradigms
layout: notes
---

[Merriam-Webster]: https://www.merriam-webster.com/dictionary/paradigm
[Wikipedia]: https://en.wikipedia.org/wiki/Paradigm
[Imperative Programming]: https://en.wikipedia.org/wiki/Imperative_programming
[Single Responsibility Principle (SRP)]: https://en.wikipedia.org/wiki/Single_responsibility_principle
[Declarative Programming]: https://en.wikipedia.org/wiki/Declarative_programming
[Functional Programming]: https://en.wikipedia.org/wiki/Functional_programming
[Logical Programming]: https://en.wikipedia.org/wiki/Logic_programming

# Paradigm
* [Merriam-Webster] - a philosophical and theoretical framework of a scientific school or discipline within which theories, laws, and generalizations and the experiments performed in support of them are formulated
* [Wikipedia] - a distinct set of concepts or thought patterns, including theories, research methods, postulates, and standards for what constitutes legitimate contributions to a field
* Google Dictionary - 
	1. a typical example or pattern of something; a pattern or model.
	2. (LINGUISTICS) a set of linguistic items that form mutually exclusive choices in particular syntactic roles.

# Programming Paradigm
* A classification of a programming language based on its features
* Paradigms can have a major effect on how the same program is written
* A programming language may support multiple paradigms
* Examples
	* Imperative vs Declarative
	* Procedural
	* Object-oriented
	* <del>Aspect-oriented</del>
	* Functional
	* Logic

# [Imperative Programming]
* Form of programming that uses statements that change a program's state
* Related to imperative mood (expressing commands)
* Imperative program consists of commands for the computer to perform
* Focus is on describing *how* a program operates

# Procedural Programming
* A type of imperative programming
* Form of programming built around the concept of a procedure (aka function)
* Function decomposition
	* A problem/program is decomposed into a set of functions
	* Functions are combined and collaborate to solve problems/complete the program 
	* Functions can be reused as part of solutions to other problems/programs
* Examples, Fortran, ALGOL,  C, and Go

# Procedural Example (C)
<script src="https://gist.github.com/mjdecker/f4c71e5373c992b91c32feae8b82d551.js?file=reverse.c"></script>
* Reverse an array (modifies original array)

# Object Oriented Programming
* Form of programming built around the concept of an object
* Classes allow implementation of Abstract Data Type (ADT)
* ADT - mathematical model for data types, consists of:
	* Data
	* Operations on data
	* Rules of usage
* Object-oriented decomposition
	* A problem/program is decomposed into a set of classes
	* Classes are combined and collaborate to solve problems/complete the program 
	* Classes can be reused as part of solutions to other problems/programs
 * Examples: C++, C#, Java, Python, Swift, etc.

# Object-oriented Example (C++)
<script src="https://gist.github.com/mjdecker/f4c71e5373c992b91c32feae8b82d551.js?file=reverse.cpp"></script>
* Reverse an array (several methods)

# A bit of Design
* [Single Responsibility Principle (SRP)]
	* Class/function should responsible for only one part of the software's functionality
	* "A Class should have only one reason to change" Robert C. Martin
* Do not Repeat Yourself (DRY) 
	* "Avoid duplicate code by abstracting or separating out things that are common and placing those things in a single location" - Head First Software Development

# [Declarative Programming]
* Form of programming that expresses the logic of a computation without describing its control flow
* Programs describe their desired results without explicitly listing commands or steps that must be performed
* Focuses on describing *what* the program must accomplish

# [Functional Programming]
* Type of declarative programming
* Form of programming built around the concept of a mathematical function (e.g, Lisp, Scheme, Clojure, Scala)
* Avoids changing state and mutable data
* Pure functional forbids changing state and mutable data (Haskell)
	* Functions depend only on arguments

# Functional Example (Lisp)
<script src="https://gist.github.com/mjdecker/f4c71e5373c992b91c32feae8b82d551.js?file=reverse.lisp"></script>
* Reverse an array (creating a new reversed array)

# [Logical Programming]
* Form of programming language build around a basis of formal logic
* Expresses facts and rules about some problem domain
* Example: Prolog

# Logical Example (Prolog)
<script src="https://gist.github.com/mjdecker/f4c71e5373c992b91c32feae8b82d551.js?file=likes.pl"></script>