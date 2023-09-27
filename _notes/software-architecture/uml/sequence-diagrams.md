---
title: "Sequence Diagrams"
layout: notes
---

# Design
* UML Class Diagrams capture the static structure of a program
* What class exist and which methods they have
* However, interaction is not always clear
* Need a way to capture interactions

# UML Sequence Diagrams
* Capture the *message passing* (typically, calls) between objects
* Show how the objects interact during use
* Show a particular *scenario*
* Complements UML Class Diagrams
* Develop in parallel with UML Class Diagrams

# Participants
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

* Forms:
	* `name : Class`
	* `aclient`
	* `: Client`
	* `aclient : Client`

* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

# Participant's Lifeline
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

* Line going down from participant
* Normally dashed.  Sequence diagram generator used below (Web Sequence Diagrams) uses solid line
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)


# Message
![](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0NbGlic3JjbWwgOiBMaWJyYXJ5ACcFAA8ICgoARActPisAIwg6IAAtBV9hcmNoaXZlX2NoZWNrX2V4dGVuc2lvbigAEQcsIGZpbGVuYW1lKQoAXggtLT4-AIEVBzogbGFuZ3VhZ2U&s=default)

* `name(argument_one, argument_two, ...)`
* or (depends on what you want to emphasize/show)
* `name(param_name : param_type)`
* 
* Invoke a message on a participant
* Activation bar shows when a participant is active during the interaction (optional)
* Can indicate return and emphasize what was returned
* Note - Only show return when adds something to diagram to avoid clutter
* [src](https://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0NbGlic3JjbWwgOiBMaWJyYXJ5ACcFAA8ICgoARActPisAIwg6IAAtBV9hcmNoaXZlX2NoZWNrX2V4dGVuc2lvbigAEQcsIGZpbGVuYW1lKQoAXggtLT4-AIEVBzogbGFuZ3VhZ2U&s=default)

# Found Message
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWNsaWVudCA6IEMABAUiIGFzIAAOBwoKAC0GLT4rACAHOiBzdGFydCgp&s=default)

* First message that starts the sequence diagram
* Comes from undetermined source
* Note - Web Sequence Diagrams does not provide this utility.  So using Source as a paticipant
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWNsaWVudCA6IEMABAUiIGFzIAAOBwoKAC0GLT4rACAHOiBzdGFydCgp&s=default)

# Participant Creation/Deletion
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0Nc2Vzc2lvbl9vbmUgOiBTAAgGACoFAA8LAB0WdHdvABwXdHdvCgoAfQctPisAWQs6IG5ldwARCgANDWNsb3NlKCkKZGVzdHJveQB0DQA7EnR3bwBHBgCBBAstLT4-AIF0BzogZXhwaXJlAD0RdHdv&s=default)

* Creation: Message to Participant with text `new` 
* Deletion: Message and place a big X, ending lifeline
* Note - Creation line should be to participant, but Web Sequence Diagrams does not provide this
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0Nc2Vzc2lvbl9vbmUgOiBTAAgGACoFAA8LAB0WdHdvABwXdHdvCgoAfQctPisAWQs6IG5ldwARCgANDWNsb3NlKCkKZGVzdHJveQB0DQA7EnR3bwBHBgCBBAstLT4-AIF0BzogZXhwaXJlAD0RdHdv&s=default)

# Self Message
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWZpbGUgOiBGaWxlIiBhcyAADAUKCgAnBi0-KwAcBTogcmVhZF9hbGwoKQoALgUACw9saW5lKCkKZGVhY3RpdmF0ZQBBBwARGwBBBi0-PgCBEgY6IGxpbmVz&s=default)

* A participant can pass a message to itself
* A second activation bar can be shown for self-message
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWZpbGUgOiBGaWxlIiBhcyAADAUKCgAnBi0-KwAcBTogcmVhZF9hbGwoKQoALgUACw9saW5lKCkKZGVhY3RpdmF0ZQBBBwARGwBBBi0-PgCBEgY6IGxpbmVz&s=default)

# Synchronous and Asynchronous Message
![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiZGlzcGF0Y2hlciA6IEQABAkiIGFzIAASCgAmDnRocmVhZF9vbmUgOiBUAAgFACsFAA4KABsVdHdvABsVdHdvCgoAgRcGLT4rAIEHCjoAeAkoKQoAgR4KLT4-KwB4CjogbmV3CgCBCAotPgAQDHJ1bgAkGHR3bwAvDXR3bwAzCQAXBQA2BgoAbQ0AgRIMam9pbl9hbGwAgQ4PAIEQC2pvaQB6BWVzdHJveQCCEwwAHhN0d28AGhcAghsFAIF1Cy0-PgCDRQY6IGlzX2Vycm9yCgo&s=default)

* Filled arrow indicates a synchronous message
* Stick arrow indicates an asynchronous message (half-stick arrow UML 1)
* Note - Difference between filled and stick arrow is subtle.  Use of the half-stick arrow is more distinguishable
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiZGlzcGF0Y2hlciA6IEQABAkiIGFzIAASCgAmDnRocmVhZF9vbmUgOiBUAAgFACsFAA4KABsVdHdvABsVdHdvCgoAgRcGLT4rAIEHCjoAeAkoKQoAgR4KLT4-KwB4CjogbmV3CgCBCAotPgAQDHJ1bgAkGHR3bwAvDXR3bwAzCQAXBQA2BgoAbQ0AgRIMam9pbl9hbGwAgQ4PAIEQC2pvaQB6BWVzdHJveQCCEwwAHhN0d28AGhcAghsFAIF1Cy0-PgCDRQY6IGlzX2Vycm9yCgo&s=default)
