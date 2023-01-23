---
title: Variables
layout: notes
---

 [Stored-program Computer]: https://en.wikipedia.org/wiki/Stored-program_computer
 [Hungarian Notation]: https://en.wikipedia.org/wiki/Hungarian_notation
[stack-layout]: https://upload.wikimedia.org/wikipedia/commons/d/d3/Call_stack_layout.svg
[contextual keywords]: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/

# [Stored-program Computer]
* One that stores program instructions in memory
	* Princeton (von Neumann) Architecture - data & instructions in same memory
	* Harvard Architecture - data & instructions in separate memory 
		* Example: Atmel AVR
* How does a C++ program look in memory?	
* An abstraction for memory cells are variables

# Variables
* An abstraction of a computer memory cell or collection of cells
* Can consist of: 
	* name
	* address
	* type
	* value
	* lifetime
	* scope

# Name
>  The most difficult part of programming is coming up with good variable names - Jonathan I. Maletic, Ph.D.
* A string of characters used to identify some entity in a program
* Exists for programmers, either helping or hindering program comprehension

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_worst.cpp"></script>

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_better.cpp"></script>

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_best.cpp"></script>

# Name Forms
* Languages place different restrictions on names
	* Fortran 95 limited to 31 characters
	* @ is not allowed in C++ identifier
	* In Perl, $, @, % at beginning specify type	
* Are spaces significant?
	* Pre Fortran 90, `name Forms` and `nameForms` are same
* Is case significant? 

# Swift Sort
<script src="https://gist.github.com/mjdecker/84fce14297425ce748e4f50a2ee79819.js?file=emoji_sort.swift"></script>

# Identifier Style
* under_score
* cameCase
* PascalCase
* [Hungarian Notation] - start with lowercase letter(s) which are mnemonics for the type or purpose of variable
	* rString, pnNumber, m_data

# Special words
* reserved word - special word in language that can not be used as a name
* keyword - special only in certain contexts
	* Fortran

		```	 
		Integer Number
		Integer = 4
	```
	
	* C# [contextual keywords] can have different meanings in different contexts

# Unnamed Variables
* A variable need not always have a name
* Example: dynamically allocated variables

# Address
* Machine address with which it is associated
* Same variable may be associated with different addresses at different times
	* E.g., with multiple calls to function, parameters and local variables may have different addresses
* Multiple variables can have same address (alias), how?
* Address (lvalue) = Value (rvalue)

# Type
* Determines range of values a variable can store
	* int vs double
* Abstract Data Types (ADT)
	* Data
	* Operations on data
	* Rules of usage

# Value
* What is stored in the contents of the memory cell(s)
* physical memory cell: nybble, bytes, words, etc.
	* Endianness?
* abstract memory cell: size required by type
* E.g., double 
	* 64-bit physical memory cell
	* 1 abstract memory cell
* address (lvalue) = value (rvalue)

# Binding
* An association: attribute and entity,  operation and symbol
* binding time - time at which binding takes place
* Consider the following on primitive types
* ```index = index + 1```
	* type is bound at compile time
	* possible values set at compiler design time
	* operator + is bound at compile time (once operands determined)
	* representation of 1 is bound at compiler design time
	* value of index is bound at execution time

# Static vs Dynamic Binding
* static - bound before run time and remains unchanged throughout execution
* dynamic - bound at run time or changes during program execution

# Static Type Bindings
* explicit declaration - statement declares variable has specified type
* implicit declaration - type association is determined through convention
	* Fortran: identifier begins with I-N (either case) then Integer otherwise Real
	* Perl: Begins with $ is scalar, @ is array, % is  hash structure

# Type inference
<script src="https://gist.github.com/mjdecker/6b279723b7eea15097f693b0e2583018.js?file=type_inference.cpp"></script>

* Ability to automatically deduce the type of a variable
* C++11


# Dynamic Type Binding
<script src="https://gist.github.com/mjdecker/b2e96d8be09bac79c24229695d8d24fd.js?file=dynamic_type_binding.py"></script>
* Type bound when first assigned a value


# Advantages/Disadvantages
* Static type binding 
	* Can reliably find type error at compile time
	* Usually results in faster executing code
	* Can serve an additional documentation for developer
