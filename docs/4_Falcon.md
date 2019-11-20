# Falcon

Cheetah’s new renderer is a _unidirectional path tracer_. The key takeaway is that it’s a **physically based renderer** (PBR) rather than a ray tracer (like Cheetah’s old renderer, which is still available should you wish to use it). Because of this, it takes longer to render a final image than Cheetah 3D’s old renderer for simple things, but it _correctly models_ a lot of lighting effects that are “faked” by the old renderer at no additional cost in render or setup time.

