(function(Scratch) {
    'use strict';
    class Extension {
        constructor() {
            this.currentScript = "";
            this.scriptOutput = "";
        }

      getInfo() {
        return {
          id: "dumosEval",
          name: "Dumos JS",
          "color1": "#c3d100",
            "color2": "#000000",
            "color3": "#000000",
          blocks: [
            {
              opcode: 'runJSCommand',
              text: 'Run the current script',
              blockType: Scratch.BlockType.COMMAND
            },
            {
                opcode: 'downloadAndRun',
                text: "Download and run script from [URL]",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    URL: {
                        type: Scratch.ArgumentType.STRING
                    }
                }
            },
            {
                opcode: 'clearScript',
                text: 'Clear the current script',
                blockType: Scratch.BlockType.COMMAND
            },
            {
                opcode: 'addLineScript',
                text: 'Add [TEXT] to new line of script',
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'alert("Hello World!")'
                    }
                }
            },
            {
                opcode: 'getscriptoutput',
                text: 'get script output',
                blockType: Scratch.BlockType.REPORTER
            },
            {
                opcode: 'getscript',
                text: 'get script',
                blockType: Scratch.BlockType.REPORTER
            }
          ]
        };
      }
  
      runJSCommand() {
        this.scriptOutput = eval(this.currentScript);
      }

      clearScript() {
        this.currentScript = "";
      }

      addLineScript(args) {
        this.currentScript += args.TEXT + "\n";
      }

      getscriptoutput() {
        return this.scriptOutput;
      }

      getscript() {
        return this.currentScript;
      }

      downloadAndRun(args) {
        return new Promise((resolve, reject) => {
            let newscript = document.createElement("script");
            newscript.onload = function() { //instead of using arrow functions, im using classic functions cuz idk if arrow functions work with these
                resolve()
            }
            newscript.onerror = function() {
                reject()
            }
            newscript.src = args.URL;
            document.body.appendChild(newscript);
        });
      }
    }
  
    Scratch.extensions.register(new Extension());
})(Scratch);
