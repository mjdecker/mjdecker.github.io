---
title: "Building Circuits to Solve Problems"
layout: notes
---

[Decoder]: https://en.wikipedia.org/wiki/Binary_decoder
[Multiplexer]: https://en.wikipedia.org/wiki/Multiplexer

# Building Digital Logic Circuits
* Digital logics circuits are designed to solve some problem
* We represent that problem as Truth Tables and/or Boolean equations
* Those Truth Table/Boolean equations become the digital logic needed to solve that problem
* Here we will first look at two common ones
	* [Decoder]
	* [Multiplexer]

# [Decoder]
* A combinational logic circuit that converts an n coded binary input to a maximum of 2<sup>n</sup> unique outputs

# 2-bit Decoder - Truth Table

|Input-0|Input-1|Output-0|Output-1|Output-2|Output-3|
|:---:|:---:|:---:|:---:|:---:|:---:|
|0|0|1|0|0|0|
|0|1|0|1|0|0|
|1|0|0|0|1|0|
|1|1|0|0|0|1|

# 2-bit Decoder - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/2-bit-decorder/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# 2-bit Decoder - Digital Logic Builtin

<div>
<iframe src="https://circuitverse.org/users/479923/projects/decoder-66ccd93d-9c24-49bf-b991-7a48c9fa1782/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [Multiplexer]
* Selects between several input signals and forwards the selected input to a single output line (aka selector)

# 2-bit Multiplexer

|Select|A|B||Output|
|:---:|:---:|:---:|:---:|
|1|1|1|1|
|1|1|0|1|
|1|0|1|0|
|1|0|0|0|
|0|1|1|1|
|0|1|0|0|
|0|0|1|1|
|0|0|0|0|

# 2-bit Multiplexer - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/2-bit-multiplexer-7d3fd164-a701-45a5-9a69-12c2398228c1/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# 2-bit Multiplexer - Digital Logic Builtin

<div>
<iframe src="https://circuitverse.org/users/479923/projects/multiplexer-ad0ed0e6-77f3-4cee-b44f-560b2dcb7580/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>
