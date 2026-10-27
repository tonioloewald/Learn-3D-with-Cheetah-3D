<!--{"order": 13}-->

# Rendering

![](/images/pastedGraphic-537.jpg)

Rendering is the process of creating high quality images from 3D scenes. Cheetah 3D’s rendering algorithm is called “ray tracing” and it’s probably the most widely used rendering algorithm for non-realtime rendering. (Cheetah 3D’s 3D views are rendered using realtime techniques, which are much faster than raytracing but much lower in quality.)

In order to render an image in Cheetah 3D you must already have:

1. created a scene

2. placed a camera such that it is pointing at whatever it is you want to render (you can both move and rotate cameras, and change their field of view to control the composition of a render),

3. ideally you should have lit the scene, placed materials on the models, and so on, but these aren’t compulsory

![](/images/pastedGraphic-538.jpg)

*Cheetah 3D has two toolbar buttons for rendering. The Render button renders a still image of the scene as it currently is, while the Animation button renders an animation of the current selection of frames in the current take.*

To render a scene, simply click one of Cheetah 3D’s two render buttons, depending on whether you want to render a still image or an animated scene.

The **Render Manager** window will immediately appear, showing you the progress of your rendering (along with past renders, possibly including past renders still be processed).

Cheetah 3D divides rendering jobs into square “buckets” to efficiently divide a rendering task among all the CPUs in your computer. (Some Macs have Intel CPUs that support hyperthreading, which makes each CPU look like two CPUs to the operating system, and Cheetah 3D too — on those Macs you’ll see twice as many rendering buckets as you have CPUs.)

**Note**: when rendering an animation, Cheetah 3D will “lock up” the file used to render the image. If you want to keep working on an animation while it’s being rendered you should save a copy of the file and render the copy. This issue does not occur when rendering single frames.

<!-- toc -->
- [The Camera Object](/12.1_The_Camera_Object/)
- [Projection Settings](/12.2_Projection_Settings/)
- [The Render Tag](/12.3_The_Render_Tag/)
- [Dealing with Reality](/12.4_Dealing_with_Reality/)
- [Simple Render Setups](/12.5_Simple_Render_Setups/)
- [Rendering Panoramas](/12.6_Rendering_Panoramas/)
- [Rendering a Sky Box](/12.7_Rendering_a_Sky_Box/)
- [How Raytracing Works](/12.8_How_Raytracing_Works/)
- [Environments](/12.9_Environments/)
- [Rendering Reflected Lights](/12.10_Rendering_Reflected_Lights/)
- [Cartoon Looks](/12.11_Cartoon_Looks/)
- [Render Manager](/12.12_Render_Manager/)
- [Creating your own HDRIs for Image-Based Lighting](/12.13_Creating_your_own_HDRIs_for_Image_Based_Lighting/)
- [Rendering Tricks](/12.14_Rendering_Tricks/)
- [Baking Materials](/12.15_Baking_Materials/)
- [Path Animation](/12.16_Path_Animation/)
- [Tutorial: Animation Basics](/12.17_Tutorial_Animation_Basics/)
- [Forward Kinematics: Robot Arm I](/12.18_Forward_Kinematics_Robot_Arm_I/)
- [Animation Concepts](/12.19_Animation_Concepts/)
- [Inverse Kinematics: Robot Arm II](/12.20_Inverse_Kinematics_Robot_Arm_II/)
<!-- /toc -->
