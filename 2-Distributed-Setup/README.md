![Affinity 2-AEx 2 - Distributed ML (1)](https://user-images.githubusercontent.com/16760229/88487938-f2d90700-cf89-11ea-8a21-1896459fbb56.png)

_Figure 2 - Distributed parallel sensing systemrunning on devices with limited resources_

This is a complex but still controlled usage of the Affinity Platform, consisting of a smartphone or a wearable sensing device connected to a server, as represented in Figure 2.

Unlike the previous example, this time, the sensor data extraction phase is happening on a smartphone with limited resources, and the computationally intensive emotion recognition phase is offloaded to a server. This example shows how easy it can be to modify components designed to communicate locally and extend them to work over the network. 
  
Moreover, transmitting the data to a logger is now done in parallel with the help of another component. This is another benefit of using dataflow programming when assembling these systems. Actions that require multiple streams of data can be trivially parallelized.
