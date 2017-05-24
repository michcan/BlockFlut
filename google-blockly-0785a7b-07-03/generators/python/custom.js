// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('pyo');

Blockly.Python['moncustom'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'trala\n'+value_name;
  return code;
};

Blockly.Python['pitchtofrequ'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "(2**((("+value_name+"*1.0)-69)/12))*440";
  //var code = (value_name-69);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['attendre'] = function(block) {
  var value_duree = Blockly.Python.valueToCode(block, 'duree', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pass \n';
  return code;
};

Blockly.Python['hz'] = function(block) {
  var value_synthid = Blockly.Python.valueToCode(block, 'synthID', Blockly.Python.ORDER_ATOMIC);
  var value_frequ = Blockly.Python.valueToCode(block, 'Frequ', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 
  'if oscilloList['+value_synthid+']==None: \n'
  +'\toscilloList.insert('+value_synthid+',Osc(sinTable).out())\n' 
  +'oscilloList['+value_synthid+'].freq='+value_frequ+"\n";
  return code;
};
