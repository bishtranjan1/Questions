// Question 1- modifyStrings  

function modifyString(str){
 let converter={a:4,e:3,i:1,o:0,s:5,t:7,d:5};
 let modifiedStr=""

for(let i=0;i<str.length;i++)
    modifiedStr+= (converter[str[i].toLowerCase()]!=undefined)? converter[str[i].toLowerCase()]: str[i];
  
  return modifiedStr;
}

module.exports = modifyString;

