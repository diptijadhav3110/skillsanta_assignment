

let va=0,ve=0,vi=0,vo=0,vu=0;
function countVowel(str) {
    str.toLowerCase();
    
    for(let i=0 ; i < str.length ; i++){
        
        var ch=str.charAt(i);
        if (ch === 'a' ) {
            va++;
        } else if (ch === 'e') {

            ve++;
            
        } else if (ch === 'i') {
            vi++;
            
        }else if (ch === 'o') {
            vo++;
            
        }else if (ch === 'u') {
            vu++;
            
        }else{
           
        }



    }



    
}

// take input
const string = prompt('Enter a string: ');

countVowel(string);

console.log( "A :" + va );
console.log( "E :" + ve );
console.log( "I :" + vi );
console.log( "O :" + vo );
console.log( "U :" + vu );