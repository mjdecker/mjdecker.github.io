---
title: "Bitwise Operations"
layout: notes
---

[Bitwise Operation]: https://en.wikipedia.org/wiki/Bitwise_operation
[Truth Table]: https://en.wikipedia.org/wiki/Truth_table

# [Bitwise Operation]
> An operation that operates on bit pattern (aka bit string, a bit array, or a binary numeral) at the level of its individual bits

* ~ NOT - bitwise negation
* & AND - bitwise logical and
* \| OR - bitwise logical inclusive or
* ^ XOR - bitwise logical exclusive or
* Bit shifts (coming later)

# [Truth Table]
* Definition: mathematical table/chart for a logical expression that displays all possibly combinations and their corresponding results
* We will use truth tables how these operators act on a single bit
* Apply to each corresponding bit in a bit pattern to perform the whole operation

# ~ NOT

| p   | ~p  |
|:---:|:---:|
|  T  |  F  |
|  F  |  T  |

# & AND

| p   |  q  |p & q|
|:---:|:---:|:---:|
|  T  |  T  |  T  |
|  T  |  F  |  F  |
|  F  |  T  |  F  |
|  F  |  F  |  F  |

# | OR

| p   |  q  |p \| q|
|:---:|:---:|:----:|
|  T  |  T  |   T  |
|  T  |  F  |   T  |
|  F  |  T  |   T  |
|  F  |  F  |   F  |

# ^ XOR

| p   |  q  |p ^ q|
|:---:|:---:|:---:|
|  T  |  T  |  F  |
|  T  |  F  |  T  |
|  F  |  T  |  T  |
|  F  |  F  |  F  |
