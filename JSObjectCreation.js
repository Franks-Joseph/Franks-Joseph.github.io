/* Objects are variables but with more values
   bluePill and writeonScreen = properties
   writeonScreen = method because its value is a function */
   const object1 = {
    bluePill: "No",
    writeonScreen: function () {
      document.write(`Follow the White ${this.name}. Do you want to take the Blue Pill? ${this.bluePill}`);
    }
  };
  
  /*This is a new object that is inheriting the properties from "object1". This is also the instantiation of the new Object*/
  const object2 = Object.create(object1);
  
  object2.name = "Rabbit";
  object2.bluePill = "Yes";
  //This is a new method which is an object that has a function
  object2.writeonScreen();
  
  /*Link for learning Object Creation
  https://tylermcginnis.com/object-creation-in-javascript-functional-instantiation-vs-prototypal-instantiation-vs-pseudo-e9287b6bbb32/
  */  