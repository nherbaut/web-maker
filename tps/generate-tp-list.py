#!/usr/bin/env python3

import os 
import json
import uuid

index={}
index["items-data"]=[]
index["items"]={}
files= sorted([file for file in list(os.walk("."))[0][2] if file[-5:]==".json" and file!="tp-index.json"])
for file_tp in files:
  with open(file_tp) as tp:
    tp_name=os.path.splitext(file_tp)[0]
    json_tp=json.load(tp)[0]
    json_tp["title"]=tp_name.replace("_"," ")
    index["items-data"].append({"Key":tp_name,"Value":json_tp})
    index["items"][tp_name]=True
with open("tp-index.json","w+") as f:
  f.write(json.dumps(index))

