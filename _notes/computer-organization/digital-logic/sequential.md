---
title: "Sequential Logic"
layout: notes
---

[Sequential Logic]: https://en.wikipedia.org/wiki/Sequential_logic

[SR Latch]: https://en.wikipedia.org/wiki/Flip-flop_(electronics)#SR_NOR_latch

# [Sequential Logic]
* Depend on current and previous values, forming memory
* Used to build:
	* Latches
	* Flip-flops
	* Register files

# [SR Latch]
* A sequential circuit consisting of two NOR gates with the following inputs and outputs
	* Output: $$Q$$ - Stored state
	* Output: $$\overline{Q}$$
	* Input: $$S$$ - *Set* output $$Q$$ ($$Q = 1$$)
	* Input: $$R$$ - *Reset* output $$Q$$ ($$Q = 0$$)

# [SR Latch] - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/sr-latch-ebfa584a-c5b1-41ae-8d13-192ccedf254a/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [D Latch] - Digital Logic