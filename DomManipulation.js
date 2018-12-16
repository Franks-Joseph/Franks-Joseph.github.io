/*This is the function that the button element is calling*/
function insertElement() {

    //create the html element to be inserted in the Doc
    var element = document.createElement("li");
  
    /*create the TextNode that will be appended to the new html element*/
    var textnode = document.createTextNode("buckets");
  
    /*combine or "append" the TextNode and the new html element together*/
    element.appendChild(textnode);
  
    /*tie together what you just combined to the html element that references the id*/
    document.getElementById("unorderedList").appendChild(element);
  }
  
  //Function for insertBefore()
  function insertStart() {
  
    /*Do the usual stuff, create the element, create the textnode, put them together*/
    var newElem = document.createElement("li");
    var txtnode_2 = document.createTextNode("Number 1");
    newElem.appendChild(txtnode_2);
  
    /*Get the reference to the element in the document with the id*/
    var list = document.getElementById("unorderedList_2");
  
  
    /*Here is where you use the insertBefore(), it's parameters use a childNodes[]. This is ready only. This references the list of Nodes being used in the document*/
    list.insertBefore(newElem, list.childNodes[0]);
  }
  
  function Undo() {
    var list_2 = document.getElementById("unorderedList_2");
    list_2.removeChild(list_2.childNodes[0]);
  }