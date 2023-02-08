---
title: "Integration Testing"
layout: notes
---

[Mars Climate Orbiter]: https://en.wikipedia.org/wiki/Mars_Climate_Orbiter

[System Composition]: /images/software-testing/integration/system-composition.png
[Top-down Round 1]: /images/software-testing/integration/top-down-round-1.png
[Top-down Round 2]: /images/software-testing/integration/top-down-round-2.png
[Top-down Round 3]: /images/software-testing/integration/top-down-round-3.png
[Top-down Round 4]: /images/software-testing/integration/top-down-round-4.png
[Top-down Round 5]: /images/software-testing/integration/top-down-round-5.png
[Top-down Round 6]: /images/software-testing/integration/top-down-round-6.png
[Top-down Round 7]: /images/software-testing/integration/top-down-round-7.png
[Top-down Round 8]: /images/software-testing/integration/top-down-round-8.png
[Bottom-up Lowest Level]: /images/software-testing/integration/bottom-up-lowest-level.png
[Bottom-up Next Level]: /images/software-testing/integration/bottom-up-next-level.png
[Bottom-up Top Level]: /images/software-testing/integration/bottom-up-top-level.png

# Motivating Example
* [Mars Climate Orbiter]
* Launched: December 11th 1998
* Crashed: September 23rd, 1999
* Failure caused by one system supplied by Lockheed Martin producing US customary unit (contrary to specification) and a second system (by NASA) expecting International System of Units (Metric)

# Integration Testing
* Modules are combined and tested as a group
* Black-box testing (derived from specification)
* Finds errors based on the interaction of modules
* Main difficulty is in localizing errors
* Incremental integration used to reduce this problem

# Approaches
* Big bang - all units are tested as a whole
* Top-down - start with the high-level system and integrate from the top-down replacing individual components with stubs where appropriate
* Bottom-up - test individual components in the lowest level, then integrated and test up until the complete system is created
* Sandwich - a combination of top-down and bottom-up. Roughly, big bang on subtrees
* Note - system testing is testing of the fully integrated product

# Top-down
* Start with the root program and the lower-level unit is a stub
* stub - code that emulates the called unit, e.g., hard-coded response to a request
* Test
* Repeat: replacing one stub at a time until all stubs replaced
	* Either breadth-first or depth-first 
* Basic idea is any fault is a result of the last replaced stub.

# System Composition
![System Composition]

# Top-down Round 1
![Top-down Round 1]

# Top-down Round 2
![Top-down Round 2]

# Top-down Round 3
![Top-down Round 3]

# Top-down Round 4
![Top-down Round 4]

# Top-down Round 5
![Top-down Round 5]

# Top-down Round 6
![Top-down Round 6]

# Top-down Round 7
![Top-down Round 7]

# Top-down Round 8
![Top-down Round 8]

# Bottom-up
* Start at leaves and use drivers to emulate what calls it (test)
* Move up the tree (testing with drivers) until reach the root

# System Composition
![System Composition]

# Bottom-up Lowest Level
![Bottom-up Lowest Level]

# Bottom-up Next Level
![Bottom-up Next Level]

# Bottom-up Top Level
![Bottom-up Top Level]

# Broad vs Narrow 
* A distinction made by [Martin Fowler](https://martinfowler.com/bliki/IntegrationTest.html)

* Broad integration - exercise code paths through all services 
* Narrow integration -  exercise only code that interacts
* Narrow integration is more favorable

<!--
---

# An Example
* stack - is a template stack class
* string is standard dynamic growing string class
* infix2postfix - Method that takes a space separated string of an infix expression (fully parenthesized) and returns the expression space separated in postfix notation
* stack and string are fully tested?  What can go wrong?

![](http://yuml.me/diagram/class/[infix2postfix]--&gt;[string],%20[infix2postfix]--&gt;[stack])
-->
