---
title: "Method Stereotypes"
layout: notes
---

# Method Stereotypes
* All methods play a *role* or multiple *roles* in a class
* Identifying the role of a method helps with comprehension, but also with the original design
* A method has a *primary* role, with some methods a *secondary* role

# Method Stereotype Taxonomy

* Detailed Explanation: [Reverse Engineering Method Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/ICSM06.pdf) (ICSM'06) by Dragan, N., Collard, M.L., Maletic, J.I.  
* Updated Taxonomy: [Automatic Identification of Class Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/ICSM10-Dragan.pdf) (ICSM'10) by Dragan, N., Collard, M.L., Maletic, J.I.
* Application: [Automatically Redocumenting Source Code with Method and Class Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/DySDoc3-Stereotypes.pdf) (DySDoc3'18) Guarnera, D., Collard, M.L., Dragan, N., Maletic, J.I., Newman, C., Decker, M.

# Documentation
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=get.cpp"></script>

* Method stereotypes can be embedded in the source code as a comment
* *documentation* if the identification is manual
* *redocumentation* if the identification is automated
* Useful to be able to update in place

# Taxonomy
* *Accessors* - Read access to the state of the object, both direct and derived
* *Mutators* - Write access to the state of the object
* *Creational Methods* - Create and manage the lifetime of objects
* *Collaborational Methods* - Work with objects of other classes
* *Degenerate Methods* - No access or changes to state

# Accessors

| Stereotype | Description |
|------------|-------------|
| *get* | Returns a data member |
| *predicate* | Returns a Boolean value that is not a data member |
| *property* | Returns information about data members (non-Boolean) |
| *void-accessor* | Returns information about data members through method parameters   |

# Accessor::get
> Returns a data member

* The purpose of the method is very simple and primitive
* Direct access to the data member
* C++ Rules:
	* method is const
	* returns a data member
	* return type is a primitive or a container of a primitive

# Accessor::get - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=get.cpp"></script>

# Accessor::get - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=get.cs"></script>

# Accessor::get - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=get.java"></script>

# Accessor::predicate
> Returns a Boolean value that is not a data member

* Result is not a direct data member, but a computation involving data members
* C++ Rules:
	* method is const
	* returns a Boolean value that is not a data member

# Accessor::predicate - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=predicate.cpp"></script>

# Accessor::predicate - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=predicate.cs"></script>

# Accessor::predicate - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=predicate.java"></script>

# Accessor::property
> Returns information about data members (non-Boolean)

* C++ Rules:
	* method is const
	* does not return a data member
	* return type is primitive or container of primitives
	* return type is not Boolean

# Accessor::property - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=property.cpp"></script>

# Accessor::property - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=property.cs"></script>

# Accessor::property - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=property.java"></script>

# Accessor::void-accessor
> Returns information about data members through method parameters

# Accessor::void-accessor - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=void-accessor.cpp"></script>

# Accessor::void-accessor - Cs
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=void-accessor.cs"></script>

# Accessor::void-accessor - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=void-accessor.java"></script>

# Mutators

| Stereotype | Description |
|------------|-------------|
| *set* | Modifies a data member |
| *command* | Performs a complex change to the object’s state |
| *non-void-command* | Command which returns a value |

# Mutator::set
> Directly modifies a data member
* The parameter value is stored in the data member
* C++ Rules:
	* method is not const
	* return type is void or Boolean
	* only one data member is changed

# Mutator::set - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=set.cpp"></script>

# Mutator::set - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=set.cs"></script>

# Mutator::set - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=set.java"></script>

# Mutator::command
> Performs a complex change to the object’s state
* The change may involve several data members 
* May change the data members either directly or indirectly with another mutator 
* C++ Rules:
	* method is not const
	* return type is void or Boolean
	* complex change to the object’s state is performed, e.g., more than one data member is changed

# Mutator::command - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=command.cpp"></script>

# Mutator::command - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=command.cs"></script>

# Mutator::command - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=command.java"></script>

# Collaborational Methods

| Stereotype | Description |
|------------|-------------|
| *collaborator* | Works with objects belonging to classes other than itself (parameter, local variable, data member, or return value) |
| *controller* | Changes only an external object’s state (not this)|
|wrapper|Does not change an object’s state. Has at least one free function call|

# Collaborational::Collaborator
>  Works with objects belonging to classes other than itself (parameter, local variable, data member, or return value)
* C++ Rules:
	* returns void and at least one of the method’s parameters or local variables is an object
	* returns a parameter or local variable that is an object

# Collaborational::Collaborator - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=collaborator.cpp"></script>

# Collaborational::Collaborator - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=collaborator.cs"></script>

# Collaborational::Collaborator - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=collaborator.java"></script>

# Collaborational::Controller
> Changes only an external object’s state (not this)

# Collaborational::Controller - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=controller.cpp"></script>

# Collaborational::Controller - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=controller.cs"></script>

# Collaborational::Controller - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=controller.java"></script>

# Collaborational::Wrapper
> Does not change an object’s state. Has at least one free function call

# Collaborational::Wrapper - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=wrapper.cpp"></script>

# Collaborational::Wrapper - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=wrapper.cs"></script>

# Collaborational::Wrapper - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=wrapper.java"></script>

# Creational Methods

| Stereotype | Example/Description |
|------------|-------------|
| *constructor* | Creates an object |
| *copy-constructor* | Creates an object |
| *destructor* | Destoyes an object |
| *factory* | Object creation method |

# Creational::factory
> Object creation method with the object returned to to the client

# Creational::factory - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=factory.cpp"></script>

# Creational::factory - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=factory.cs"></script>

# Creational::factory - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=factory.java"></script>

# Degenerate Methods

| Stereotype | Description |
|------------|-------------|
| *incidental* | Does not read/change the object state, and no calls to other methods of the same class |
| *stateless* | Does not read/modify the object state, with one call to other methods of the same class |
| *empty* | Method with no statements |

# Degenerate::incidental
> Does not read/change the object state, and no calls to other methods of the same class

# Degenerate::incidental - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=incidental.cpp"></script>

# Degenerate::incidental - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=incidental.cs"></script>

# Degenerate::incidental - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=incidental.java"></script>

# Degenerate::stateless
> Does not read/change the object state, with one call to other methods of the same class

# Degenerate::stateless - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=stateless.cpp"></script>

# Degenerate::stateless - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=stateless.cs"></script>

# Degenerate::stateless - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=stateless.java"></script>

# Degenerate::empty
>  Method with no statements

* Typically part of an early implementation
* Maybe due to functionality moving elsewhere

# Degenerate::empty - C++
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=empty.cpp"></script>

# Degenerate::empty - C#
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=empty.cs"></script>

# Degenerate::empty - Java
<script src="https://gist.github.com/mjdecker/90d821299d8fb426a4add92699aa3245.js?file=empty.java"></script>


# Clear Design
<script src="https://gist.github.com/mlcollard/e7420f4dacc385e527940da67a8a43ec.js?file=StackInterface.cpp"></script>

* A method should have a single purpose, *single responsibility issue*
* Conversely, a method should have a single primary *role*, i.e., *single role issue*

# Pop or Top vs. Pop and Top
<script src="https://gist.github.com/mlcollard/e7420f4dacc385e527940da67a8a43ec.js?file=StackTopAndPop.hpp"></script>

<script src="https://gist.github.com/mlcollard/e7420f4dacc385e527940da67a8a43ec.js?file=StackTopOrPop.hpp"></script>

# Automated Detection
<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=xpath.xml"></script>

* Tool, *stereocode*, automatically redocuments source code with stereotypes
* *XPath* patterns with XPath extension functions
* Very scalable as it redocuments large systems in minutes 

# References
* Adapted from:
	* https://mlcollard.net
	* https://github.com/srcML/stereocode/wiki/Method-Stereotypes
