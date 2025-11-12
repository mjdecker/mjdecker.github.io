---
title: "Method Stereotypes"
layout: notes
---

* All methods play a *role* or multiple *roles* in a class
* Identifying the role of a method helps with comprehension, but also with the original design
* A method has a *primary* role, with some methods a *secondary* role

# Method Stereotype Taxonomy

* Detailed Explanation: [Reverse Engineering Method Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/ICSM06.pdf) (ICSM'06) by Dragan, N., Collard, M.L., Maletic, J.I.  
* Updated Taxonomy: [Automatic Identification of Class Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/ICSM10-Dragan.pdf) (ICSM'10) by Dragan, N., Collard, M.L., Maletic, J.I.
* Application: [Automatically Redocumenting Source Code with Method and Class Stereotypes](http://www.cs.kent.edu/~jmaletic/papers/DySDoc3-Stereotypes.pdf) (DySDoc3'18) Guarnera, D., Collard, M.L., Dragan, N., Maletic, J.I., Newman, C., Decker, M.

# Documentation

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=AccessorGet.cpp"></script>

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
| *get* | returns the value of a data member |
| *predicate* | returns a Boolean result computed from data members |
| *property* | returns information based on data member values |
| *void-accessor* | returns information about data members through a parameter   |

# Accessor::get

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=AccessorGet.cpp"></script>

* *Returns the value of a data member*
* The purpose of the method is very simple and primitive
* Direct access to the value of the data member
* C++ Rules:
	* method is const
	* returns a data member
	* return type is primitive or container of a primitive

# Accessor::predicate
<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=AccessorPredicate.cpp"></script>

* *Returns a Boolean result computed from data members*
* Result is not a direct data member, but a computation involving data members
* C++ Rules:
	* method is const
	* returns a Boolean value that is not a data member

# Accessor::property
<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=AccessorProperty.cpp"></script>

* *Returns information based on data member values*
* C++ Rules:
	* method is const
	* does not return a data member
	* return type is primitive or container of primitives
	* return type is not Boolean

# Accessor::void-accessor
<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=AccessorVoidAccessor.cpp"></script>

* *Returns information about data members through a parameter*

# Mutators

| Stereotype | Description |
|------------|-------------|
| *set* | changes the value of a data member |
| *command* | executes a complex change of the object’s state |
| *non-void-command* | command which returns a value |

# Mutator::set

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=MutatorSet.cpp"></script>

* *Directly changes the value of a data member*
* The parameter value is stored in the data member
* C++ Rules:
	* method is not const
	* return type is void or Boolean
	* only one data member is changed

# Mutator::command

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=MutatorCommand.cpp"></script>

* *Executes a complex change of the object’s state*
* The change may involve several data members 
* May change the data members either directly or indirectly with another mutator 
* C++ Rules:
	* method is not const
	* return type is void or Boolean
	* complex change to the object’s state is performed, e.g., more than one data member is changed

# Mutator::non-void-command

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=MutatorNonVoidCommand.cpp"></script>

* *Command which returns a value*

# Collaborational Methods

| Stereotype | Description |
|------------|-------------|
| *collaborator* | Works on objects of classes different from itself |
| *controller* | Works only on objects of classes other from itself |

# Collaborational::Collaborator

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CollaboratorCollaborator.cpp"></script>

* *Works on objects of classes different from itself*
* C++ Rules:
	* returns void and at least one of the method’s parameters or local variables is an object
	* returns a parameter or local variable that is an object

# Collaborational::Controller

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CollaboratorController.cpp"></script>

* *Works only on objects of classes different from itself*

# Creational Methods

| Stereotype | Example/Description |
|------------|-------------|
| *constructor* |<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CreationalConstructor.cpp"></script> |
| *copy-constructor* | <script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CreationalCopyConstructor.cpp"></script>  |
| *destructor* | <script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CreationalDestructor.cpp"></script> |
| *factory* | Object creation method |

# Creational::factory

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=CreationalFactory.cpp"></script>

* *Object creation method with the object returned to to the client*

# Degenerate Methods

| Stereotype | Description |
|------------|-------------|
| *incidental* | Does not read/change the object state, and no calls to other methods of the same class |
| *stateless* | Does not read/modify the object state, with one call to other methods of the same class |
| *empty* | Method with no statements |

# Degenerate::incidental

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=DegenerateIncidental.cpp"></script>

* *Does not read/change the object state, and no calls to other methods of the same class*

# Degenerate::stateless

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=DegenerateStateless.cpp"></script>

* *Does not read/change the object state, with one call to other methods of the same class*

# Degenerate::empty

<script src="https://gist.github.com/mlcollard/56f67dcea0ad6319d4f83949ac2a55b6.js?file=DegenerateEmpty.cpp"></script>

* *Method with no statements*
* Typically part of an early implementation
* Maybe due to functionality moving elsewhere

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
* Adapted from https://mlcollard.net
