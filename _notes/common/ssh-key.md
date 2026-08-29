---
title: "SSH Key"
layout: notes
---

[SSH]: https://en.wikipedia.org/wiki/Secure_Shell
[public-private key]: https://en.wikipedia.org/wiki/Public-key_cryptography
[keygen]: https://upload.wikimedia.org/wikipedia/commons/3/32/Public-key-crypto-1.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original
[encryption]: https://upload.wikimedia.org/wikipedia/commons/f/f9/Public_key_encryption.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original

[GitHub SSH Key Illustration]: images/ssh/github-sshkey.png

# SSH Key
* [SSH] = Secure Shell
	* Cryptographic network protocol for running network services over an unsecure network
* Can authenticate using username/password or an SSH Key

# SSH Key
![keygen]

* Uses a [public-private key] pair (aka public-key/asymmetric cryptography)
*  Consists of two corresponding keys:
	* private key - a secret key you keep safe and hidden on your computer
	* public key - put anywhere you want to access
* Security is based on how well the private key can remain secret (and how incalculable it is from the public key)

# How it Works
![encryption]

# Generating an SSH key
<script src="https://gist.github.com/mjdecker/e27805da53d2e1329b6d312674310162.js?filename=ssh-keygen.sh"></script>

* Each computer you use will need to set this up (but only once)
* Open up the command-line terminal, e.g., 
	* Windows: Windows Command Prompt (*cmd.exe*) or PowerShell
* Type the shown code snippet
* You may simply press enter until you return to the command prompt 
	* If you want to enter a password each time your private key is 
* Go to the next section to see an example

# ssh-keygen Example
<script src="https://gist.github.com/mjdecker/e27805da53d2e1329b6d312674310162.js?filename=sample-ssh-keygen.sh"></script>

# Copy the Public Key
* In your home/user directory, you will have a *.ssh* directory containing the two keys
	* *id_ed25519* - private key (DON'T SHARE)
	* *id_ed25519.pub* - public key
* Copy the contents of your public key file (*id_ed25519.pub*)

# Put Public Key on Remote Server
* The following are instructions for GitHub (image in next section)
1. Click your GitHub user navigation menu image (top-right)
2. Click *Settings*
3. Click *SSH and GPG Keys* (right side, under *Access*) and Click *New SSH key* (green button on right side, not shown in image)
4. In *Title*, give any title you want (e.g., something indicating the computer the key is associated with)
5. Leave Key type alone as *Authentication Key*
6. Paste the contents of the public key in Key
7. Finish with, *Add SSH Key*

# GitHub SSH Key Illustration
![GitHub SSH Key Illustration]
