let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(name){  
  // Your code below
  let array = people.filter((person) => {
    return person !== name
  })
  
  return array
}  
    
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
