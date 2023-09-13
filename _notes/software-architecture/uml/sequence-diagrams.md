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
	name : Class

* Alternate Forms

```
aclient
: Client
aclient : Client
```

* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)


# Participant's Lifeline
* Line going down from participant
* Normally dashed.  Sequence diagram generator used below (Web Sequence Diagrams) uses solid line
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcK&s=default)

# Message
	name(param_name : param_type)

* Invoke a message on a participant
* Activation bar shows when a participant is active during the interaction (optional)
* Can indicate return and emphasize what was returned
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0NbGlic3JjbWwgOiBMaWJyYXJ5ACcFAA8ICgoARActPisAIwg6IAAtBV9hcmNoaXZlX2NoZWNrX2V4dGVuc2lvbigAEQcgABkPLCBmaWxlbmFtABUFdHJpbmcpCgB3CC0tPj4AgS4HOiBsYW5ndWFnZQ&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0NbGlic3JjbWwgOiBMaWJyYXJ5ACcFAA8ICgoARActPisAIwg6IAAtBV9hcmNoaXZlX2NoZWNrX2V4dGVuc2lvbigAEQcgABkPLCBmaWxlbmFtABUFdHJpbmcpCgB3CC0tPj4AgS4HOiBsYW5ndWFnZQ&s=default)

* Note - Only show return when adds something to diagram to avoid clutter

# Found Message
* First message that starts the sequence diagram
* Comes from undetermined source
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWNsaWVudCA6IEMABAUiIGFzIAAOBwoKAC0GLT4rACAHOiBzdGFydCgp&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWNsaWVudCA6IEMABAUiIGFzIAAOBwoKAC0GLT4rACAHOiBzdGFydCgp&s=default)

* Note - Web Sequence Diagrams does not provide this utility.  So using Source as a paticipant

# Participant Creation/Deletion
* Creation: Message to Participant with text `new` 
* Deletion: Message and place a big X, ending lifeline
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0Nc2Vzc2lvbl9vbmUgOiBTAAgGACoFAA8LAB0WdHdvABwXdHdvCgoAfQctPisAWQs6IG5ldwARCgANDWNsb3NlKCkKZGVzdHJveQB0DQA7EnR3bwBHBgCBBAstLT4-AIF0BzogZXhwaXJlAD0RdHdv&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgImFjbGllbnQgOiBDAAQFIiBhcyAADgcKAB0Nc2Vzc2lvbl9vbmUgOiBTAAgGACoFAA8LAB0WdHdvABwXdHdvCgoAfQctPisAWQs6IG5ldwARCgANDWNsb3NlKCkKZGVzdHJveQB0DQA7EnR3bwBHBgCBBAstLT4-AIF0BzogZXhwaXJlAD0RdHdv&s=default)

* Note - Creation line should be to participant, but Web Sequence Diagrams does not provide this

# Self Message
* A participant can pass a message to itself
* A second activation bar can be shown for self-message
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWZpbGUgOiBGaWxlIiBhcyAADAUKCgAnBi0-KwAcBTogcmVhZF9hbGwoKQoALgUACw9saW5lKCkKZGVhY3RpdmF0ZQBBBwARGwBBBi0-PgCBEgY6IGxpbmVz&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiYWZpbGUgOiBGaWxlIiBhcyAADAUKCgAnBi0-KwAcBTogcmVhZF9hbGwoKQoALgUACw9saW5lKCkKZGVhY3RpdmF0ZQBBBwARGwBBBi0-PgCBEgY6IGxpbmVz&s=default)

# Synchronous and Asynchronous Message
* Filled arrow indicates a synchronous message
* Stick arrow indicates an asynchronous message (half-stick arrow UML 1)
* [src](http://www.websequencediagrams.com/?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiZGlzcGF0Y2hlciA6IEQABAkiIGFzIAASCgAmDnRocmVhZF9vbmUgOiBUAAgFACsFAA4KABsVdHdvABsVdHdvCgoAgRcGLT4rAIEHCjoAeAkoKQoAgR4KLT4-KwB4CjogbmV3CgCBCAotPgAQDHJ1bgAkGHR3bwAvDXR3bwAzCQAXBQA2BgoAbQ0AgRIMam9pbl9hbGwAgQ4PAIEQC2pvaQB6BWVzdHJveQCCEwwAHhN0d28AGhcAghsFAIF1Cy0-PgCDRQY6IGlzX2Vycm9yCgo&s=default)

![](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=cGFydGljaXBhbnQgU291cmNlCgoACAwiZGlzcGF0Y2hlciA6IEQABAkiIGFzIAASCgAmDnRocmVhZF9vbmUgOiBUAAgFACsFAA4KABsVdHdvABsVdHdvCgoAgRcGLT4rAIEHCjoAeAkoKQoAgR4KLT4-KwB4CjogbmV3CgCBCAotPgAQDHJ1bgAkGHR3bwAvDXR3bwAzCQAXBQA2BgoAbQ0AgRIMam9pbl9hbGwAgQ4PAIEQC2pvaQB6BWVzdHJveQCCEwwAHhN0d28AGhcAghsFAIF1Cy0-PgCDRQY6IGlzX2Vycm9yCgo&s=default)

* Note - Difference between filled and stick arrow is subtle.  Use of the half-stick arrow is more distinguishable