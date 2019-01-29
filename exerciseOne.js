
var hacker1= "Pedro"
console.log(hacker1);

var hacker2 = prompt
("what's your navigator");
console.log(hacker2);

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has "  + hacker2.length + " characters or" );
}else if(hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + "characters!!");
}

console.log(hacker1.toUpperCase().split(""));

var nuevoHacker = hacker2;
var nuevoHacker = nuevoHacker.split("");
var nuevoHacker = nuevoHacker.reverse();
var nuevoHacker = nuevoHacker.join("");

console.log(nuevoHacker);

if(hacker1[0].toLowerCase() < hacker2[0].toLowerCase()){
  console.log("The driver's name " + hacker2 + "goes first");
}else if(hacker1[0].toLowerCase() > hacker2[0].toLowerCase()){
  console.log("Yo, the navigator " + hacker2 + "goes first definitely");
}else if(hacker1[0].toLowerCase() === hacker2[0].toLowerCase()){
  console.log("What?! You both got the same name");
}


//Palindrome exercise

var newStr = prompt ("Write a word");


function specialCharacters(str) {
	var finalArray = [];
 	for (i = 0; i < str.length; i++){
 		if(str[i].toLowerCase().charCodeAt(0) >= 97 && str[i].toLowerCase().charCodeAt(0) <= 122) {
   			finalArray.push(str[i]);
 		}
	}
 	finalArray = finalArray.join("");
 	return finalArray;
}

function reverseOrder(word) {
  	var finalArrayReversed = word.split("").reverse().join("");
	return finalArrayReversed;
}

function palindrome(str, word) {
	if(str == word){
	console.log("It is a palindrome");
} else {console.log("It's not a palindrome")}
};

palindrome(specialCharacters(newStr), reverseOrder(specialCharacters(newStr)));



//Lorem ipsum
//declare lorem impsum text in var
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vulputate nisl. Vestibulum at turpis sed neque cursus auctor. Praesent hendrerit fringilla purus id molestie. Curabitur eget magna venenatis, semper erat eu, interdum ex. Vestibulum dolor urna, molestie in convallis ut, venenatis eget velit. Praesent bibendum tincidunt purus, ac lobortis ex luctus ut. Ut ac nulla nisl. Maecenas non tortor facilisis, condimentum odio quis, accumsan est. Vestibulum erat diam, tincidunt nec blandit sed, ornare a ex. Donec metus nisi, tincidunt eu interdum at, lobortis eget diam. Suspendisse id tortor nibh. Donec lacinia pellentesque quam at molestie. Nullam egestas a urna sit amet egestas. Duis sed velit dolor. Quisque ultrices imperdiet venenatis.Donec nec rhoncus ipsum. In sed egestas ligula. Morbi et tristique dolor. Pellentesque consectetur eleifend magna, at luctus ex viverra a. In cursus libero leo, vel efficitur nulla rutrum sit amet. Pellentesque mattis, ipsum sit amet imperdiet condimentum, tellus tortor condimentum quam, sed sagittis urna diam ac dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent ac pulvinar velit. Nulla eu suscipit lorem. Cras interdum porttitor enim. Nunc eleifend vitae purus vel luctus. Etiam luctus, leo sit amet cursus malesuada, nisi lectus imperdiet ipsum, sit amet pulvinar turpis odio quis diam. Nulla in nibh id elit aliquam mattis non sed orci. Proin convallis dui at mi fringilla, a varius turpis finibus.Praesent finibus semper eros, vitae accumsan urna porta varius. Aenean convallis tellus lacus, vel elementum ligula facilisis vel. Suspendisse vitae felis id mi lacinia aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in suscipit eros. Fusce in quam ut mi accumsan pretium vitae vitae elit. Phasellus non dui lacinia, egestas sem a, fringilla erat. Nulla vitae ipsum a nunc rutrum consequat. Aliquam vel lorem tincidunt, iaculis ex vitae, tincidunt ex. Maecenas ullamcorper massa id est rhoncus elementum. Vestibulum fringilla porta mi sed tristique. In hac habitasse platea dictumst. Suspendisse sagittis mi eget aliquam bibendum. Phasellus facilisis ultrices neque. Donec commodo feugiat sapien ut finibus. Nulla libero dolor, pretium eu tempor ut, molestie in nibh."

/*Create a function call wordCount */
function wordCount (str){
for(var i = 0; i< wordCount.length; i++){
  return str.split(" ").length;
}
}
console.log(wordCount(loremIpsum));

/*Make your program count the number of times the latin word etappears*/
function totalWordCount() {
  var counter = 0; /*init counter*/
  for (i = 0; i < loremIpsum.length; i++) {
  word = loremIpsum.split(" ")[i];
  if (word == "et"){
  counter++;
    }
  }
  console.log(counter);
}

totalWordCount();




