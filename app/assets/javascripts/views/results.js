function setupLocalStorage(){
  var choice = {};
  choice.poll = 0;
  choice.slideshow = 0;
  choice.countdown = 0;
  choice.this_or_that = 0;
  choice.all_of_the_above = 0;
  localStorage.setItem( "choice", JSON.stringify(choice) );
}

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
  allOfTheAboveCounter(choiceObject);
  return choiceObject[nameOfChoice];
}

function allOfTheAboveCounter(choiceObject){
  for (var iteratorCounter = 0; iteratorCounter < choiceObject.all_of_the_above; iteratorCounter++){
    var choiceArray = ["poll","slideshow","countdown","this_or_that"];
    for (var arrayCounter = 0; arrayCounter < choiceArray.length; arrayCounter++) {
      choiceObject[choiceArray[arrayCounter]] += 1;
    }
  }
  return choiceObject;
}

if(localStorage.length === 0){
  setupLocalStorage();
}else{
  displayResults();
}

// $('.result_display').hide();
