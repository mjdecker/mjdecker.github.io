---
title: "Requirements Validation"
layout: notes
---

[re-process]: /images/requirements/requirements-engineering-process.png
[Software Review]: https://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/code_review.html#/
[Prototyping]: https://en.wikipedia.org/wiki/Software_prototyping
[Acceptance Testing]: https://en.wikipedia.org/wiki/Acceptance_testing
[Requirements Traceability]: https://en.wikipedia.org/wiki/Requirements_traceability

# Requirements Engineering (RE)
> Process of discovering a software system's purpose, by identifying stakeholders and their needs, and documenting these in a form that is amenable to analysis, communication, and subsequent implementation [Nuseibeh '00]
* Software is judged as successful if it meets its purpose

# RE Process
![][re-process]

# Verification vs Validation
* Verification: The software should conform to its specification
	* Are we building the product right?
* Validation: The software should do what the user really requires
	* Are we building the right product?

# Validation Techniques
* Requirements Reviews
* Prototyping
* Test-case Generation

# Requirements Reviews
> Systematic review of requirements by a team of reviewers that check for errors and inconsistencies

* [Software Review] - A static testing technique

# [Prototyping]
> Users evaluate a partially complete working product by "trying out" to see if it meets their real needs

# Prototyping Steps
1. Identify/revise requirements
2. Develop/revise/enhance a prototype
3. Review prototype
4. Repeat

# Test-case Generation
* A requirement should be testable
* Develop tests from user requirements (before code is written)


# [Acceptance Testing]
> Determine whether a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether to accept the system.

* Often specified by the customer

# Requirements Traceability
> The ability to describe and follow the life of a requirement, in both a forwards and backwards direction.

# References
* Bashar Nuseibeh and Steve Easterbrook. "Requirements Engineering: A Roadmap." in Proceedings of the Conference on the Future of Software Engineering, pp. 35-46. 2000.
* Ian Sommerville. Software Engineering, 10/E. Pearson Education, 2016.
* Craig Larman. Applying UML and Patterns: An Introduction to Object Oriented Analysis and Design and Interative development. Pearson Education, 2012.
* Orlena CZ Gotel, , and C. W. Finkelstein. "An Analysis of the Requirements Traceability P	roblem." In Proceedings of ieee international conference on requirements engineering, pp. 94-101. IEEE, 1994.
