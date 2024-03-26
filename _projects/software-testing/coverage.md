---
title: "Project: Coverage"
layout: markdown
---

# Project 2: Coverage #

## Objective(s) ##
* To apply white-box testing in the form of statement/condition coverage
* To further learn advantages and disadvantages of white-box testing metrics
* To learn a way to instrument code
* To work with an Abstract Syntax Tree (AST)

## Overview ##
* You will be writing a tool to [instrument](https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)) a given project to collect information on what statements and conditions are executed when running a given test suite or executable.
  * The following are provided for testing:
    * `simple_main.cpp` and `foo.cpp`
    * `test_output.cpp` and `bigint.cpp`

## Details ##
* The program must build and run using the provided *CMakeLists.txt* on voyager and be committed/pushed to your class GitHub repository.

* You will be inserting source-code into a software project that will collect and report coverage information when the project is run.  For this project, we will limit ourself to coverage of conditions, declaration-statements, and expression-statements.
* As we need knowledge of the program syntax to do this (i.e., we need Abstract Syntax Tree (AST) information), we will use the srcML infrastructure (see [www.srcML.org](www.srcML.org) for more information).  The srcML infrastructure wraps the source-code with AST information in the form of XML tags.  This will be the input to the coverage tool.  The utility *srcml* has been installed on voyager if you wish to play with it, but all the necessary files are provided for you.  It can be run as follows:
  *   `srcml input_file_name.cpp -o output_file_name.cpp.xml`
* For this project, only a subset of the srcML tags are relevant.  They are the following:
  * \<name> - an identifier or function name
  * \<block> - a block { stmts }
  * \<block_content> - the inside of a \<block>
  * \<constructor> - a constructor
  * \<destructor> - a destructor
  * \<function> - a function or method
  * \<function type="operator"> - an operator function/method
  * \<decl_stmt> - a declaration statement (e.g., *int a; bar x(str); char args[10] = { 0 };* )
  * \<expr_stmt> - an expression statement (e.g., *a = 5 + x; std::cin >> x; ++i; foo(30);*)
  * \<condition> - a condition of an if/for/while, etc.
  * \<return> - a return statement (e.g., return result;) 
* Note: function will be used to any function like element: functions, methods, constructors, destructors, and operator functions/methods. Provided for you is `is_function_tag` which returns true if an element is a function-like element.
* Specification
  * The following is a complete working usage of the coverage tool:

      # Instrumenting simple_main.cpp & foo.cpp
      ./coverage simple_main.cpp.xml foo.cpp.xml
      # Run cmake prior to next (one-time only)
      make
      ./c-simple_main

      # Instrumenting test_output & bigint.cpp
      ./coverage test_output.cpp.xml bigint.cpp.xml
      # Run cmake prior to next (one-time only)
      make
      ./c-test_output

  * There are three parts to this assignment:
    * The main which parses the command-line arguments and runs the code to profile the project.  For simplicity, the first argument to the command line tool will be the file with the main function.  The remaining arguments will be additional files (with no main) to be profiled.  The main program is provide for you as *main.cpp* (you **MUST** use this).
    * An object to collect the coverage information during runtime.  This is provided for you as *coverage_map.hpp* (you **MUST** use this).
    * The code that embeds code to collect coverage information.  For this, you finish the implementation of `syntax_tree.cpp`.  You will need to implement the following methods:
      * `syntax_tree::main_header`
      * `syntax_tree::file_header`
      * `syntax_tree::main_report`
      * `syntax_tree::instrument_functions`
      * `syntax_tree::count_elements`
      * `syntax_tree::instrument_statements`

  * Coverage information is inserted as follows with an example provided after.  All insertions are plain text nodes (token type)  
    * `syntax_tree::main_header` inserts an include of *coverage_map.hpp* at the start of the file.  In addition, `syntax_tree::main_header` will also insert global variable declarations (one for each file) with type *coverage_map_t* after the include.  The method parameter contains the names of these variable for you. 
    * `syntax_tree:file_header` also inserts an include of *coverage_map.hpp* at the start of the file.  However, it inserts one `extern` declaration referencing one of the variables declared in the main file.  The name of the variable is passed to the function for you.
    * `syntax_tree::main_report` is run on the main file.  It will have to search for the function named `main` and before the return statement (for simplicity, there is guaranteed to be only one return statement, and it will be directly in the function body and not nested in a statement), it will call print on each of the global variables inserted by `syntax_tree::main_header`.  The names of the variables are provided for you as a parameter.
    * `syntax_tree::instrument_functions` inserts all the coverage instrumentations using `syntax_tree::count_elements` and `syntax_tree::instrument_statements` as helper methods.  For each function found (you will have to search for each), first, `syntax_tree::instrument_functions` finds the function body and then the body's content (i.e., \<body_content>) where it inserts a call to append on the variable name provided as a parameter.  The arguments to this call are the name of the function (use `__FUNCTION__` for simplicity) and the number of statements (and conditions if you are doing the extra credit).  Use `syntax_tree::count_elements` to get this number.  Lastly, it calls `syntax_tree::instrument_statements` to insert statement coverage (and condition coverage if you are doing the extra credit).
    * `syntax_tree::count_elements` counts the number of expression statements (`expr_stmt`), declaration statements (`decl_stmt`), and, if you are doing the extra credit, conditions (`condition`).  This is a recursive function.  `is_coverage_tag` may be of use.  Make sure to call this on the function element.
    * `syntax_tree::instrument_statements` inserts calls to `executed` immediately after each expression statements (`expr_stmt`) and declaration statements (`decl_stmt`).  If doing the extra credit, it also inserts a call to `executed` at the start of each condition (`condition`).  Some conditions have a `(` and others do not that you will have to place the call after.  The variable the call is placed on is provided as a parameter to `syntax_tree::instrument_statements`.  Additionally, the second parameter to `executed` is a unique (by function) identifier for that statement/condition.  The parameter `current_statement_number` to `syntax_tree::instrument_statements` is used to provide this unique identifier.  Make sure to increment after each call to executed is inserted.  This is a recursive function.

  * Example Before:
    
