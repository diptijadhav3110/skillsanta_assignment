let num1=parseInt(prompt("enter first num"));
let num2= parseInt(prompt("enter second num"));
let num3= parseInt(prompt("enter third num"));
let largest;

if(num1>=num2 && num1 >= num3){
    largest=num1;
    document.write(largest  + "is the largest num");
}else if(num2>=num1 && num2>=num3){
    largest=num2
    document.write(largest + "is the largest num");

}else {
    largest=num3
    document.write(largest + "is the largest num");

}