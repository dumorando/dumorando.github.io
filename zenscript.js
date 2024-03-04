// ZenScript.JS
// Made by Dumo178

function zen(code) {
    let compiledlines = [];
    let font = "Arial";
    let arraycode = code.split("\n");
    for (let itm of arraycode) {
        let wordarr = itm.split(" ");
        let base = wordarr[0];
        let argument = wordarr.slice(1).join(" ");
        switch (base) {
            case "title":
                compiledlines.push(`<title>${argument}</title>`);
                break;
            case "heading":
                compiledlines.push(`<h1 style="font-family: ${font};">${argument}</h1>`);
                break;
            case "text":
                compiledlines.push(`<p style="font-family: ${font};">${argument}</p>`);
                break;
            case "font":
                font = argument;
                break;
            case "icon":
                compiledlines.push(`<link rel="icon" href="${argument}" type="image/x-icon"/>`);
                break;
            case "main":
                compiledlines.push("<html>");
                break;
            case "endmain":
                compiledlines.push("</html>");
                break;
            case "init":
                compiledlines.push("<head>");
                break;
            case "initlua":
                compiledlines.push("<script src=\"https://dumo.is-a.dev/lua.vm.js\"></script>");
                break;
            case "endinit":
                compiledlines.push("</head>");
                break;
            case "body":
                compiledlines.push("<body>");
                break;
            case "endbody":
                compiledlines.push("</body>");
                break;
            case "javascript":
                compiledlines.push("<script>");
                break;
            case "endjavascript":
            case "endlua":
                compiledlines.push("</script>");
                break;
            case "lua":
                compiledlines.push("<script type=\"text/lua\">");
                break;
            case "div":
                compiledlines.push("<div>");
                break;
            case "enddiv":
                compiledlines.push("</div>");
                break;
            case "tb":
                compiledlines.push("<hr>");
                break;
            case "lb":
                compiledlines.push("<br>");
                break;
            default:
                compiledlines.push(itm);
                break;
        }
    }
    let compiledtext = compiledlines.join("\n");
    return compiledtext;
}
