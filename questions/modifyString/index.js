// Question 1- modifyStrings  

function modifyStrings(str){
    let converter={a:4,e:3,i:1,o:0,s:5,t:7,d:5};

  for(let i=0;i<str.length;i++){
      if(converter[str[i].toLowerCase()]){
          str[i]=converter[str[i].toLowerCase()];
      }
  }
  return str;
}

module.exports = modifyStrings;

