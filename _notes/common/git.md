---
title: "Git"
layout: notes
---

# Version Control
* One of the most important tools for software development
	* Records and maintains the history of changes to files
	* Enables collaboration between developers
	* Allows for parallel lines of development
* Developer edit files and commit the changes to the version control system
* Centralized vs. Distributed

# Centralized VCS
* Example: [Subversion](https://subversion.apache.org) (svn)
* One repository (hosted on a server) shared by all users (draw diagram)
* Developers check out a version of software (aka working copy), edit, and commit changes back to server
* Changes are recorded and stored in the repository on the server
* All users must maintain consistency with most recent version on server

# Distributed VCS
* Example: [Git](https://www.git-scm.com) (git)
* Each user has its own repository changes can be shared (push/pull) between the users (peers)  (draw diagram)
* Commonly, one repository is used as a centralized repository (aka blessed repository) 
* Users may work independently and combine each others changes (merge) when choose 

# Git
* For this class, we will be using Git for class work
* The repository will be set up for you and hosted on GitHub
* Meaning: from British slang for “unpleasant person”
* Initial Release: 4/7/2005
* Developer: Linus Torvalds
* Purpose: Developed as version control system for Linux kernel
* For additional information on Git, see [here](https://www.git-scm.com/book/en/v2)

# Installing Git
* Unix - install from package manager
* Windows -  Download from [official website](https://git-scm.com/download/win)

# Git Commands
* Git commands have the following format:

		git operation [arguments]

# Obtaining a Copy of Repository

* Creates a complete copy (called a clone) of the repository at the given URL

		git clone URL

# Git File Lifecycle
* [Draw on board](https://git-scm.com/book/en/v2/images/lifecycle.png)

# File Commands

* notify Git to track changes to file(s) and/or stage edited files for commit

		git add file(s)

* Stop tracking changes to file(s)

		git rm file(s)

	* Use `--force` to remove a file with edits<br/><br/>

* Record staged changes as a new revision

		git commit -m "A clear concise message"

	* add (both forms) and rm only stage files.  You have to commit afterwards
	* [How to write a good commit message](https://chris.beams.io/posts/git-commit/)

# Additional File Commands
* Revert/discard changes to file(s)

		git checkout file(s)

* Revert/discard changes to all files

		git revert --hard

# Pull and Push
* Commit only records the revision on your copy of the repository
* Put new commits into the remote repository (one cloned from)
 
		git push

* Get commits on remote repository that you do not have

		git pull

	* For example, you are working on two computers or I made a commit since you last worked

# Authorship
* Without proper setup of the Git, the author information, will not be added to the repo and you will most likely get a warning.
* Author information can be added with: 


		git config --global user.name "[name]"
		git config --global user.email "[email address]"

# Other Useful Commands
* Check the status of files: unversioned/added/deleted/edited/staged

		git status

* View past commits

		git log

# Customization
* Additional customization can be configured via ```git config``` 

		git config --global color.ui true

* Or, by editing the configuration file directly 
	* UNIX is typically in ~/.gitconfig
	* Windows file can be found with ```git config --list --show-origin```

# Git Config File

```
[user]
	name = Michael John Decker
	email = mdecke@bgsu.edu
[push]
	default = matching
[clean]
	requireForce = false
[core]
	editor = emacs
	autocrlf = input
[alias]
	co = checkout
	br = branch
	ci = commit
	st = status
[help]
	autocorrect = 1
[color]
	ui = true
```

# Rules to Live By
* **Always** `pull` before you start working
* **Always** `commit` and `push` changes

* Commit often – after a major (or minor) change:
	* Add a method
	* Fix a bug
	* Change a method
* Write good commit messages