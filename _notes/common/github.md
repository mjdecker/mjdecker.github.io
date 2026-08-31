---
title: "Cloning from GitHub"
layout: notes
---

[repo-url]: /images/github/repo-url.png
[ssh-key]: https://mdecker.net/notes/common/ssh-key.html
[git]: https://mdecker.net/notes/common/git.html
[code]: https://code.visualstudio.com/docs/sourcecontrol/overview

[vs-login]: /images/github/vs-login.png
[vs-project-select]: /images/github/vs-project-select.png
[vs-clone]: /images/github/vs-clone.png
[vs-github-clone]: /images/github/vs-github-clone.png
[vs-git-view]: /images/github/vs-git-view.png
[vs-git-changes]: /images/github/vs-git-changes.png
[vs-commit]: /images/github/vs-commit.png

# Options for Cloning
* *Command-line terminal*
	* Windows: Windows Command Prompt (*cmd.exe*) or PowerShell
*  Integrated via your IDE 
	* *Visual Studio* - One way of doing so
	* Visual Studio Code
* GitHub Desktop

# Command-line Terminal
![repo-url]

* Get the repo URL (see image)
* If using the command-line, SSH is recommended (see [ssh-key])
* Quick overview:
	* `git clone URL` - get repo and contents
	* `git add FILENAME` - add a file or add a modified file
	* `git commit -m "Verb message"` - to commit with a descriptive message
	*  `git push` - to put changes on GitHub
* See [git] for details

# Visual Studio - Login
![vs-login]

* Log in via GitHub

# Visual Studio - Project Select
![vs-project-select]

* Select an existing project or select *Clone a repository*

# Visual Studio - Clone
![vs-clone]

* Use the *GitHub* option

# Visual Studio - GitHub Clone
![vs-github- clone]

* Enter the URL or use it to search for the repo by name

# Visual Studio - Git View
![vs-git-view]

* Use/select *Solution Explorer* to select files as normal
* Use/select *Git Changes* to use Git commands

# Visual Studio - Git Changes
![vs-git-changes]

1. If you haven't done so, you need to set your username/email
2. *Changes* has file status
	* *M* - modified file
	* *+* adds a new or modified file, staging it

# Visual Studio - Commit
![vs-commit]

1. After clicking *+*,  the file will be staged
2. Enter a descriptive commit message
3. Click *Commit Staged* to commit (locally)
4. Click the up arrow to push commit(s) to GitHub. Down arrow pulls changes (not shown)

# Visual Studio Code
* See [code]