<pre>
    //// @file main1.cpp
    #include &lt;iostream&gt;

    int main() {
      int i;
      i = 0;
      while (i < 10) {   
        ++i;   
        std::cout << i;
      }
      std::cout << '\n';
      return 0;
    }
  
    /// @file foo.cpp

    int foo() {
      int i;
      i = 0;
      return i;
    } 
</pre>
  * Example After:

<pre> 
    /// @file main1.cpp
    #include &lt;iostream&gt;

    <span style="color:red">#include "coverage_map.hpp"
    coverage_map_t simple_main_cpp("simple_main.cpp");
    coverage_map_t foo_cpp("foo.cpp");</span>

    int main() {<span style="color:red">simple_main_cpp.append(__FUNCTION__, 6);</span>
      int i;<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 0);</span>
      i = 0;<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 1);</span>
      while (<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 2)</span>, i < 10) {   
        ++i;<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 3); </span>  
        std::cout << i;<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 4);</span>
      }
      std::cout << '\n';<span style="color:red">simple_main_cpp.executed(__FUNCTION__, 5);</span>
      <span style="color:red">simple_main_cpp.print();foo_cpp.print();</span>return 0;
    }
    
    
    /// @file foo.cpp

    <span style="color:red">#include "coverage_map.hpp"
    extern coverage_map_t foo_cpp;</span>

    int foo() {<span style="color:red">foo_cpp.append(__FUNCTION__, 2);</span>
      int i;<span style="color:red">foo_cpp.executed(__FUNCTION__, 0);</span>
      i = 0;<span style="color:red">foo_cpp.executed(__FUNCTION__, 1);</span>
      return i;
    } 
</pre>
* Simplifications
  * *ONLY* invoked functions are reported.
  * You may *ASSUME* there are no usages of the ternary operator.
  * You may *ASSUME* all loops and conditionals have a block.
  * You may *ASSUME* the *main* function only has one return-statement and is a child of `block_content`.
  * You may *ASSUME* all function names are unique.
  * You may *ASSUME* that there are not functions within functions.
  * You may *ASSUME* that there are no uses of ranged-based for-statement.
  * Coverage assumes the project will run without failure (e.g., seg. fault, exception, or failed assertion).
* Clarifications
  * Email me [mdecke@bgsu.edu](mailto:mdecke@bgsu.edu) for clarifications and corrections.