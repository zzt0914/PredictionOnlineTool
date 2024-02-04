# -*- coding: utf-8 -*-
"""WebOnlineTool.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1CgsMFuPTxuYUTU93d8RUFRSpE1R3Skeq
"""

# Commented out IPython magic to ensure Python compatibility.
# Directory
import os
# %cd /content/drive/My Drive/MHC-peptide code + model

# save .fasta to a python dictionary
import sys, re
file = sys.argv[1]
f=open(file,'r') #insert .fasta file here

lines=f.readlines()

hre=re.compile('>(\S+)')
lre=re.compile('^(\S+)$')

gene={}

for line in lines:
        outh = hre.search(line)
        if outh:
                id=outh.group(1)
        else:
                outl=lre.search(line)
                if(id in gene.keys()):
                        gene[id] += outl.group(1)
                else:
                        gene[id]  =outl.group(1)

# put key into 'res'
res = list(gene.keys())

pep = []
# length = input("enter aa length")
length = sys.argv[2]
#length = request.get_json(int(length));
length = int(length)
for x in range(0,len(gene)):
  for i in range(0,len(gene[res[x]])-length+1):
    pep.append(gene[res[x]][i:i+length])

pep

#print(len(pep))

# Commented out IPython magic to ensure Python compatibility.
#One hot encoding
import os, sys, math
import numpy as np
import pandas as pd
# %matplotlib inline
import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sns
import tensorflow as tf

codes = ['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L',
         'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y']

def show_matrix(m):
    #display a matrix
    cm = sns.light_palette("seagreen", as_cmap=True)
    display(m.style.background_gradient(cmap=cm))

def one_hot_encode(seq):
    o = list(set(codes) - set(seq))
    s = pd.DataFrame(list(seq))
    x = pd.DataFrame(np.zeros((len(seq),len(o)),dtype=int),columns=o)
    a = s[0].str.get_dummies(sep=',')
    a = a.join(x)
    a = a.sort_index(axis=1)
    #show_matrix(a)
    e = a.values.flatten()
    return e

#pepe='ALDFEQEMT'
#e=one_hot_encode(pepe)
#e
#print(len(e))

transDb9mer = []
for i in pep:
    e =  one_hot_encode(i)
    transDb9mer.append(e)
#print(len(transDb9mer))

def runML(expr):
  match expr:
    case 'Db,8':
      transDb8mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transDb8mer.append(e)
      model = tf.keras.models.load_model('Db8mer.h5')
      x_val = np.array(transDb8mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Db,9':
      transDb9mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transDb9mer.append(e)
      model = tf.keras.models.load_model('Db9mer.h5')
      x_val = np.array(transDb9mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Db,10':
      transDb10mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transDb10mer.append(e)
      model = tf.keras.models.load_model('Db10mer.h5')
      x_val = np.array(transDb10mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Db,11':
      transDb11mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transDb11mer.append(e)
      model = tf.keras.models.load_model('Db11mer.h5')
      x_val = np.array(transDb11mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Kb,8':
      transKb8mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transKb8mer.append(e)
      model = tf.keras.models.load_model('Kb8mer.h5')
      x_val = np.array(transKb8mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Kb,9':
      transKb9mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transKb9mer.append(e)
      model = tf.keras.models.load_model('Kb9mer.h5')
      x_val = np.array(transKb9mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Kb,10':
      transKb10mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transKb10mer.append(e)
      model = tf.keras.models.load_model('../prediction/Kb10mer.h5')
      x_val = np.array(transKb10mer)
      predictions = model.predict(x_val, verbose=0)
      predictions = np.round(predictions, decimals=4)
      return predictions
    case 'Kb,11':
      transKb11mer = []
      for i in pep:
        e =  one_hot_encode(i)
        transKb11mer.append(e)
      model = tf.keras.models.load_model('Kb11mer.h5')
      x_val = np.array(transKb11mer)
      predictions = model.predict(x_val)
      predictions = np.round(predictions, decimals=4)
      return predictions

# x = runML('Kb,9') # edit here to use different model
alleleinput = sys.argv[3]
x = runML(alleleinput + ',' + str(length))

print(x)