* Dynamic type binding 
	* Allows constructs typically illegal in static type checking, e.g. eval function to execute arbitrary data as code
	* Typically allows [duck typing](https://en.wikipedia.org/wiki/Duck_typing) for code reuse
	* Typically makes [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) easier

# Strongly and Weakly Typed
* Strongly typed definitions:
	* If type errors are always detected (Sebesta)
	* Language that has stricter typing rules and more likely to generate error or refuse to compile
* Some symptoms of weakly type:
	* Coercion - forcing one type to be used as another (no conversion)
		* Example: `void *`
	* Pointers - pointers can be used to bypass type system
	* Unions (untagged) - not type checked, values can be viewed as either type

# Union (C++)
<script src="https://gist.github.com/mjdecker/a2291b4b2b6490b534d547403c4d03d8.js?unions.cpp"></script>

# Pointers (C++)
<script src="https://gist.github.com/mjdecker/c599381b6728a40f0de1b0da3d48ad88.js?unsafe_pointers.cpp"></script>

# Lifetime
* Time for which a variable is bound to a specific memory location
	* Static
	* Stack-dynamic
	* Explicit heap-dynamic
	* Implicit heap-dynamic

# Static
<script src="https://gist.github.com/mjdecker/d88b344eac68ed7f2283f834935c5cdc.js?file=static.cpp"></script>
* Variables bound before program execution and remains bound until program terminates

# Stack-dynamic
* Variables whose storage bindings created when declarations statements elaborated
	* elaboration - storage allocation and binding process indicated by declaration (run-time)
* Allocated on stack

![stack-layout]

# Explicit heap-dynamic
<script src="https://gist.github.com/mjdecker/d88b344eac68ed7f2283f834935c5cdc.js?file=explicit_heap_dynamic.cpp"></script>
* Nameless (abstract) memory cells allocated and deallocated (from heap) by explicit instructions
*  What is the explicit heap-dynamic variable?

# Implicit heap-dynamic
<script src="https://gist.github.com/mjdecker/d88b344eac68ed7f2283f834935c5cdc.js?file=implicit_heap_dynamic.cpp"></script>
*  Bound to heap storage when assigned values
* Javascript


# Scope
* Range of statements for which the variable is visible (can be referenced)
* Determines how a name's usage is associated with a variable
* local variable - one that is declared in the program unit or block
* nonlocal variable - those visible in a program unit or block but not declared there

# Static (Lexical) Scope
* What does static mean again?
* Introduced by ALGOL (Algorithmic Language) 60
* Method: Starting with current, successively search enclosing scopes (static parent/ancestors) until declaration is found
* Scopes can be created by:
	* Subprograms, e.g. Ada, JavaScript
	* Blocks, C-based languages

# Static Scope Example
<script src="https://gist.github.com/mjdecker/74759d38d6f43ce2dc4a662b7a4a7e8d.js?file=static_scope.cpp"></script>

# Hiding 
<script src="https://gist.github.com/mjdecker/74759d38d6f43ce2dc4a662b7a4a7e8d.js?file=hiding.cpp"></script>
* An ancestor variable may be hidden if a descendant declares a variable with the same name
* Legal in some languages (e.g., C++), illegal in others (e.g., Java/C#)

# Where Declare?
* Languages (e.g.,C89) may require declarations to be at beginning of function/blocks
* More recent languages (C++/Java) allow declarations to appear anywhere in function/block
	* Why? Improves maintainability and comprehension
* Take home: *Define a variable just before its first use*

# Declaration in For-statement?

```bash
[mdecke@voyager ~]$ gcc --pedantic main.c
main.c: In function 'main':
main.c:13:5: error: 'for' loop initial declarations are only allowed in C99 or C11 mode
    for(int i = 0; i < 10; ++i) {
    ^
    main.c:13:5: note : use option -std=c99, -std=gnu99, -std=c11 or -std=gnu11 to compile your code
```

# if-declaration?
<script src="https://gist.github.com/mjdecker/a6eea34144f3d184246a7d6e02cd7c47.js?declaration_in_if.cpp"></script>

# For-statements Scope
<script src="https://gist.github.com/mjdecker/3badcdf63b7eea824f9c40dd58466c1e.js?file=for.cpp"></script>
* When a language allows declarations in for-initialization, what is the scope?
* Early C++ was end of parent scope
* Current C++ is end of for-statement

# Global Scope 
<script src="https://gist.github.com/mjdecker/3badcdf63b7eea824f9c40dd58466c1e.js?file=global.cpp"></script>
* Some languages allow the declaration of variables outside functions, etc. (i.e., file-level)

# More on C++ Globals
<script src="https://gist.github.com/mjdecker/3badcdf63b7eea824f9c40dd58466c1e.js?file=modifying_global.cpp"></script>
* Can only be defined once
* Can be declared many other files with external linkage
* *Avoid using mutable globals, as they typically make code hard to understand/maintain*

# Dynamic Scope
* What does dynamic mean again?
* Based on the calling sequence of subprograms instead of spatial relationship (static)
* Method: Starting with current, successively search calling procedures (dynamic parent/ancestors) until declaration is found
* APL (A Programming Language), SNOBOL (StriNg Oriented and symBOlic Language) 4, and dialects of LISP (LISt Processor, e.g., Emacs Lisp)

# C/C++ Macro
<script src="https://gist.github.com/mjdecker/9bfdec4ce13e03fdda14ac406260ed10.js?file=macros.cpp"></script>
* Employ de facto dynamic scoping (does not directly do name resolution)

# Static vs Dynamic Scope
* Static
	* Widely used
		* Easier to read
		* More reliable (dynamic gives too much access to locals)
		* Execute faster
* Dynamic
	* No need to pass parameters defined in caller

# Scope and Lifetime
<script src="https://gist.github.com/mjdecker/b80e7a91396c2aa87765bd94514e577a.js?file=same_lifetime.cpp"></script>
* Scope and lifetime are similar concepts, but scope != lifetime

# Another Example
<script src="https://gist.github.com/mjdecker/b80e7a91396c2aa87765bd94514e577a.js?file=different_lifetime.cpp"></script>
* What is the lifetime and scope of `id`?

# Named Constants
<script src="https://gist.github.com/mjdecker/94e6cf7e7bed130bde12eec024a85846.js?file=constant.cpp"></script>
* A variable bound to a value only once
* C++ const, Java final, C# const/readonly
	* const field - must be initialized with declaration
	* readonly can both be initialized at declaration or in the constructor

* *Use name constants instead of magic numbers*
	* Maintainability - one place to change
	* Readability/understandability - symbol explains exactly what it is

# References
* Concepts of Programming Languages, Robert W. Sebesta


