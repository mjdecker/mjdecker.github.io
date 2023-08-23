---
layout: root
---

If you are on Windows, you should setup WSL2 (Windows Subsystem for Linux). WSL2 gives you a proper Linux installation,
with a bash shell and all. *git bash* is sufficient for entering `git` commands, and it is possible to add
the other tools you need to it, but do not.

To install WSL2:

1. Make sure Windows is updated as much as it can be. More recent versions of Windows make it much, much
easier to setup WSL2.
1. Use these directions to [find your Windows Version](https://support.techsmith.com/hc/en-us/articles/115001763452-How-to-Check-Windows-10-Build)
1. Use these directions to [install WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
Try the "Simplified Install" first, as it is much, much easier. I believe that you may **not** need to
be on the *Windows Insider Program* to use the "Simplified Install". Let me know if you can, use this straightforward install. It does not hurt to try the "Simplified Install".
1. If the "Simplified Install* does not work. Then use the *Manual Installation Steps*.
1. Once you have setup WSL2, probably with Ubuntu, then you can install the needed packages:

```console
apt update
apt upgrade
apt install g++ make
```

If `apt` is not installed, use `apt-get`
