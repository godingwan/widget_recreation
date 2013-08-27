function setupLocalStorage(){
  var choice = {};
  choice.poll = 0;
  choice.slideshow = 0;
  choice.countdown = 0;
  choice.this_or_that = 0;
  choice.all_of_the_above = 0;
  localStorage.setItem( "choice", JSON.stringify(choice) );
}
