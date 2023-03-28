---
title: "Code Analysis"
layout: notes
---

# Artifacts
* {: .fragment } UML and design documents
* {: .fragment } Issue-tracking
* {: .fragment } Others?
* {: .fragment } Code

# Code Analysis

* {: .fragment } *static program analysis*
    * {: .fragment } Analysis of software source code and other artifacts

* {: .fragment } *dynamic program analysis*
    * {: .fragment } Analysis of output/trace data from running programs

# Uses for Static Analysis
* {: .fragment } Search/Query
* {: .fragment } Metrics
* {: .fragment } Support Program Understanding/Comprehension, Code Review
* {: .fragment } Reverse Engineering
* {: .fragment } Program Transformation
* {: .fragment } Program Optimization
* {: .fragment } Program Correctness

# Source Code Granularity/Levels
<script src="https://gist.github.com/mjdecker/b5ba25cfea629f315c376ed45149c7d1.js?file=rainfall.cpp"></script>

* {: .fragment } Tokens
* {: .fragment } Statements
* {: .fragment } Methods/functions
* {: .fragment } Classes
* {: .fragment } Files
* {: .fragment } Set of files
* {: .fragment } Complete programs - all files

# Code Level Approaches
* {: .fragment } regular expressions
	* {: .fragment } lexical view, "Program is a stream of tokens"
* {: .fragment } Abstract Syntax Tree (AST)
	* {: .fragment } fully-parsed syntax view
	* {: .fragment } Really an Abstract Syntax Graph (ASG)

# Source Code is Messy
* {: .fragment } Comments
* {: .fragment } Literal values
* {: .fragment } Preprocessor statements
* {: .fragment } Code fragments
* {: .fragment } Uncompilable code
* {: .fragment } Incomplete set of files

# Regular Expressions
* Example: `^(From|To|Subject): (\w+@\w+\.[a-z]+)`
* {: .fragment } `grep`
* {: .fragment } Fast, faster, fastest
* {: .fragment } API's in most languages
* {: .fragment } Great for simple parsing
* {: .fragment } Corresponds to lexical analysis (lexer): Characters into tokens
* {: .fragment } Major disadvantage: Context, e.g., "if"

# Abstract Syntax Tree
* {: .fragment } Compiler view
* {: .fragment } Better for more complex parsing
* {: .fragment } Corresponds to parser in compilers: Tokens into trees
* {: .fragment } Understands syntax
* {: .fragment } Answers questions that compilers need to ask

# Abstract Syntax Tree: Disadvantages
* {: .fragment } Compiler view
* {: .fragment } No code fragments
* {: .fragment } Uni-preprocessor view
* {: .fragment } Cannot handle non-compilable code
* {: .fragment } Takes a lot of space
* {: .fragment } Slow, slow, slow

# Alternative: Document View
* {: .fragment } Markup text with annotations indicating place, etc.
* {: .fragment } Whole idea behind XML
* {: .fragment } Why not mark up source code with XML?
* {: .fragment } [srcML](https://www.srcml.org)
