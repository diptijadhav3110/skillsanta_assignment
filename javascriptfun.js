function javaScript(innerFunction){
    document.write("Outer Function is calling...<br>");
}

function innerFunction(javaScript){
    document.write("Inner function is calling <br>");
}

//javaScript(innerFunction);
innerFunction();