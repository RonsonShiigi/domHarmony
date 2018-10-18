/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
matCount.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
msgCount.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
fullname.innerHTML = "Ronald Mcdonald";
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
age.innerHTML = 63;
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
    var jobby = document.createElement('div');
    jobby.id = "job";
    jobby.innerHTML = "Clown and Restauranteur";
    data.appendChild(jobby);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbiesBox = document.createElement('div');
hobbiesBox.id = "hobbies";
hobbiesBox.innerHTML= "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King."
data.appendChild(hobbiesBox);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var whereAt = document.createElement('div');
whereAt.id='location';
whereAt.innerHTML= "Honolulu, HI";
data.appendChild(whereAt);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wanting = document.createElement('div');
wanting.id="wants";
wanting.innerHTML="Looking for a Mrs. Mcdonald";
data.appendChild(wanting);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var profileBox = document.createElement('p');
profileBox.id= "pro2"
profileBox.innerHTML = "I love to eat cheeseburgers and fries.  Maybe I'll make you an ice cream cone.";
profile.appendChild(profileBox);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var matchMaker = document.getElementsByClassName('firstName');

matchMaker[0].innerHTML= "Wendy";
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48. 
var older = document.getElementsByClassName('otherAge');
older[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusMom = document.getElementsByClassName('status');
statusMom[0].innerHTML ="Single Mother";
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
matchMaker[1].innerHTML="Peko Chan";
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
older[1].innerHTML=68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




