// Question  2- reduceStrings
function reduceString(str){
 let frequency=1;
 let newStr="";
 for(let i=0;i<str.length;i++){
    if(str[i]==str[i+1]){
        frequency++;
    }else{
     newStr+=str[i]+frequency;
     frequency=1;
    }
}
return newStr;
}
module.exports = reduceString;