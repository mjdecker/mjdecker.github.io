---
title: "Cloning from GitHub"
layout: notes
---

[repo-url]: /images/github/repo-url.png
[ssh-key]: https://mdecker.net/notes/common/ssh-key.html
[git]: https://mdecker.net/notes/common/git.html

# Options for Cloning
* *Command-line terminal*g
	* Windows: Windows Command Prompt (*cmd.exe*) or PowerShell
*  Integrated via your IDE 
	* *Visual Studio*
	* Visual Studio Code
* GitHub Desktop

# Command-line Terminal
![repo-ur]

* Get the repo URL (see image)
* If using command-line, SSH is recommended (see [ssh-key])
* Quick overview:
	* `git clone URL` - get repo and contents
	* `git add FILENAME` - add a file or add a modified file
	* `git commit -m "Verb message"` - to commit with a descriptive message
	*  `git push` - to put changes on GitHub
* See [git] for details

# Visual Studio