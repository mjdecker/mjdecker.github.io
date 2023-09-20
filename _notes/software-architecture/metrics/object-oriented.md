---
title: "Object-oriented Metrics"
layout: notes
---

# Object-oriented Metrics
* Chidamber & Kemerer ’94 
* Metrics specifically designed to address object oriented software
* Class oriented metrics
* Measured directly from source-code

# Weighted Methods per Class

* WMC = Σc<sub>i</sub>

	- c<sub>i</sub> is the complexity of each method
* Must normalize
* What about inherited methods?  
	- Be consistent

# Depth of Inheritance Tree
* DIT is the maximum length from a node to the root (base class)
* Lower level subclasses inherit a number of methods making behavior harder to predict
* However, more methods are reused in higher DIT trees.

# Number of Children
* NOC is the number of subclasses immediately subordinate to a class
* As NOC grows, reuse increases
* But the abstraction may be diluted

# Coupling between Classes
* CBO is the number of collaborations between two classes
* As collaboration increases reuse decreases
* [CRC cards](https://en.wikipedia.org/wiki/Class-responsibility-collaboration_card) – lists the collaborators
	- Classes, Responsibilities, and Collaborations 

# Response for a Class
* RFC is the number of methods that could be called in response to a message to a class
* Testing effort increases as RFC increases

# Lack of Cohesion in Methods
* LCOM – poorly described in Pressman
* Several different ways to calculate, LCOM1, LCOM2, LCOM3, LCOM4, ...
* Class C<sub>k</sub> with n methods M<sub>1</sub>,…M<sub>n</sub>
* I<sub>j</sub> is the set of instance variables used by M<sub>j</sub>

# An LCOM
* There are n such sets I<sub>1</sub> ,…, I<sub>n</sub>

* P = {(I<sub>i</sub>, I<sub>j</sub>) | (I<sub>i</sub> ∩ I<sub>j</sub> ) = ∅}<br/>
   Q = {(I<sub>i</sub>, I<sub>j</sub>) | (I<sub>i</sub> ∩ I<sub>j</sub> ) ≠ ∅}

	- If all n sets I<sub>i</sub> are ∅ then P = ∅

* LCOM = |P| - |Q|, if |P| > |Q|
* LCOM = 0 otherwise

# Example LCOM Computation
* Take class C with M<sub>1</sub>, M<sub>2</sub>, M<sub>3</sub>
* I<sub>1</sub> = {a, b, c, d, e}
* I<sub>2</sub> = {a, b, e}
* I<sub>3</sub> = {x, y, z}
* P = {(I<sub>1</sub>, I<sub>3</sub>), (I<sub>2</sub>, I<sub>3</sub>)}
* Q = {(I<sub>1</sub>, I<sub>2</sub>)}
* Thus LCOM = 1

# LCOM Explanation
* LCOM is the number of empty intersections minus the number of non-empty intersections
* This is a notion of degree of similarity of methods.  
* If two methods use common instance variables then they are similar
* LCOM of zero is not maximally cohesive
	- |P| = |Q| or |P| < |Q|

# Class Size
* CS 
	- Total number of operations (inherited, private, public)
	- Number of attributes (inherited, private, public)
* May be an indication of too much responsibility for a class

# Number of Operations Overridden
* NOO
* A large number for NOO indicates possible problems with the design 
* Poor abstraction in inheritance hierarchy

# Number of Operations Added
* NOA
* The number of operations added by a subclass
* As operations are added it is farther away from super class
* As depth increases NOA should decrease

# Specialization Index
* SI = [NOO * L] / M<sub>total</sub>

	- L is the level in class hierarchy
	- M<sub>total</sub> is the total number of methods
* Higher values indicate class in hierarchy that does not conform to the abstraction

# Method Inheritance Factor (MIF)
* MIF = [ΣM<sub>i</sub>(C<sub>i</sub>)] / [ΣM<sub>a</sub>(C<sub>i</sub>) ]

	- M<sub>i</sub>(C<sub>i</sub>) is the number of methods inherited and not overridden in C<sub>i</sub>
	- M<sub>a</sub>(C<sub>i</sub>)  is the number of methods that can be invoked with C<sub>i</sub>
* M<sub>a</sub>(C<sub>i</sub>)  = M<sub>d</sub>(C<sub>i</sub>) + M<sub>i</sub>(C<sub>i</sub>)
	- M<sub>d</sub>(C<sub>i</sub>) is the number of methods declared in C<sub>i</sub>

# MIF (continued)
* All that can be invoked = new or overloaded + things inherited
* MIF is [0,1]
* MIF near 1 means little specialization 
* MIF near 0 means large change

# Coupling Factor

* CF = [Σ<sub>i</sub>Σ<sub>j</sub> is_client(C<sub>i</sub>, C<sub>j</sub>) ] / [TC<sup>2</sup> - TC]

	- is_client(x,y) = 1 iff a relationship exists between the client class and the server class.  0 otherwise.
	- [TC<sup>2</sup> - TC] is the total number of relationships possible (Total Classes<sup>2</sup> – diagonal)
* CF is [0,1] with 1 meaning high coupling

# Polymorphism Factor

* PF = [Σ<sub>i</sub>M<sub>o</sub>(C<sub>i</sub>)] / [Σ<sub>i</sub>M<sub>n</sub>(C<sub>i</sub>) * DC(C<sub>i</sub>)]

	- M<sub>n</sub>() is the number of new methods
	- M<sub>o</sub>() is the number of overriding methods
	- DC() number of descendent classes of a base class
* The number of methods that redefine inherited methods, divided by the maximum number of possible distinct polymorphic situations

# Operational Oriented Metrics
* Average operation size (LOC, volume)
* Number of messages sent by an operator
* Operation complexity – cyclomatic
* Average number of parameters/operation
* Larger the number the more complex the collaboration

# Others
* Percent public and protected data members
* Number of root classes
* Fan in – multiple inheritance
