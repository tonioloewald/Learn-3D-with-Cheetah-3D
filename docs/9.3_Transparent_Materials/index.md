<!--{"parent": "9_Materials.md", "order": 3}-->

## Transparent Materials

In simplistic terms, a transparent material is any material whose transparent color is something other than black in some places. Note: as soon as a material’s transparent color becomes non-black, rendering it becomes significantly slower.

### Refraction

Refractive Indices of various materials (source: http://en.wikipedia.org/wiki/List\_of\_refractive\_indices):

![Table of refractive indices, from vacuum 1 and air 1.000293 to water 1.333, crown glass 1.50–1.54, and diamond 2.419](/images/pastedGraphic-294.jpg)

### Fresnel Effect

![Glass elephant without fresnel, its body tinted flat blue with little reflection](/images/pastedGraphic-295.jpg)

![Same glass elephant with fresnel on, clearer body and strong reflections of the checkered room](/images/pastedGraphic-296.jpg)

_**Top**: “glass” with transparency set to light grey and reflection set to black. **Bottom**: as above, but with the fresnel box checked._

The Fresnel effect simulates the behavior of real-world materials by adjusting the transmission and reflection characteristics of a material based on the viewing angle. In general, the simplest way to produce a realistic transparent material is to check the fresnel box and set its refractive index correctly.

### The Dielectric Shader

![Glass elephant made with the Material shader, refracting the checkered room](/images/pastedGraphic-297.jpg)

![Glass elephant made with the Dielectric shader, refracting and reflecting the checkered room](/images/pastedGraphic-298.jpg)

_**Top**: material shader “glass” (diffuse . **Bottom**: dielectric “glass”. Same transparency and refractive index. Very similar, but not quite identical._

> **Note:** the caption above is truncated mid-sentence (“(diffuse .”); the missing text needs restoring. <!-- TODO editorial -->

The Dielectric Shader is designed to make creating realistic transparent materials easy. Anything you can do in the Dielectric Shader you can do in the Material Shader (with extra work and more control), but the Dielectric Shader is simpler to work with, and produces good results.

Unlike the Metal shader, the dielectric shader doesn’t offer you any capabilities that the Material shader lacks, although its output is not exactly the same as a Material shader with the “obvious” equivalent inputs.

> **Note:** needs checking in Cheetah 3D 8.1.1: in 8.1.1 the Dielectric shader has an Absorption and a Shadow parameter that the Material shader lacks, and its transparency color is a connectable input; does that change the statements here and under Soap Bubbles? <!-- TODO verify -->

#### Soap Bubbles

![Render of iridescent soap bubbles of various sizes floating in a room](/images/pastedGraphic-299.jpg)

![Node graph: State I·N and Turbulence into Add, then Modulo and a pastel Gradient feeding the Material's reflection](/images/pastedGraphic-300.jpg)

The problem with the dielectric shader is that it doesn’t let you vary the transparency or reflection colors. Here I’ve created a soap-bubbly color effect by adding the I•N channel of the State node and a Turbulence procedural texture, then used a Modulo node to wrap the values around (so 1.1 becomes 0.1) and fed this into a gradient of pastel colors that starts and ends with the same color and used this as the reflection color. The other settings are simply tweaks to get the right reflectiveness.

The bubbles themselves are icosahedrons with a shell modifier (to give them a thickness of 0.02) and 4 levels of Stam-Loop subdivision. (Stam-Loop is optimized for triangulated meshes, and an icosahedron is a triangulated mesh.)

#### Liquid in a Glass

![Render of a shot glass of amber liquid on a grey surface](/images/DraggedImage-92.jpg)

![Empty clear glass beside the separate amber liquid object, its rounded top bulging above the rim line](/images/DraggedImage-93.jpg)

_**Above**: a render of a shot glass. **Below**: the glass and the liquid inside it rendered apart to show how the scene was assembled. The liquid is slightly larger than the interior of the glass to avoid rendering errors. (Note that C3D’s caustics are not correctly picking up the color of the liquid.)_

To render liquid in a glass the best option turns out to be to model the liquid as an object that is slightly larger than the glass containing it. It’s as simple as that. 

**Note**: in earlier editions of this book I incorrectly stated that the liquid should be slightly _smaller_ than the container. It turns out that the most realistic-looking results are obtained by making the liquid slightly larger than the container.

> **AI draft:** generated from the Cheetah 3D 8.1.1 manual; not yet reviewed by the author. <!-- TODO review AI draft -->

You’ll generally want to increase the ray depth for that scene. With the Cheetah renderer this is **Max. ray depth** (in the **Other** section of the renderer settings); with Falcon, raise **Specular bounces** and **Transparency depth** (in the **Ray depth (bounces)** section).

> *End of AI draft.* <!-- /AI draft -->

#### Bubbles in Water

![Render of a glass of water with small air bubbles suspended in it](/images/DraggedImage-94.jpg)

![Close-up of the bubbles near the bottom of the water glass](/images/DraggedImage-95.jpg)

To render bubbles in water you might think you could make the bubbles out of an “air” material that had a refractive index of 1.0, but Cheetah 3D’s renderer doesn’t do what you’d expect and the bubbles essentially disappear. The bubbles need to be holes in the geometry of the water. To accomplish this I made the bubbles out of spheres with all their polygons flipped (so the sphere “faces” inward), made a particle system of the bubbles, and then converted the particle system to a mesh (using **Tools \> Particle \> Particle To Polygon**). I then imported the resulting mesh into the water mesh.
