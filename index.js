function runFiveMiles() {
    console.log('Go for a five-mile run');
  } 
  
  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  } 
  
  //function exerciseRoutine(postRunActivity) {
   // runFiveMiles();
   // postRunActivity();
  //} 
  
  //exerciseRoutine(() => console.log('Stretch! Work that core!'));
  
  function receivesAFunction(callback){
      runFiveMiles();
      callback();
  }
  
  
   

  
  function returnsANamedFunction() {
    
    return function hi() {
      console.log("Haha");
    }
  } 
  
  function returnsAnAnonymousFunction(){
    return function() {
        console.log("Haha");
      }

  }
 