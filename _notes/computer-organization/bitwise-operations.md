---
title: "Bitwise Operations"
layout: notes
---

[Bitwise Operation]: https://en.wikipedia.org/wiki/Bitwise_operation
[Truth Table]: https://en.wikipedia.org/wiki/Truth_table
[Bit shifts]: https://en.wikipedia.org/wiki/Bitwise_operation#Bit_shifts

# [Bitwise Operation]
> An operation that operates on bit pattern (aka bit string, a bit array, or a binary numeral) at the level of its individual bits

* $~$ NOT - bitwise negation
* $&$ AND - bitwise logical and
* $\|$ OR - bitwise logical inclusive or
* $^$ XOR - bitwise logical exclusive or
* Bit shifts
	* $<<$ left shift
	* $>>$ right shift

# [Truth Table]
* Definition: mathematical table/chart for a logical expression that displays all possibly combinations and their corresponding results
* We will use truth tables how these operators act on a single bit
* Apply to each corresponding bit in a bit pattern to perform the whole operation

# ~ NOT

| p   | ~p  |
|:---:|:---:|
|  1  |  0  |
|  0  |  1  |

# & AND

| p   |  q  |p & q|
|:---:|:---:|:---:|
|  1  |  1  |  1  |
|  1  |  0  |  0  |
|  0  |  1  |  0  |
|  0  |  0  |  0  |

# | OR

| p   |  q  |p \| q|
|:---:|:---:|:----:|
|  1  |  1  |   1  |
|  1  |  0  |   1  |
|  0  |  1  |   1  |
|  0  |  0  |   0  |

# ^ XOR

| p   |  q  |p ^ q|
|:---:|:---:|:---:|
|  1  |  1  |  0  |
|  1  |  0  |  1  |
|  0  |  1  |  1  |
|  0  |  0  |  0  |

# [Bit shifts]
* Digits are moved (i.e., shifted) left or right
* Each shift:
	* Left (<<) is a $* 2$
	* Right (>>) is a $/ 2$

# [Bit shifts] - Procedures
* Shifted-out bits are discarded
* Differences in what is done with shifted-in bits
* Logical - best for unsigned numbers
	* left & right - shift-in zero
* Arithmetic (AKA sticky shift) - best for signed numbers
	* left - shift-in zero
	* right - shift-in sign-bit

# Logical and Arithmetic Left Shift
$0xB5 = 181 = -75$

|      |     |     |     |     |     |     |     |     |
|:----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   a  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |
|a << 1|  0  |  1  |  1  |  0  |  1  |  0  |  1  |  0  |
|a << 2|  1  |  1  |  0  |  1  |  0  |  1  |  0  |  0  |
|a << 3|  1  |  0  |  1  |  0  |  1  |  0  |  0  |  0  |

# Logical Right Shift
$0xB5 = 181 = -75$

|      |     |     |     |     |     |     |     |     |
|:----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   a  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |
|a >> 1|  0  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |
|a >> 2|  0  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |
|a >> 3|  0  |  0  |  0  |  1  |  0  |  1  |  1  |  0  |

# Arithmetic Right Shift
$0xB5 = 181 = -75$

|      |     |     |     |     |     |     |     |     |
|:----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   a  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |
|a >> 1|  1  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |
|a >> 2|  1  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |
|a >> 3|  1  |  1  |  1  |  1  |  0  |  1  |  1  |  0  | 
