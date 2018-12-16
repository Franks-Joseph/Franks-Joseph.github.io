
    
    function runFunction() {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
          const jasonObject = JSON.parse(this.responseText);
          
          alert(jasonObject.Game);
          
          console.log("Success!");
        }
        
        xhr.open('get', 'XHR_with_JSON.json');
        xhr.send(); 
    }
      

