---
title: "Programming Languages"
layout: notes
---

[Software Onion Graph]: https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9780128226742/files/images/F000011f01-03-9780128201091.jpg


# Machine Code
![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Digital_pdp8-e2.jpg)

* Code written in decimal or binary form
* Read in from punched cards, magnetic tape, or toggled from switches on front panel
* Error prone and tedious


# Assembly Language
* Mnemonics for machine code
* 1-1 correspondence with machine code
* Assembler translates assembly language to machine code
* Less error prone and tedious
* Consists of opcode and operands (possibly in binary/octal/hex)

# Assembly Example
<script src="https://gist.github.com/mjdecker/6e6328d85ab22fe264c683faa6b05f27.js?file=x86.s"></script>

# High-level Languages
* Languages with strong abstractions from the details of the computer.  A "Higher-level" of abstraction from machine language
* Compiled or interpretted
* [Zuse's Plankalkül](https://en.wikipedia.org/wiki/Plankalkül) 1942-1945
	* First high-level programming language
	* Original contribution largely isolated from other development due to WWII  
* [Language History](http://cdn.oreillystatic.com/news/graphics/prog_lang_poster.pdf)

# High-level Example
<script src="https://gist.github.com/mjdecker/84fce14297425ce748e4f50a2ee79819.js?file=emoji_sort.swift"></script>

# Software Onion Graph
![Software Onion Graph]

* Application Software - User's program, usualy in a high-level language
* System Software - OS, compilers, assemblers, loaders
	* Handles IO, storage/memory, application sharing, etc.
* Hardware - Processor, memory, I/O controllers. etc.

# [Programming Language](https://en.wikipedia.org/wiki/Programming_language)
* A formal language that specifies a set of instructions to produce various kinds of output
* Machine Code - 1<sup>st</sup> generation
* Assembly Language -  2<sup>nd</sup> generation
* High-level Languages - 3<sup>rd</sup> generation

# Compilation (C/C++)
* Take a program in high-level language and produce machine language executable by computer
* Stages
	* Preprocessor (-E) - preprocesses the code (still valid C++). Expands includes and other macros, removes comments
	* Compiler (-S) - C/C++ statements are converted into assembly language (AL) statements
	* Assembler (-c) - AL statements coverted into machine language (ML) known as *object code*
	* Linker - Object code from one or more sources is combined to form *executable program*
* [Compiler Explorer](https://gcc.godbolt.org/#)

# Interpreted and Hybrid Languages
* Interpreted Language
	* Program is executed without compilation
	* Interpreter (another program) executes the program directly
	* In theory, any language can be interpreted/compiled
	* E.g, JavaScript, Lisp, Perl, PHP 
* Hybrid 
	* Mixes compilation and interpretation
	* Example: Java compiles down to Java byte code (an intermediate representation) that is interpreted by the Java Virtual Machine (JVM).  A later addition to Java, can also use a just-in-time (JIT) compiler to optimize a *HotSpot*
	* E.g, Java and C#

# Programming Paradigms
* A classification of a programming language based on its features
* Paradigms can have a major affect on how the same program is written
* A programming language may support multiple paradigms
* Examples
	* Procedural
	* Object-oriented
	* Functional
	* Declarative
