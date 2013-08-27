function submitVote(){
  var result = $('input[name="choice"]:checked').val();
  incrementByOne(result);
  displayResults();
  $('.voting_display').hide(1000);
  $('.result_display').show(1000);
}

function incrementByOne(choice){
  if(choice === "all_of_the_above"){
    addOneToAll();
  }else{
    var choiceArray = ["poll","slideshow","countdown","this_or_that"];
    for (var counter = 0; counter < choiceArray.length; counter++) {
      if(choiceArray[counter] !== choice){
        continue;
      }else{
        addOneToSelected(choice);
      }
    }
  }
}

function addOneToAll(){
  var storedData = localStorage.getItem("choice");
  if(storedData) {
    var storedChoiceObject = JSON.parse(storedData);
  }

  var choiceArray = ["poll","slideshow","countdown","this_or_that"];
  for (var arrayCounter = 0; arrayCounter < choiceArray.length; arrayCounter++) {
    storedChoiceObject[choiceArray[arrayCounter]] += 1;
  }
  localStorage.setItem( "choice", JSON.stringify(storedChoiceObject) );
}

function addOneToSelected(nameOfChoice){
  var storedData = localStorage.getItem("choice");
  if(storedData) {
    var storedChoiceObject = JSON.parse(storedData);
  }

  storedChoiceObject[nameOfChoice] += 1;
  localStorage.setItem( "choice", JSON.stringify(storedChoiceObject) );
}
