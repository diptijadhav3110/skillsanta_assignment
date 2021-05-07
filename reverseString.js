let str=prompt("Enter a string")
function reverseString(str){
    
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    if(str === newString){
        document.write("Given string is palindrome<br> " )
    }else{
        document.write("Given string is not palindrome<br> ");
    }
    return newString;
    
}

document.write( "Reverse String is: " + reverseString(str) );



  



