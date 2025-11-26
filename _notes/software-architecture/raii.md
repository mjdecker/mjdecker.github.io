---
title: "RAII"
layout: notes
---

# Automatic Variables

<script class="small" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=automatic-full-defn.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=automatic-full-use.cpp"></script>

# Automatic Variables

<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=automatic-full-use.cpp"></script>

* The constructor is called when the declaration is reached
* The destructor is called right before the block exits
* Order of destructor calls is inverse of constructor order

# Software View of Resources
* Memory
* File handles (e.g., file descriptors)
* Network connections
* Locks & semaphores
* Database connections

# Resource must be...
* Properly *allocated*
* Properly *initialized* before use
* Properly *validated* before use
* Properly *deallocated* after use

# Resource Problems
* Improper initialization
* Use when invalid
* Resource leak (never deallocated)
* Double free (deallocated more than once)

# File Descriptor Resource Leak
<script src="https://gist.github.com/mjdecker/02102e06b3dde90cf6039b0d476e8697.js"></script>

* File descriptor is *allocated* each time through the loop
* But file descriptor is not *deallocated* each time through the loop
* Will hit a limit that depends on your O.S. environment
* To view the limit: `ulimit -n`
* Note: Some discrepancy on the default limit in Ubuntu (and in srcml/codespaces)
* Even without a resource leak, you can open too many files simultaneously

# Effect of Improperly Used Resources
* Exceed resource limits
* Program crash
* Invalid output
* Security vulnerabilities

# C++ Pointers
{: .center }

* Pointers to memory
* Limits on the amount of memory available to a program/process
* Good pointer usage is not easy to do

# C++ Pointer Problems
<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=pointer-problems-v1.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=pointer-problems-v2.cpp"></script>

# Avoiding C++ Pointer Problems
{: .center }

* Behavioral issue
* Requires complex tools to detect, with lots of *false positives*
* Must have a scenario for each usage pattern
* Good design can prevent the problem from occurring

# Programming Idiom
{: .center }

> A recurring construct to fix a commonly occurring coding problem

* Not a direct feature of the programming language, but a combination of features to solve the problem
* Typically, this is a design problem
* Related to *design patterns* which we will discuss soon

# RAII Idiom
> Resource Acquisition Is Initialization

* Holding a resource is tied to an object's lifetime
* Constructor: Allocate resource
* Destructor: Deallocate resource
* Prevents *resource leaks*, *double-free*, *use when invalid*

# RAII Interface
{: .center }

* Constructor - Allocate resource
* Destructor - Deallocate resource
* Access - Direct access to a resource 
* Boolean - Check if the resource exists (i.e., has been allocated and is still valid)
* Copy, Assignment - Transfer resource control to new RAII object
* Deallocate - Deallocate resource before Destructor (safely)

# RAII: std::ofstream

<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=ofstream.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=ofstream-ex.cpp"></script>

# RAII: std::unique_lock

<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=lock.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/7598c00020a30b581e3036a5a9f00da4.js?file=lock-ex.cpp"></script>

# Smart Pointers
> A wrapper type that makes pointers safer

* Automatic initialization with `nullptr`
* Convertible to `bool` for validity checking
* Automatic destructor call for deallocation of the contained resource

# C++ Smart Pointers

| Smart Pointer    | Status               |
|------------------|----------------------|
| `std::unique_ptr`| Added C++11          |
| `std::shared_ptr`| Added C++11          |
| `std::auto_ptr`  | Deprecated in C++11, Removed in C++17 |

# Pointer Use Cases

| Use Case                                  | Solution            |
|-------------------------------------------|---------------------|
| Optional types                            | `std::optional`     |
| Lazy Initialization                       | About to find out   |
| Existing libraries that use pointers      | About to find out   |

# Use Case: Lazy Initialization
> Delaying the construction of an object until (or if) it is needed

* Primarily for *resource expensive* objects
* Directly, e.g., `sizeof(Data)`, store a large amount of data 
* Use a large number of resources
* {: .hide } File handles
* {: .hide } Network connections
* {: .hide } Memory
* {: .hide } Processes
* {: .hide } Threads
* {: .hide } Synchronization primitives (mutexes, semaphores, etc.)
* {: .hide } Kernel handles

# Lazy Initialization with Pointers
<script class="large" src="https://gist.github.com/mjdecker/399ef7c3741fd634e3d14d79d7ee8a07.js?file=PointerDelayedAllocation.cpp"></script>

# `std::unique_ptr`
<script class="large" src="https://gist.github.com/mjdecker/399ef7c3741fd634e3d14d79d7ee8a07.js?file=unique_ptr.cpp"></script>

# Comparison
<script class="large" src="https://gist.github.com/mjdecker/399ef7c3741fd634e3d14d79d7ee8a07.js?file=PointerDelayedAllocation.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/399ef7c3741fd634e3d14d79d7ee8a07.js?file=unique_ptr.cpp"></script>

# Use Case: Existing library with pointers
* [Calculating Complexity](https://github.com/UAComputerScience/SEComplexity)
* Uses libxml2

# Example: [xmlReadFile()](http://xmlsoft.org/html/libxml-parser.html#xmlReadFile)
<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr.cpp"></script>

* **Concerns**
* libxml2 functions, e.g., xmlReadFile
* error handling for srcMLXPathCount() 
* deallocate with xmlFreeDoc(), etc. with error handling
* [Full Example](https://github.com/UAComputerScience/SEComplexity/blob/rawpointer/srcMLXPathCount.cpp)

# Custom Deleter
<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr-v2.cpp"></script>

* **Concerns**
* libxml2 functions, e.g., xmlReadFile
* error handling for srcMLXPathCount() 
* <del>deallocate with xmlFreeDoc(), etc. with error handling</del>
* [Full Example](https://github.com/UAComputerScience/SEComplexity/blob/master/srcMLXPathCount.cpp)
* [Example of Full Use](https://github.com/srcML/srcML/blob/47bb673aef58642dead73305d12aa7e3315759fd/src/libsrcml/libxml2_utilities.hpp#L26-L76)

# Comparison
<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr.cpp"></script>

<script class="large" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr-v2.cpp"></script>

# [Specialization of `default_delete<>`](https://github.com/UAComputerScience/SEComplexity/blob/deleter/srcMLXPathCount.cpp)

<script class="medium" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr-v3.cpp"></script>

<script class="small" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr-v4.cpp"></script>

# Alternative Solutions
<script class="small" src="https://gist.github.com/mjdecker/525eb9230ba247317f3916f3f855c7ba.js?file=std::unique_ptr-v4.cpp"></script>

* Create custom C++ wrapper for every libxml2 function used
* Use `goto` and other constructs in the code

# Conclusion
{: .center }

* RAII behavior prevents resource errors without any additional burden on the developer
* Ensures proper behavior
* Makes the resource much easier to work with, e.g., don't have to explicitly `close()`
* All resources should be built with RAII behavior