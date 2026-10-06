---
title: "Array"
layout: notes
---

[Array]: https://en.wikipedia.org/wiki/Array_(data_structure)
[C-String]: https://en.wikipedia.org/wiki/C_string
[String Literal]: https://en.wikipedia.org/wiki/String_literal

# [Array]
* Homogeneous collection of elements
* Continuous block of memory where each element referenced by a base address and an offset
* $memory_address = base_address + offset * sizeof(element)$

# Array Example
$short array = {16, 127, 3, 7, 42};$
$array[3] = 0xFF0 + 3 * 2$

|   pos |  4  |  3  |  2  |  1  |  0  |
|------:|:---:|:---:|:---:|:---:|:---:|
|  array|  42 |  7  |  3  | 127 |  16 |
|address|0xFF8|0xFF6|0xFF4|0xFF2|0xFF0| 

# [C-String] (aka [String Literal])
* A sequence of characters stored consecutively in memory (i.e., an array of characters), terminated with a null-character
