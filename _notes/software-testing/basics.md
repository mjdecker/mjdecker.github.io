---
title: "Software Testing Basics"
layout: notes
---

[correctness]: /images/software-testing/correctness.png

# Why Testing?
* Why is testing important?
	* Customer Satisfaction
	* Lives? [Therac-25](https://en.wikipedia.org/wiki/Therac-25)
	* Saves you time [Saff & Ernst 2004]
	* ???
* What do you test?

# Testing Terminology
* Error - mistake by programmer
* Fault - result of an error, i.e., bug
* Failure - occurs when fault executed
* Incident - symptom associated with failure that alerts user of occurrence of failure

# Correctness
![correctness]
* One behavioral property of software
* Specification vs. Program
* Goal is to maximize correctness
* What methods might we use to demonstrate correctness?

# Proof
* Assertions, pre & post conditions, invariants
* Induction proofs
* etc.

# Problem with Proving
* Mathematical proofs (as complex and error prone as coding)
* Leavenworth ‘70 did an informal proof of correctness of a simple text justification program. (Claims it’s correct!)
* London ‘71 found four faults, then did a formal proof. (Claims it’s now correct!)
* Goodenough and Gerhar ‘75 found three more faults.
* Other forms of testing would have found these errors without much difficulty

# Reading Through Code
* Pair programming
* Code walk-through
* Inspections

# Executing the Code
* Black-box testing - test to specification
* White-box testing - test to code
> Program testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence. [Dijkstra 1972]