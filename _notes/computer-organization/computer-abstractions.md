---
title: "Computer Abstractions and Technology"
layout: notes
---

[TOP500]: https://en.wikipedia.org/wiki/TOP500
[Moore's Law]: https://en.wikipedia.org/wiki/Moore%27s_law

[von Neumann Architecture]: https://en.wikipedia.org/wiki/Von_Neumann_architecture
[classic-components]: https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9780128226742/files/images/F000011f01-05-9780128201091.jpg
[Datapath]: https://en.wikipedia.org/wiki/Datapath
[Control]: https://en.wikipedia.org/wiki/Control_unit
[CPU]: https://en.wikipedia.org/wiki/Central_processing_unit
[Register]: https://en.wikipedia.org/wiki/Processor_register
[Random Access Memory]: https://en.wikipedia.org/wiki/Random-access_memory
[SRAM]: https://en.wikipedia.org/wiki/Static_random-access_memory
[DRAM]: https://en.wikipedia.org/wiki/Dynamic_random-access_memory
[Memory Hierarchy]: https://en.wikipedia.org/wiki/Memory_hierarchy
[memory-hierarchy]: https://upload.wikimedia.org/wikipedia/commons/0/0c/ComputerMemoryHierarchy.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original

# Classes of Computers I
* Personal computers (PCs)
	* General purpose, variety of software
	* Subject to cost/performance tradeoff
* Server computers
	* Network-based
	* High capacity, performance, reliability

# Classes of Computers II
* Supercomputers
	* High-end scientific and engineering calculations
	* Highest capability but represent a small fraction of the overall computer market
	* [TOP500] - ranks and details the 500 most powerful non-distributed computer systems in the world (peta == 10<sup>15</sup>)
* Embedded computers
	* Hidden as components of systems
	* Stringent power/performance/cost constraints

# Classes of Computers III
* Personal Mobile Devices (PMDs)
	* Battery-operated
	* Connects to the Internet
	* Hundreds of dollars
	* Smartphones, tablets, electronic glasses
* Cloud computing
	* Warehouse Scale Computers (WSC)
	* Software as a Service (SaaS)
	* Portion of software run on a PMD and a portion run in the Cloud
	* Amazon and Google

# Five Classic Components of a Computer
![classic-components]

* Adapted from [von Neumann Architecture]
* Input devices - keyboard, microphone, mouse, etc.
* Output devices - speaker, monitor, etc.
* Memory - stores data/instructions, e.g., RAM
* [Control] - sequences datapath, memory
* [Datapath] - performs operations on data

# [CPU]
* Central Processing Unit - the primary processor in a given computer
* CPU (processor) = Control/CU + Datapath/ALU
* Control Unit (CU) - Receives instructions from RAM and breaks them down into specific commands for other components.
* Arithmetic-logic Unit (ALU) - Performs all arithmetic and bitwise operations
* CU decodes an instruction directing the other units (e.g., memory, ALU, input/output)

# [Register]
* Working storage for data/instruction inside the CPU
* General-purpose registers (GPR) - data operands involved in arithmetic/logical operations
* Program Counter (PC) - Holds the address of the nextinstruction to be executed
* Instruction Register (IR) - currently executing instruction

# CPU, CU, ALU, and Registers
1. CPU fetches an instruction from the memory system based on the content of PC and loads the instruction into the IR
2. CU decodes the instruction in IR and directs the ALU to perform the operation specified by the instruction
3. The ALU may read registers to complete the computation
4. After ALU completes the operation, it may need to update the content of the destination register

# CPU bus
* A group of wires connecting different components in the CPU for data transfer, e.g., fetching/reading instructions, reading/writing to registers, etc.

# Memory
* Storage area is where programs and data are kept when they the program is running
* Volatile (short-term) memory - loses contents when powered off
	* Cache, Random Access Memory (RAM)
* Non-volatile (long-term) memory - persistent
	* Read-Only Memory (ROM) - can't be modified, often a initial startup program 
	* Storage - hard disk, SSD, etc.

# [Random Access Memory]
* Storage medium for computers
* Random access refers to any portion of the memory that can be accessed in the same amount of time
* What would be sequential access memory?

# [SRAM] vs [DRAM]
* SRAM (Static RAM) - constructed via flip-flops (more much later)
	* Faster, generally smaller, and much more expensive
	* Cache memory
* DRAM (Dynamic RAM) -  capacitor and a transistor (usually)
	* Slower, generally larger, and less expensive
	* Needs refreshed to prevent memory loss
	* Main memory for computer/graphics card

# [Memory Hierarchy]


# Seven Great Ideas of Computer Architecture
* <del>Design for Moore's Law</del>
* Use abstraction to simplify design
* Make the common case fast
* Performance via parallelism
* Performance via pipelining
* Performance via prediction
* Hierarchy of memories
* Dependability via redundancy

# [Moore's Law]
> The number of transistors in an integrated circuit (IC) doubles about every two years

* An observation stated by Gordon Moore in 1965 and revised in 1975
* Originally, integrated circuit components double every year (revised to 2 years)
	* Component: transistor, resistor, diode, or capacitor
* Increase in transistors results in:
	* More capacities on a chip
	* More powerful computing capabilities
	* More tasks can be done in a given time
	* Faster machines
* Pace has slowed down and no longer seems to be accurate

# <del>Design for Moore's Law</del>
*  <del>Anticipate where the technology will be when the design finishes</del>

# Use abstraction to simplify design
* Lower-level details are hidden from the higher-level designer
* Incorporating existing packages/technology in high-level design

* Examples of using abstraction?

# Use abstraction to simplify design
* Lower-level details are hidden from the higher-level designer
* Incorporating existing packages/technology in high-level design

* Examples of using abstraction?
	* A function, class, and module
* Abstraction is an important skill that a computer scientist/software engineer must have

# Make the Common Case Fast
* Better than optimizing the rare case
* Common case is often simpler and easier to enhance than the rare case
* Common case often costs less
* More generally, common case occurs much more frequently and thus more payoff to optimize

# Performance via Parallelism
* Performing operations, not necessarily the same operation, in parallel
* Work in parallel can achieve greater resource utilization
* Parallel computing is a sub-field of computer science

# Performance via Pipelining
* Break one task into small stages
* Design designated parts/units/functions for each stage
* Different from parallelism

# Parallelism VS. Pipelining
* Parallelism
	* Complete multiple tasks at the same time
	* May not be the same task
	* Different tasks may use different sets of resource/functions/units
* Pipelining
	* Break individual task into small sub-tasks (or stages)
	* Each stage requires a different/designated functional units
	* May be used to achieve parallelism

# Performance via Prediction
* In some case, it can be faster on average to guess and start working rather than wait until you know for sure
* Assumes that the mechanism to recover from a misprediction is not too expensive and your prediction is relatively accurate

# Hierarchy of Memory
* Fastest, smallest, and most expensive memory per bit at the top
* Slowest, largest, and cheapest per bit at the bottom.

# Dependability via Redundancy
* Physical devices can fail
* Include redundant components that can take over when a failure occurs and to help detect failures







