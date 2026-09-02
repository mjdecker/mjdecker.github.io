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
	* $$Passenger Capacity$$
	* $$Cruising Range$$
	* $$Cruising Speed$$
	* $$Passenger Throughput - Passenger Capacity * Cruising Speed$$

# Some Performance Metrics for Computer Architecture
* Response Time - how long it takes to do a task
* Throughput - Total work done per unit of time, e.g., tasks per hour
* And how are Response Time/Throughput affected by:
	* Replacing a processor with a faster one?
	* Adding more processors?
* We will focus on Response Time for now

# Relative Performance
* X is *n* times faster than Y
	* $$\frac{Performance_X}{Performance_Y} = \frac{Execution Time_X}{Execution Time_Y}$$
* A = 10s, B = 15s
* $$\frac{Execution Time_A}{Execution Time_B} = \frac{15s}{10s} = 1.5$$
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
	* $$250ps = 0.25ns = 250 * 10^-12s$$
* Clock Rate - cycles per second
	* $$4.0GHz = 4000MHz = 4.0 * 10^9Hz$$

#  CPU Cycles
![clock-cycles]

# CPU Time
* $$CPU Time = CPU Clock Cycles * Clock Cycle Time = \frac{CPU Clock Cycles}{Clock Rate}$$
* How do we improve performance?

# CPU Time
* $$CPU Time = CPU Clock Cycles * Clock Cycle Time = \frac{CPU Clock Cycles}{Clock Rate}$$
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

# Computer B Clock Rate
* $$Clock Rate_B = \frac{Clock Cycles_B}{CPU Time_B} = \frac{1.2 * Clock Cycles_A}{6s}$$
* $$Clock Cycles_A = CPU Time_A * Clock Rate_A = 10s * 2GHz = 20 * 10^9$$
* $$Clock Rate_B = \frac{1.2 * 20 * 10^9}{6s} = \frac{24 * 10^9}{6s} = 4GHz$$

# Instruction Count
* \# of instructions
* Instruction count per program is dependent on the program, assembly language, and compiler

# CPI
* CPI - Cycles per Instruction
* Instruction Set Architecture ([ISA]) - defines the programmable interface of a CPU
	* Reduced Instruction Set Computer ([RISC]) -  most instructions are 1 CPI
	* Complex Instruction Set Computer ([CISC])  -  average instruction > 1 CPI

# CPI Details
* $$Clock Cycles = Σ CPI_i * Instruction Count_i$$
* Weighted average CPI 
	* $$CPI = Clock Cycles /  Instruction Count$$
* $$CPU Time = Instruction Count x CPI x Clock Cycle Time = Instruction Count x CPI / Clock Rate$$

# CPI Example
* Same ISA
* Computer A: $$Cycle Time = 250ps CPI = 2.0$$
* Computer B: $$Cycle Time = 500ps CPI = 1.2$$
* Which is faster, and by how much?
	* $$CPU Time_A = Instruction Count * CPI_A * Cycle Time_A = I * 2.0 * 250ps = I * 500ps$$
	* $$CPU Time_B = Instruction Count * CPI_B * Cycle Time_B = I * 1.2 * 500ps = I * 600ps$$
	* $$Relative Performance = CPU Time_B/CPU Time_A = \frac{I * 600ps}{I * 500ps} = 1.2x$$

# Performance Summary
* $$CPU Time = Instructions per Program * Clock Cycles per Instruction * Seconds per Clock cycle$$

# Discussion
* What trends in processor/CPU have you seen in your lifetime?
