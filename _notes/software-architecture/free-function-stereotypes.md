---
title: "Free-Function Stereotypes"
---

# UML Stereotypes

<div markdown="1" class="single" style="height: 400px">
![](/images/QtUMLExample.png)
</div>

# Code Stereotype
![](/images/QtUMLExample.png)

* A label we give to code to further distinguish it
* Here, we will look at stereotypes from the perspective of *free functions*
* Separate  stereotypes for *methods* and *class*

# Why Categorize into Stereotypes?
{: .center }

* Functions are a general language feature that are used for many different purposes
* Functions of a particular stereotype share many characteristics and are more similar
* Make sure we have explored the full range of what we can use
* Shorthand for documentation

# Free Function Stereotypes
* Accessor::property
* Accessor::predicate
* Mutator::command

# Mutator::command
{: .quote55 }

<script src="hhttps://gist.github.com/mjdecker/8f6c77c5b7c5391eda2d99e28f63cd20.js?file=function_stereotypes_command_collaborator.cpp"></script>

* Executes a change based on the IN/OUT parameters
* For things it changes, parameters are IN/OUT or OUT
* These parameters are *pass by reference* (**not** *pass by const reference*)
* Other parameters may be IN

# Accessor::property
{: .quote55 }

<script src="hhttps://gist.github.com/mjdecker/8f6c77c5b7c5391eda2d99e28f63cd20.js?file=function_stereotypes_accessor_property.cpp"></script>

* Returns information derived from the IN parameters
* Parameters are *pass by value* or *pass by const reference*
* When iterators are used, *pass by value* of *const_iterator*

# Accessor::predicate
{: .quote70 }

<script src="hhttps://gist.github.com/mjdecker/8f6c77c5b7c5391eda2d99e28f63cd20.js?file=function_stereotypes_accessor_predicate.cpp"></script>

* Returns a Boolean result derived from the IN parameter
* Parameters are all IN
* Must pass all data directly used in the condition
* Useful for even short conditions as it gives them a name
* Often used in refactorings

# Accessor::predicate
{: .quote70 }

<script src="hhttps://gist.github.com/mjdecker/8f6c77c5b7c5391eda2d99e28f63cd20.js?file=function_stereotypes_predicate_if.cpp"></script>

* Often extracted from code with complex conditional statements
* Anywhere to hide details on how the predicate is determined

# Accessor::predicate naming
<script src="hhttps://gist.github.com/mjdecker/8f6c77c5b7c5391eda2d99e28f63cd20.js?file=function_stereotypes_predicate_naming.cpp"></script>

* Set of standard terms that everyone knows means a predicate
* If not a standard term, then verb form is often starts with `is`
* Other verb forms depends on the context
* Do not include the parameter or return types in the name, e.g., no "bool"
* Never use the term "returns" in a function name
