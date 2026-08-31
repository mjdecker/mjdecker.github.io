---
title: "Defining Performance"
layout: notes
---

[Clock Rate]: https://en.wikipedia.org/wiki/Clock_rate
[crystal oscillator]: https://en.wikipedia.org/wiki/Crystal_oscillator
[clock-cycles]: https://upload.wikimedia.org/wikipedia/commons/d/dd/Clock_signal_and_clock_rate.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original
[ISA]: https://en.wikipedia.org/wiki/Instruction_set_architecture
[RISC]: https://en.wikipedia.org/wiki/Reduced_instruction_set_computer
[CISC]: https://en.wikipedia.org/wiki/Complex_instruction_set_computer

# How Do You Define Performance
* How might you define the performance of an Airplane?

# How Do You Define Performance
* How might you define the performance of an Airplane?
	* Passenger Capacity
	* Cruising Range
	* Cruising Speed
	* Passenger Throughput - Passenger Capacity x Cruising Speed

# Some Performance Metrics for Computer Architecture
* Response Time - how long it takes to do a task
* Throughput - Total work done per unit of time, e.g., tasks per hour
* And how are Response Time/Throughput affected by:
	* Replacing a processor with a faster one?
	* Adding more processors?
* We will focus on Response Time for now

# Relative Performance
* X is *n* times faster than Y
	* *Performance<sub>X</sub>/Performance<sub>Y</sub>* = *Execution Time<sub>X</sub>/Execution Time<sub>Y</sub>*
* A = 10s, B = 15s
* *Execution Time<sub>A</sub>/Execution Time<sub>B</sub> = 15s/10s = 1.5*
* A is 1.5 times faster than B
* So, how do we measure Execution Time?

# Measuring Execution Time - Elapsed Time
<script src="https://gist.github.com/mjdecker/e95ae3dc206a2f133a64772bfa313b5e.js?file=srcml-build-time.sh"></script>

* Elapsed Time - Total response time including: processing, I/O, OS overhead, idle time
* Determines system performance 

# Measuring Execution Time - CPU Time
* CPU Time - Time spent processing a given job; no I/O, other jobs' shares
* Comprised of user CPU time and system CPU time
* Different programs are affected differently by CPU and system performance

#  CPU Clocking
![clock-cycles]

* Operation of digital hardware governed by a constant-rate clock
* [Clock Rate] - frequency in which a clock generator of a processor generates pulses used to synchronize the operations of its components
	* Normally a [crystal oscillator]
* Clock period - duration of a clock cycle
	* *250ps = 0.25ns = 250x10<sup>-12</sub>s*
* Clock Rate - cycles per second
	* 4.0GHz = 4000MHz = 4.0x10<sup>9</sup>Hz

#  CPU Cycles
![clock-cycles]

# CPU Time
* *CPU Time = CPU Clock Cycles x Clock Cycle Time = CPU Clock Cycles/Clock Rate*
* How do we improve performance?

# CPU Time
* *CPU Time = CPU Clock Cycles x Clock Cycle Time = CPU Clock Cycles/Clock Rate*
* How do we improve performance?
	* Reduce clock cycles something takes
	* Increase the clock rate
* Hardware design often needs to trade between clock rate and cycle count

# CPU Time Example
* Computer A: 2 GHz clock and 10s CPU time
* Want a Computer (B) with 6s CPU time, but it will increase cycles by 1.2
* What Clock Rate does Computer B need?

# CPU Time Example
* Computer A: 2 GHz clock and 10s CPU time
* Want a Computer (B) with 6s CPU time, but it will increase cycles by 1.2
* What Clock Rate does Computer B need?
	* *Clock Rate<sub>B</sub> = Clock Cycles<sub>B</sub>/ CPU Time<sub>B</sub> = 1.2 Clock Cycles<sub>A</sub>/ 6s*
	* *Clock Cycles<sub>A</sub> = CPU Time<sub>A</sub> x Clock Rate<sub>A</sub> = 10s x 2GHz = 20X 10<sup>9</sup>*
	*  *Clock Rate<sub>B</sub> = 1.2 x 20 x 10<sup>9</sup>/6s = 24 x 10<sup>9</sup>/6s = 4GHz*

# Instruction Count
* # of instructions
* Instruction count per program is dependent on the program, assembly language, and compiler

# CPI
* CPI - Cycles per Instruction
* Instruction Set Architecture ([ISA]) - defines the programmable interface of a CPU
	* Reduced Instruction Set Computer ([RISC]) -  most instructions are 1 CPI
	* Complex Instruction Set Computer ([CISC])  -  average instruction > 1 CPI

# CPI Details
* *Clock Cycles = Σ CPI<sub>i</sup> * Instruction Count<sub>i</sup>*
* Weighted average CPI 
	* *CPI = Clock Cycles /  Instruction Count*
* *CPU Time = Instruction Count x CPI x Clock Cycle Time = Instruction Count x CPI / Clock Rate*

# CPI Example
* Same ISA
* Computer A: *Cycle Time = 250ps CPI = 2.0*
* Computer B: *Cycle Time = 500ps CPI = 1.2*
* Which is faster, and by how much?
	*  *CPU Time<sub>A</sub> = Instruction Count X CPI<sub>A</sub> X Cycle Time<sub>A</sub> = I x 2.0 x 250ps = I x 500ps*
	* *CPU Time<sub>B</sub> = Instruction Count X CPI<sub>B</sub> X Cycle Time<sub>B</sub> = I x 1.2 x 500ps = I x 600ps*
	* *Relative Performance = CPU Time<sub>B</sub>/CPU Time<sub>A</sub> =  x 600ps/I x 500ps = 1.2x* 

# Performance Summary
* *CPU Time = Instructions per Program x Clock Cycles per Instruction x Seconds per Clock cycle*

# Discussion
* What trends in processor/CPU have you seen in your lifetime?
