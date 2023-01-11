---
title: Variables
layout: notes
---

# [Stored-program Computer](https://en.wikipedia.org/wiki/Stored-program_computer)
* One that stores program instructions in memory
	* Princeton (von Neumann) Architecture - data & instructions in same memory
	* Harvard Architecture - data & instructions in separate memory 
		* Example: Atmel AVR
* How does a C++ program look in memory?	
* An abstraction for memory cells are variables

---

# Variables
* An abstraction of a computer memory cell or collection of cells
* Can consist of: 
	* name
	* address
	* type
	* value
	* lifetime
	* scope

---

# Name
>  The most difficult part of programming is coming up with good variable names - Jonathan I. Maletic, Ph.D.
* A string of characters used to identify some entity in a program
* Exists for programmer, either helping or hindering program comprehension

---

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_worst.cpp"></script>

---

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_better.cpp"></script>

---

# Describe this code:
<script src="https://gist.github.com/mjdecker/8c0ad7103af933ca2c22fae158b31869.js?file=variable_naming_example_best.cpp"></script>

---

# Name Forms
* Languages place different restrictions on names
	* Fortran 95 limited to 31 characters
	* @ is not allowed in C++ identifier
	* In Perl, $, @, % at beginning specify type	
* Are spaces significant?
	* Pre Fortran 90, `name Forms` and `nameForms` are same
* Is case significant? 

---

# Swift Sort
<script src="https://gist.github.com/mjdecker/84fce14297425ce748e4f50a2ee79819.js?file=emoji_sort.swift"></script>

---


