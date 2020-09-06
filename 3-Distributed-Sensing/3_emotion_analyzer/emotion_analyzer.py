import os
import sys
import json
import subprocess
import time


def f():
    data = json.loads(sys.argv[1])
    accelerometer_x = data["accelerometer"][0]
    accelerometer_y = data["accelerometer"][1]
    accelerometer_z = data["accelerometer"][2]
    light = data["light"][0]
    
    print(accelerometer_x)
    print(accelerometer_y)
    print(accelerometer_z)
    print(light)

    accelerometer_x = int(accelerometer_x)
    accelerometer_y = int(accelerometer_y)
    accelerometer_z = int(accelerometer_z)
    light = int(light)

    print(accelerometer_x)
    print(accelerometer_y)
    print(accelerometer_z)
    print(light)

    emotion = "Sad"
    if light > 15:
      emotion = "Happy"
    if light > 20:
      emotion = "Excited"
    if accelerometer_x > accelerometer_y:
      emotion = "Angry"
    if accelerometer_y > accelerometer_z:
      emotion = "Scared"
    return emotion


if __name__ == '__main__':
    print(json.dumps(f()))
