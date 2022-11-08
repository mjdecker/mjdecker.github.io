---
title: "API"
layout: notes
---

[libxml2]: http://www.xmlsoft.org
[libarchive]: https://www.libarchive.org
[wxWidgets]: https://www.wxwidgets.org
[cpp-netlib]: https://cpp-netlib.org

# API
> Application Programming Interface

* Modern design is the design of APIs and how they interact with each other
* Developers build large programs using existing APIs as much as possible
* For missing functionality, create new APIs
* Final application is integrated into existing APIs
* Large-scale mechanism for *separation of concerns*

# Role in Programming Languages [Koenig, Moo]
> Language design is library design

> Library design is language design

# Existing APIs
* Standard library of programming language and platform
    * E.g., `std::*`
* External libraries for a programming language
    * E.g., `boost::*`
* Custom APIs for specific purposes:
    * [libxml2] - XML parser and toolkit
    * [libarchive] - Multi-format archive and compression library
    * [wxWidgets] - Toolkit and tools library for creating cross-platform GUIs
    * [cpp-netlib] - C++ network programming library

# Good APIs
* Low complexity
* High degree of safety
* Flexible <span class="">*enough*</span>
* Efficient <span class="">*enough*</span>

# Complexity
* Low *external complexity* often means high *internal complexity*
* Flexibility adds *external complexity* 
* Partial solution: Good defaults
* Partial solution: Staged features

# Staged Feature: Reading a file into a std::vector
<script src="https://gist.github.com/mjdecker/a2d9732b6e7781dbf1d170e40278705f.js?file=simplevector.cpp"></script>

<script src="https://gist.github.com/mjdecker/a2d9732b6e7781dbf1d170e40278705f.js?file=smartvector.cpp"></script>

# How to Decide
{: .center }

* Carefully name any parts of the API
* Methods are *actions*, and naming should reflect that
* Look at existing code and see if anything is not in the API that should be
* Make sure that the API does not contain concerns for a specific client, e.g., `loc` is an srcML concern
* Imagine separate developers working on the different parts (even if you are doing both parts)
* *Why should they know this concern?*
* *Where would they have learned this concern*?

# API Taxonomy
* *Platform*
* *Framework*
* *Toolkit*
* *Library* 

# Library
{: .center }

* Functions/classes typically for a single purpose
* E.g., libxml2, libarchive
* Used with many other libraries and client code
* Control: client (small-scale inversion of control)
 
# Toolkit
{: .center }

* Functions/classes for a set of related purposes
* Used with other toolkits and client code
* Control: client (small-scale inversion of control)

# Framework
{: .center }

* Large set of classes for a broad set of purposes
* E.g., MFC, Qt 
* Client code is integrated into classes
* Control: Heavy use of *[inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control)*

# Platform
{: .center }

* Entire programming environment, often with a custom language and IDE
* E.g., iOS, .NET, Android, UNIX/Linux
* Client code is integrated into multiple frameworks and supporting tools
* Control: Typically complete *inversion of control*

# Design Using APIs
* Use existing APIs as much as possible
* Create new APIs for any functionality that is missing
* Start with *libraries*
* Then move into *toolkits*
* Finally, if significant enough, *framework*
* Minimal chance to create a *platform*

# Order of Magnitude

| Powers<br/>of 10 | Exponent<br/>Form | Order of<br/>Magnitude |
|-------:|:----------:|:--------------------:|
| 1 | 10<sup>0</sup> | 0 | 
| 10 | 10<sup>1</sup> | 1 |
| 100 | 10<sup>2</sup> | 2 |
| 1,000 | 10<sup>3</sup> | 3 |
| 10,000 | 10<sup>4</sup> | 4 |
{: .small } 

* Large programs are more complex than small programs by an order of magnitude
* Essential skill of development is to (temporarily) "forget" and concentrate on the current task
* If you do not develop this essential skill, you are limited in what you can develop and the types of jobs you can handle. <span class="">**This will impact your career**</span>
* The composition and frequency of commits indicate how tasks are isolated

