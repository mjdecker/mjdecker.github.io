---
title: "Defining Performance"
layout: notes
---


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
* *Execution Time<sub>A</sub>/Execution Time<sub>B</sub> = 15s/10s = 1.5
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

# 