/*
//------------ Minium -------------

 function min(a,b){
    if(a>b){
        return b;
    }else if(a<b) {
        return a;
    }else{
        return 'equal';
    };
 }

 console.log(min(10,10));
 */
 /*
 //------------ Recursion --------------

 function isEven(x){
    if(x<0){
        x = x*-1
    }
    if(x === 0){
        return true;
    }else if(x === 1){
        return false;
    }else{
       return isEven(x-2);
    }
 }

 console.log(isEven(-74));
*/
/*
//----------- Bean Counting ----------------

function countBs (word){
    let count = 0;
    for(let i= 0; i< word.length; i++){
        if(word[i] === 'B'){
            count++
        }
    }
    return count;
}

console.log(countBs('BbC'));

function countChars(word, char){
    let count = 0;
    for(let i= 0; i< word.length; i++){
        if(word[i] === char){
            count++
        }
    }
    return count;
}

console.log(countChars('kakkerlak', 'k'));
*/