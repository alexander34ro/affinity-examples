![Affinity 2-AEx 1 - Local ML (1)](https://user-images.githubusercontent.com/16760229/88487933-da68ec80-cf89-11ea-92c7-5c10d293c3f1.png)

_Figure 1 - Localized communication between independent components_

Figure 1 demonstrates a basic but relatable example of using the Affinity Platform. It consists of three custom components running on the same machine and doing the extraction, pre-processing, and regression parts of an ML algorithm, with the help of built-in Replicator and Logger components.

Custom components for directing the flow of data, like the Replicator, are designed to have minimal impact on performance, using low-level communication standards to pass data. As a result, the Replicator can handle a theoretically unlimited number of output signals. In this example, it is used to send the refined data to both an emotion analyzer and a logger, allowing the direct comparison between extracted features and detected emotions.
