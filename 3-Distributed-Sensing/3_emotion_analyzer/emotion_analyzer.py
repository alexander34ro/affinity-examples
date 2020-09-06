import os
import sys
import json
import subprocess
import time


def f():
    data = json.loads(sys.argv[1])
    accelerometer_x = float(data["accelerometer"][0])
    accelerometer_y = float(data["accelerometer"][1])
    accelerometer_z = float(data["accelerometer"][2])
    light = int(data["light"][0])

    emotion = "Sad"
    if light > 30:
      emotion = "Happy"
    if light > 50:
      emotion = "Excited"
    if accelerometer_x > accelerometer_y:
      emotion = "Angry"
    if accelerometer_y > accelerometer_z:
      emotion = "Scared"
    return emotion


if __name__ == '__main__':
    print(json.dumps(f()))
