---
title: "Sequential Logic"
layout: notes
---

[Sequential Logic]: https://en.wikipedia.org/wiki/Sequential_logic

[SR Latch]: https://en.wikipedia.org/wiki/Flip-flop_(electronics)#SR_NOR_latch
[D Latch]: https://en.wikipedia.org/wiki/Flip-flop_(electronics)#Gated_D_latch
[Flip Flop]: https://en.wikipedia.org/wiki/Flip-flop_(electronics)

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

# [SR Latch] - Table
* X means don't care
* $$\overline{Q} left off for simplicity

|  S  |  R  |  Q  |   Action  |
|:---:|:---:|:---:|:---------:|
|  0  |  0  |  Q  | Hold state|
|  0  |  1  |  0  |   Reset   |
|  1  |  0  |  0  |    Set    |
|  1  |  1  |  X  |Not allowed|

# [SR Latch] - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/sr-latch-ebfa584a-c5b1-41ae-8d13-192ccedf254a/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [D Latch]
* SR-Latch is awkward because of the behavior when S and R are set
* S and are used to dictate both:
	* What the state should be
	* When the state should change
* D-Latch separates these:
	* D - controls what the state should be
	* CLK - the clock controls when the state should change

# [D Latch] - Table
* $$\overline{Q} left off for simplicity

| CLK |  D  |  Q  |   Action  |
|:---:|:---:|:---:|:---------:|
|  0  |  X  |  Q  | Hold state|
|  1  |  0  |  0  |   Reset   |
|  1  |  1  |  1  |    Set    |

# [D Latch] - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/d-latch-e4db526c-f682-4c20-81e8-23eb51005ec4/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [Flip Flop]
* D Latch is transparent or level-sensitive
	* Transparent - while $$CLK=1$$ data flows through, setting Q
	* Opaque - while $$CLK=0$$ data is blocked, retaining old Q
* Want to be able to update only at specific instances, e.g.,
	* When CLK transitions from 0 to 1 (rising edge)
	* When CLK transitions from 1 to 0 (falling edge)
* D [Flip Flop] is built from two D Latches
	* master - transparent when $$CLK=0$$, opaque when $$CLK=1$$
	* slave - opaque when $$CLK=0$$, transparent when $$CLK=1$$
	* $$Q_{master}$$ propogates to $$Q_{slave}$$ when $$CLK$$ transitions form $$0$$ to $$1$$
	* Otherwise, $$Q$$ (i.e., $$Q_{slave}$$) remains the same

# [Flip Flop] - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/flip-flop-a88e5beb-e251-48c6-8904-aad5ab63d6ba/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>
