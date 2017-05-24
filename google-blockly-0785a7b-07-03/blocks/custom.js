Blockly.Blocks['moncustom'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("valeur");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hz'] = {
  init: function() {
    this.appendValueInput("synthID")
        .setCheck("Number")
        .appendField("Mettre le synth n°");
    this.appendValueInput("Frequ")
        .setCheck("Number")
        .appendField("à");
    this.appendDummyInput()
        .appendField("Hz");
    this.appendValueInput("durée")
        .setCheck("Number")
        .appendField("pendant");
    this.appendDummyInput()
        .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pitchtofrequ'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Donner la fréquence en Hz de la note n°");
    this.appendDummyInput();
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['attendre'] = {
  init: function() {
    this.appendValueInput("durée")
        .setCheck(null)
        .appendField("attendre pendant");
    this.appendDummyInput()
        .appendField("ms");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
