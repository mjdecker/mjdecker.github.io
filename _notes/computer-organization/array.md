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
* $memory$\_$address = base$\_$address + offset * sizeof(element)$

# Array Example

|   pos |  0  |  1  |  2  |  3  |  4  |
|------:|:---:|:---:|:---:|:---:|:---:|
|  array|  42 |  7  |  3  | 127 |  16 |
|address|0xFF0|0xFF2|0xFF4|0xFF6|0xFF8| 

* $short\, array = {42, 7, 3, 127, 16};$
* $array[3] = 127 = 0xFF0 + 3 * 2$


# [C-String] (aka [String Literal])
A sequence of characters stored consecutively in memory (i.e., an array of characters), terminated with a null-character

|   pos |  0  |  1  |  2  |  3  |  4  |  5  |
|------:|:---:|:---:|:---:|:---:|:---:|:---:|
|"Hello"|  H  |  e  |  l  |  l  |  o  | \0  |
|address|0xFF0|0xFF1|0xFF2|0xFF3|0xFF4|0xFF5|
