const characters = [
    {name: "◆◆◆ ◆◆◆", age: 14},
    {name: "*** ***", age: 100},
    {name: "??? ???", age: 5},
  ];
  
  // Please complete the for statement.
  for (let i=0; i<characters.length; i++) {
    console.log("--------------------");
    
    // Please define the constant "character".
    const character=characters[i];
    
    // Please output "My name is ~~."
    // Make sure that "~~" corresponds to the name property of the constant "character".    
    console.log(`My name is ${character.name}.`);
    
    // Please output "I'm ## years old."
    // Make sure that "##" corresponds to the age property of the constant "character".       
    console.log(`I'm ${character.age} years old.`);
    
  }