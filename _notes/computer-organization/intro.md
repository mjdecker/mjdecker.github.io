---
title: "Introduction to Computer Organization"
layout: notes
---

[architecture-diagram]: https://upload.wikimedia.org/wikipedia/commons/0/08/Computer_architecture_block_diagram.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original
[ENIAC]: https://en.wikipedia.org/wiki/ENIAC
[eniac-image]: https://upload.wikimedia.org/wikipedia/commons/d/d3/Glen_Beck_and_Betty_Snyder_program_the_ENIAC_in_building_328_at_the_Ballistic_Research_Laboratory.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original
[von Neumann Architecture]: https://en.wikipedia.org/wiki/Von_Neumann_architecture
[John von Neumann]: https://en.wikipedia.org/wiki/John_von_Neumann
[Stored Program Computer]: https://en.wikipedia.org/wiki/Stored-program_computer
[EDVAC]: https://en.wikipedia.org/wiki/EDVAC
[edvac-image]: https://en.wikipedia.org/wiki/EDVAC#/media/File:Edvac.jpg
[Transistor Computers]: https://en.wikipedia.org/wiki/Transistor_computer
[Third Generation]: https://en.wikipedia.org/wiki/History_of_computing_hardware_(1960s–present)#Third_generation
[Integrated circuit]: https://en.wikipedia.org/wiki/Integrated_circuit
[Fourth Generation]: https://en.wikipedia.org/wiki/History_of_computing_hardware_(1960s–present)#Fourth_generation

# [Computer Organization/Architecture](https://en.wikipedia.org/wiki/Computer_architecture)
* Computer Architecture - conceptual design and operational structure of a computer system that defines how component parts are organized and interact to execute programs efficiently. It covers the instruction set architecture, CPU microarchitecture, memory, and input/output systems. [Wikipedia]

* Microarchitecture (AKA computer organization) -  describes how a particular processor will implement the instruction set architecture [Wikipedia]

# Computer Architecture Overview
![architecture-diagram]

* Instruction Set Architecture (aka ISA)
* CPU microarchitecture
* Memory
* Input/output systems


# Computer History - First Generation
![eniac-image]

* [ENIAC] - Electronic Numerical Integrator and Computer (1945)
* Cost $487,000 (> $9.5M as of July 2026)
* Weighed 30 tons, constructed with 20,000 vacuum tubes
* Operated a single task at a time
	* No operating system, architecture, or memory
	* Data and instructions are re-programmed every time
* Programs were written on tapes
* Decimal

# Computer History - [von Neumann Architecture]
* AKA Princeton Architecture
* [John von Neumann] - Prematurely wrote a draft of Eckert and Mauchly's work on EDVAC
* [Stored Program Computer]
	* Computer reads program instructions it is executing directly from electronic storage
	* Princeton - same access path for both instructions and data
	* Harvard -  separate access paths for instructions and data

# Computer History - [EDVAC]
![edvac-image]

* EDVAC - Electronic Discrete Variable Automatic Computer 
* Successor to ENIAC
* Stored-program computer
* Was able to hold any program in its memory that was fed into EDVAC.
* Had a simple Operating System (OS)
* Still used vacuum tubes and mercury tubes
* Binary

# Computer History - Second Generation
* [Transistor Computer] -  Transistors replaced vacuum tubes
* Vacuum tubes generated large amounts of heat, were bulky, and were unreliable
* Late 1950s and 1960s
	* Circuit boards filled with individual transistors
	* Magnetic-core memory - form of random access memory

# Computer History - Third & Fourth Generation
* [Third Generation]
	* [Integrated circuit] - compact assembly of electronic circuits formed from various electronic components, such as transistors, resistors, and capacitors, and their interconnections
	* < 1K transistors
* [Fourth Generation] - Today
	* Large Scale Integration (LSI) - 500 to 20K transistors
	* Very Large Scale Integration (VLSI) - 20K to 1M transistors
	* Ultra-Large-Scale integration (ULSI) - > 1M transistors