# Identifier Style
* under_score
* cameCase
* PascalCase
* [Hungarian Notation](https://en.wikipedia.org/wiki/Hungarian_notation) - start with lowercase letter(s) which are mnemonics for the type or purpose of variable
	* rString, pnNumber, m_data

---

# Special words
* reserved word - special word in language that can not be used as a name
* keyword - special only in certain contexts
	* Fortran

		```	 
		Integer Number
		Integer = 4
	```
	
	* C# [contextual keywords](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/) can have different meanings in different contexts

---

# Unnamed Variables
* A variable need not always have a name
* Example: dynamically allocated variables

---

# Address
* Machine address with which it is associated
* Same variable may be associated with different addresses at different times
* Multiple variables can have same address (alias), how?
* Address (lvalue) = Value (rvalue)

---

# Type
* Determines range of values a variable can store
	* int vs double
* Abstract Data Types (ADT)
	* Data
	* Operations on data
	* Rules of usage

---

# Value
* What is stored in the contents of the memory cell(s)
* physical memory cell: nybble, bytes, words, etc.
	* Endianness?
* abstract memory cell: size required by type
* address (lvalue) = value (rvalue)

---

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

---

# Static vs Dynamic Binding
* static - bound before run time and remains unchanged throughout execution
* dynamic - bound at run time or changes during program execution

---

# Static Type Bindings
* explicit declaration - statement declares variable has specified type
* implicit declaration - type association is determined through convention
	* Fortran: identifier begins with I-N (either case) then Integer otherwise Real
	* Perl: Begins with $ is scalar, @ is array, % is  hash structure

---

# Type inference
* Ability to automatically deduce a variables type
* C++11

```C++
auto iter = data.begin();
```

---

# Dynamic Type Binding
* Type bound when first assigned a value

```Python
# first occurrence bind to a string
variable = "foobar"

# second binds it to integer
variable = 1
```

---

# Advantages/Disadvantages
* Static type binding 
	* Can reliably find type error at compile time
	* Usually results in faster executing code
	* Can serve an additional documentation for developer
* Dynamic type binding 
	* Allows constructs typically illegal in static type checking, e.g. eval function to execute arbitrary data as code
	* Typically allows [duck typing](https://en.wikipedia.org/wiki/Duck_typing) for code reuse
	* Typically makes [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) easier

---

# Strongly and Weakly Typed
* Strongly typed definitions:
	* If type errors are always detected (Sebesta)
	* Language that has stricter typing rules and more likely to generate error or refuse to compile
* Some symptoms of weakly type:
	* Coercion - forcing one type to be used as another (no conversion)
		* Example: `void *`
	* Pointers - pointers can be used to bypass type system
	* Unions (untagged) - not type checked, values can be viewed as either type

---

# Union (C++)
<script src="https://gist.github.com/mjdecker/a2291b4b2b6490b534d547403c4d03d8.js?unions.cpp"></script>

---

# Lifetime
* Time for which a variable is bound to a specific memory location
	* Static
	* Stack-dynamic
	* Explicit heap-dynamic
	* Implicit heap-dynamic

---

# Static
* Variables bound before program execution and remains bound until program terminates

```C++
global variable;

int unique_id() {
	static int id = 0;
	return id++;
}
```

---

# Stack-dynamic
* Variables whose storage bindings created when declarations statements elaborated
	* elaboration - storage allocation and binding process indicated by declaration (run-time)
* Allocated on stack

![](https://upload.wikimedia.org/wikipedia/commons/d/d3/Call_stack_layout.svg)

---

# Explicit heap-dynamic
* Nameless (abstract) memory cells allocated and deallocated (from heap) by explicit instructions
*  What is the explicit heap-dynamic variable?

```C++
int * data = nullptr;
data = new int[128];
...
delete data;
```

---

# Implicit heap-dynamic
*  Bound to heap storage when assigned values
* Javascript

	```Javascript
	values = [42, 12, 7, 9, 3];
	```

---

# Scope
* Range of statements for which the variable is visible (can be referenced)
* Determines how a name's usage is associated with a variable
* local variable - one that is declared in the program unit or block
* nonlocal variable - those visible in a program unit or block but not declared there

---

# Static (Lexical) Scope
* What does static mean again?
* Introduced by ALGOL (Algorithmic Language) 60
* Method: Starting with current, successively search enclosing scopes (static parent/ancestors) until declaration is found
* Scopes can be created by:
	* Subprograms, e.g. Ada, JavaScript
	* Blocks, C-based languages

---

# Static Scope Example

```C++
void subroutine(std::istream & in) {
	int count = 0;
	data_t data;
	while (in >> data) {
		process_data(data);
		++count;
	}
	std::cout << "count: " << count << '\n';
}
```

---

# Hiding 
* An ancestor variable may be hidden if a descendant declares a variable with the same name
* Legal in some languages (e.g., C++), illegal in others (e.g., Java/C#)

```C++
    int var = 0;
    {
        std::cout << var << '\n';
        int var = 1;
        std::cout << var << '\n';
    }
```

---

# Where Declare?
* Languages (e.g.,C89) may require declarations to be at beginning of function/blocks
* More recent languages (C++/Java) allow declarations to appear anywhere in function/block
	* Why? Improves maintainability and comprehension
* Take home: *Define a variable just before its first use*

---

# For-statements
* Are declarations allowed in for-initialization?

```bash
[mdecke@voyager ~]$ gcc --pedantic main.c
main.c: In function 'main':
main.c:13:5: error: 'for' loop initial declarations are only allowed in C99 or C11 mode
    for(int i = 0; i < 10; ++i) {
    ^
    main.c:13:5: note : use option -std=c99, -std=gnu99, -std=c11 or -std=gnu11 to compile your code
```

---

# if-declaration?
* The following is valid C++

```C++
if(int a = 1) {
    std::cout << "Continue\n";
} else {
    std::cout << "Error\n";
}
```

---

# For-statements Scope
* When a language allows declarations in for-initialization, what is the scope?

```C++
size_t string_length(const char * str ) {
	for(size_t pos = 0; str[pos]; ++pos) {
	} // does it end here?
	return pos; 
} // does it end here?
```

<!-- Early versions of C++ ended at parent scope, current end at end of for-statement -->

---

# Global Scope 
* Some languages allow the declaration of variables outside functions, etc. (i.e., file-level)

```C++
std::string question 
	= "What is the answer to the life, universe, and everything?";
int answer = 42;
int main() {

    int answer = 0;
    std::cout << "question: " << question << '\n';
    std::cout << "local : " << answer << '\n';
    std::cout << "global: " << ::answer << '\n';

    return 0;
}
```

---

# More on C++ Globals
* Can only be defined once
* Can be declared many other files with external linkage
* *Avoid using mutable globals, as they typically make code hard to understand/maintain*

```C++
// foobar.cpp
int foobar = 42;

// main.cpp (requires foobar.cpp to compile)
extern int foobar;
int main() {
    std::cout << "foobar: " << foobar << '\n';
    return 0;
}
```

---

# Dynamic Scope
* What does dynamic mean again?
* Based on the calling sequence of subprograms instead of spatial relationship (static)
* Method: Starting with current, successively search calling procedures (dynamic parent/ancestors) until declaration is found
* APL (A Programming Language), SNOBOL (StriNg Oriented and symBOlic Language) 4, and dialects of LISP (LISt Processor, e.g., Emacs Lisp)

---

# C/C++ Macro
* Employ de facto dynamic scoping (does not directly do name resolution)

```C++
#define ADD_A(x) x + a
void add_one(int * x) {
	const int a = 1;
	*x = ADD_A(*X);
}
void add_two(int * x) {
	const int a = 2;
	*x = ADD_A(*X);
}
```

---

# Static vs Dynamic Scope
* Static
	* Widely used
		* Easier to read
		* More reliable (dynamic gives too much access to locals)
		* Execute faster
* Dynamic
	* No need to pass parameters defined in caller

---

# Scope and Lifetime
* Scope and lifetime are similar concepts, but scope != lifetime
* Example:

```C++
void length(const std::string & str) { // start lifetime of len
	std::cout << str << '\n';
	int len = str.size(); // start scope of len
	return len;
} // end scope/lifetime of len
```

---

# Another Example
* What is the lifetime and scope of `id`?

```C++
int unique_id() {
	static int id = 0;
	return id++;
}
```

---

# Named Constants
* A variable bound to a value only once
* C++ const, Java final, C# const/readonly

<!-- A const field can only be initialized at the declaration of the field. A readonly field can be initialized either at the declaration or in a constructor, and thus have different values -->

```C++
const int MAX_INT = 2147483647;
```

* *Use name constants instead of magic numbers*
	* Maintainability - one place to change
	* Readability/understandability - symbol explains exactly what it is

---

# References
* Concepts of Programming Languages, Robert W. Sebesta


