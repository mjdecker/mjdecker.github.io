---
title: "Coding Standards"
layout: markdown
---

# Coding Standards

[commit messages]: https://chris.beams.io/posts/git-commit/
[using namespace]: https://isocpp.org/wiki/faq/coding-standards#using-namespace-std
[Tabs are Evil]: https://www.emacswiki.org/emacs/TabsAreEvil

## General Standards
* Do not commit any generated files (such as the executable) unless directed to
* Output must be readable and easy to understand
* Folders and files should be named exactly as specified in the assignment description
* Write good [commit messages].

## Code Standards
* A comment must be at the very top of each file in the following format. Substitute your name, the correct due date, the correct course, the correct program_name, and a program description (in your own words)
  
```
/**
 * @author firstname lastname
 * @date project-due-date
 * CS course-number
 * Program-name
 * 
 * Brief description of the program
 */
   ```
   
* No use of [using namespace]
	* Pollutes the namespace and can cause bugs and other problems.  Any use results in an **F** for the assignment.
* No use of `#pragma` once
* Use good indentation 
	* [Tabs are Evil]
	* Indentation is used so that blocks may be easily recognized. Two to four spaces per level is widely regarded as good.
*  End files with a newline
* Use good variable names
	* A variable should have a name that is descriptive of the purpose of the value/object it stores.  Do not use hungarian notation
* Be consistent in spacing/identation, identifier naming style, bracket placement, etc.
* Separate subtasks by empty lines
	* To accomplish its task a program or function often must do a number of subtasks. Each subtask will require one or more C++ statements. This is analogous to sentences and paragraphs: a sentence is a C++ statement, and a paragraph is a subtask. Separate subtasks with empty lines so they stand out as units
* Include helpful comments
	* ***Precede*** each subtask with a comment that describes what the subtask (code) does. Comments are included to describe the purpose of a statement or group of statements. It is not necessary to comment each line. Comment things that are unusual or nonstandard
* Define a variable just before its first use
* Initialize a variable when it is defined
	* Not doing this is a common source of bugs.  Exception; don't initialize a variable if it will immediately receive input, any value you would use for initialization would not be meaningful
* Use constants. 
	* If a variable's value will not change make it const

## Good Practices
* It is a good habit not to change the value of input variables (i.e., parameters). They might be needed later on in the program with their original value. Use another variable instead
* It is a good habit to separate the input of values, calculations, and the output of values. This allows you to change the way that you prompt, or the way that you do the calculation, or the way that you output the result without changing the other subtasks
* Pretend you are a user of your program and observe its output. Make it say what needs to be said neatly, clearly, and without any excess
* One of the best software development skills that you can learn is to start with a minimal program, get it to compile and run, and add to it in small, incremental steps with a new compile and run between each addition.

```
while (a subtask remains to be implemented) {
    add small incremental step(s)
    compile
    run and test
}
```    