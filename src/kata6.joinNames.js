const joinNames = namesObj => {
    let string = ""
   namesObj.forEach((person, index)=>{
    console.log(person.name, index)
    if(index ===namesObj.length-1){
        string = string + " & " + person.name
    }
    else if(index>=1){
        string = string + ", " + person.name
    }
    else{
        string = string + person.name
    }
    
    
   })
   console.log(string)
   return string
};

module.exports = joinNames;
