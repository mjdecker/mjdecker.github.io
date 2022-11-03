---
title: "PIMPL"
layout: notes
---

# Encapsulation <span class="">& Information Hiding Rules</span>
> Place data and the operations that perform on that data in the same class

* Don't expose data items
* Don't expose the difference between stored data and derived data
* Don't expose implementation details of a class
* Don't expose a class's internal structure

# class `Good`
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Good.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Good.cpp"></script>

# class `Good`
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Good.hpp"></script>

* Actually is a "good class"
* Follows encapsulation and information hiding rules, or does it?
* The client code for Good Class:
	* Must `#include "Good.hpp"`
	* Knows data member types
	* `Good.hpp` may depend on a large number of direct and indirect include files for the data members

# Client recompiled whenever a change in class Good:
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Good.hpp"></script>

* Add a data member
* Delete a data member
* Change the type of a data member
* Update the include files for a data member
* Even if there is no change in the interface

# PIMPL
* *pointer to implementation*
* AKA, *opaque pointer*, *d-pointer*, *compiler firewall*, *Cheshire Cat*
* Use a pointer to a class/struct declaration for an implementation class in the target class declaration file (i.e., `.hpp`)
* Define the implementation class in the target class definition file (i.e., `.cpp`)

# class `Good` PIMPL
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Good.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.hpp"></script>

# PIMPL Advantages
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.hpp"></script>

* The class implementation is hidden
* Add a new data member to the (private) structure without violating binary compatibility
* Header file containing the class declaration only needs to include those files required for the class interface rather than for its implementation
* Not a new technique [archive_entry declaration](https://github.com/libarchive/libarchive/blob/ce2aebd2e0640f0b29a730d8fe70cf65ed2f7c28/libarchive/archive.h#L182-L184), [archive_entry definition](https://github.com/libarchive/libarchive/blob/ce2aebd2e0640f0b29a730d8fe70cf65ed2f7c28/libarchive/archive_entry_private.h#L82)

# class `Good` PIMPL Implementation
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.cpp"></script>

# PIMPL: Include File
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.hpp"></script>

* Use a `class` or `struct` for the implementation. Typically a `struct` since no need to keep private.
* A struct/class *declaration* forms an *incomplete type*
* `std::unique_ptr<>` can work with incomplete types (with one issue)
* `std::unique_ptr<>` used instead of raw pointer for RAII<span class="">. I.e., don't depend on destructor of class to run</span>

# PIMPL: Implementation File
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Better.cpp"></script>

* Define the PIMPL struct in the definition file
* Target class data member initialization is now done in the PIMPL struct
* Access to "members" is through a pointer
* If you have a default destructor, you need to use the keyword `delete` with the destructor definition in the .cpp file so that `std::unique_ptr<>` knows how to delete the incomplete type.

# class `Stack` PIMPL
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Stack.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=Stack.cpp"></script>

# A Step Further
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=ReallyGood.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=ReallyGoodImplementation.hpp"></script>

# A Step Further
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=ReallyGood.hpp"></script>

* We write most of the client code based on the abstract class `Good`
* Often, the abstract class is a type we use as a parameter, constructor parameter, or field
* Somewhere else in the code, we choose a particular implementation
* A Framework or Toolkit may be written using the abstract class `Good`
* Then, we provide the implementation class that the Framework or Toolkit uses

# Choices
<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=ReallyGood.hpp"></script>

<script src="https://gist.github.com/mjdecker/93136da53473bbaa2ad2cee236e40f30.js?file=ReallyGoodOkay.hpp"></script>

# EndNotes
* Abstractions can have a time efficiency cost
* Abstractions can have a comprehension cost
* Requirements for abstraction can vary over time on a project
* Have to develop the skill to know when is enough
