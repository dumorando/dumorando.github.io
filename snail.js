// make the div for the ui section
// reference vm.runtime.renderer.canvas

if (CurrentUI) {
    CurrentUI = null;
}

let snailjsdiv = null;

if (!document.getElementById("SNAILJS_UICANVAS")) {
    snailjsdiv = document.createElement("div");
    snailjsdiv.id = "SNAILJS_UICANVAS";
} else {
    snailjsdiv = document.getElementById("SNAILJS_UICANVAS");
}

class UIManagement {
    constructor() {
        this._div = snailjsdiv;
        this.Realign();
    }

    Realign() {
        this._div.style = `position: absolute;left: 0px;width: 100%;height: 100%;top: 0px;z-index: 1000;`
        if (!vm.runtime.renderer) return;
        vm.runtime.renderer.canvas.parentElement.prepend(this._div);
    }
}

var CurrentUI = new UIManagement();
setInterval(() => CurrentUI.Realign(), 100)

window.snailjs = {
    loadScriptPromise: (url) => {
        return new Promise((resolve, reject) => {
            let newscript = document.createElement("script");
            newscript.onload = function() { //instead of using arrow functions, im using classic functions cuz idk if arrow functions work with these
                resolve()
            }
            newscript.onerror = function() {
                reject()
            }
            newscript.src = url;
            document.body.appendChild(newscript);
        });
    },
    ui: {
        addElement: (element) => {
            CurrentUI._div.appendChild(element);
            CurrentUI.Realign();
        },
        getParent: () => {
            return CurrentUI._div;
        },
        clearScreen: () => {
            CurrentUI._div.innerHTML = "";
        }
    }
}
