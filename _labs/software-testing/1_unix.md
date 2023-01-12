---
title: Unix
layout: notes
---

# Discussion
* Login `voyager.cs.bgsu.edu`
	* Unix: command line
	* Windows: Putty
* Using Git
* Compiling

# Lab Grading Policy
* Labs are worth 10 points
	* 6 points for attending
	* 4 points for completing 
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
* [Compilation](../notes/compiling.html)
* Infinite loop: ctrl-c to quit
* Use path to run a program
* < & > are file redirction

# Setup
* Use GitHub classroom link on Canvas to create Lab 1 repository
* Clone repository

```
git clone <Repo URL from GitHub> lab-1-unix
```

* Create directory for assignment (# are comments)

```
cd                    # Go to your home directory
cd lab-1-unix         # Go into the working copy of your programs
pwd                   # Print working directory, just to show where you're at
ls                    # No my_name_is
mkdir my_name_is      # USE THIS NAME EXACTLY
ls                    # my_name_is now present
``` 

# My Name Is - Overview
1. View repository directory via web browser
2. Log into remove Unix system, create a file, and add to repository via Unix commands
3. Write and put into a repository that outputs your name

# Viewing Repository
* Open your favorite browser
* Enter `<Repo URL from GitHub>`
* Navigate to view files/folders

# File Manipulation
* Log onto `voyager` if you are not already
* Type the following (then verify on GitHub):

```
cd                       # Go to your home directory
cd lab-1-unix            # Change directory into your working copy
ls                       # List files and directories, you should see my_name_is
cd my_name_is            # Change directory
touch my_name_is.cpp     # Create the .cpp file for your program
ls                       # You should see my_name_is.cpp
git status               # Notice my_name_is.cpp is not tracked yet
git add my_name_is.cpp   # Notify Git to track changes to my_name_is.cpp
# Records version of the file to the repository (local)
git commit -m "Adds empty program file for my_name_is lab"
git push                 # Send commits to server (GitHub)
```

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
