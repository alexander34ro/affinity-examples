import os
import sys
import json
import subprocess
import time


def f():
    data = json.loads(sys.argv[1])
    accelerometer = data["accelerometer"]
    light = data["light"]

    print(accelerometer)
    print(light)
    print(light[0])
    
    status = "CRITICAL"
    if light > 25:
      status = "LOW"
    if light > 50:
      status = "GOOD"
    if accelerometer:
      status = "CHARGING"
    return status


if __name__ == '__main__':
    print(json.dumps(f()))
