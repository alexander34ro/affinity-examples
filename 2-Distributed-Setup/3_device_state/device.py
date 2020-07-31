import os
import sys
import json
import subprocess
import time


def f():
    data = json.loads(sys.argv[1])
    charging = data["charging"]
    level = data["level"]
    
    status = "CRITICAL"
    if level > 25:
      status = "LOW"
    if level > 50:
      status = "GOOD"
    if charging:
      status = "CHARGING"
    return status


if __name__ == '__main__':
    print(json.dumps(f()))
