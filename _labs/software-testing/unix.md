---
title: Unix
layout: notes
---

[Compilation]: /notes/programming-languages/intro.html#/8

# Discussion
* Login `voyager.cs.bgsu.edu`
	* Unix: command line
	* Windows: Putty
* Using Git
* Compiling

# Lab Grading Policy
* Labs are worth 10 points
	* 5 points for attending
	* 1 point for good commit messages
	* 1 point for incremental commits
	* 3 points for completing 
		* 1 - anything started
		* 2 - about half complete
		* 3 - >= mostly complete
* Labs are due before the following Friday

# Basic Unix Commands

|command|description|
|---|---|
|ls|list directory contents|
|sl|steam locomotive (common misspelling)|
|man|man pages q to quit, j and k to page (or up and down arrows)|
|cd|change directory (~, ., and ..)|

# Basic Unix Commands (continued)

|command|description|
|---|---|
|clear|clear screen or (ctrl-l)|
|cat|concatenate and print files|
|less|file pager|
|touch|create file or update timestamp|
|who|who is logged on|

# emacs [filename]

|command|description|
|---|---|
|ctrl x ctrl s|save|
|ctrl x ctrl c|quit|
|ctrl k|kill a line (cut)|
|ctrl y|yield killed lines (paste)|
|ctrl -|undo & redo|
|ctrl z| put to background, use fg to get back|

# Programs
* [Compilation]
* Infinite loop: ctrl-c to quit
* Use path to run a program
* < & > are file redirction

# Setup Repository
<script src="https://gist.github.com/mjdecker/fe8a2a05db380dfd57d49de759862887.js?file=clone.sh"></script>

* Use GitHub classroom link on Canvas to create Lab 1 repository
* Clone repository

# Directory Creation
<script src="https://gist.github.com/mjdecker/fe8a2a05db380dfd57d49de759862887.js?file=check_directory.sh"></script>

* Create directory for assignment (# are comments)

# My Name Is - Overview
1. View repository directory via web browser
2. Log into remove Unix system, create a file, and add to repository via Unix commands
3. Write and put into a repository that outputs your name

# Viewing Repository
* Open your favorite browser
* Enter `<Repo URL from GitHub>`
* Navigate to view files/folders

# File Manipulation
<script src="https://gist.github.com/mjdecker/fe8a2a05db380dfd57d49de759862887.js?file=add_file.sh"></script>

* Log onto `voyager` if you are not already
* Type the following (then verify on GitHub):

# Write My Name Is
* Implement `my_name_is` in `my_name_is.cpp`
* The program will print: "My Name is: YOUR NAME"
* Use whatever development approach you want
	* `emacs my_name_is.cpp`
* Make sure the program compiles and runs
* Commit & push
* View file in the repository on the browser (reload if necessary)

# Completion Requirements
* You have committed and pushed a file `my_name_is.cpp` to GitHub
