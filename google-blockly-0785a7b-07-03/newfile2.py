# -*- coding: utf-8 -*-
from pyo import *
import time
import signal
import sys

import OSC
import threading

#------OSC Server-------------------------------------#
receive_address = '127.0.0.1', 9001

# OSC Server. there are three different types of server. 
oscServer = OSC.ThreadingOSCServer(receive_address)

# this registers a 'default' handler (for unmatched messages)
oscServer.addDefaultHandlers()

# define a message-handler function for the server to call.
def printing_handler(addr, tags, stuff, source):
    global capt
    if addr=='/test':
        capt=stuff

oscServer.addMsgHandler("/test", printing_handler)
print "Starting OSCServer"
#st = threading.Thread(target=s.serve_forever)
#st.start()

s = Server(duplex=0,audio="jack").boot()
s.setJackAuto(False, False)
s.start()
s.amp=0
time.sleep(0.2)
s.amp=1
def signal_term_handler(signal, frame):
  print("kill")
  s.amp=0
  time.sleep(0.1)
  s.shutdown()
  sys.exit(0)
signal.signal(signal.SIGTERM, signal_term_handler)


silenceTable = LinTable([(0,0),(8191,0)])
squareTable = SquareTable(1)
sawTable = LinTable([(0,0),(8191,1.0)])
sinTable = HarmTable([0.1])

oscilloList=[None]*10
sampleList=[None]*10
count=0

class Steps():
  def __init__(self):
    self.note = 0
    self._C3_A9l_C3_A9ment = 0
    self.seq0=Seq(time=0.001,seq=[5]).play()
    self.tf0=TrigFunc(self.seq0,self.loop0)
    self.count0=0

  def loop0(self):
    self.id=0
    if self.count0==0:
      try :
        if oscilloList[1]==None:
        	oscilloList.insert(1,Osc(sinTable).out())
        oscilloList[1].freq=capt
        print capt
      except :
        pass
    self.count0+=1
    if self.count0>=len(self.seq0.seq):
      self.count0=0

step=Steps()
while True:
  oscServer.handle_request()

