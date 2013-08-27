function displayResults(){
  // restoring the string to an object
  var storedData = localStorage.getItem("choice");
  if(storedData) {
    var choice = JSON.parse(storedData);
  }

  // ruby code from index.html.erb
  var choiceArray = ["poll","slideshow","countdown","this_or_that"];
  for (var counter = 0; counter < choiceArray.length; counter++) {
    if(choice[choiceArray[counter]] === 0){
      continue;
    }else{
      $('#' + choiceArray[counter]).text(choiceArray[counter]
        + ": " + number_of(choice, choiceArray[counter]).toString()
        + " votes");
    }
  }
}

function number_of(object, nameOfChoice){
  var choiceObject = object;
  return choiceObject[nameOfChoice];
}
