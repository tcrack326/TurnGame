$(document).ready(function () {
//arrays to hold available characters and characters selected for game
var currentPlayers = [];
var players = [];
var enemies = [];

//put 1 of 8 background pics for beginning screen
var randomNumber = _.random(1,9).toString();

$('#openingScreen').css("background-image","url(\"../images/backgrounds/fantasy-main-0"+randomNumber+".jpg\")");

var randomNumber2 = _.random(1,9).toString();
$('#startScreen').css("background-image","url(\"../images/backgrounds/fantasy-main-0"+randomNumber2+".jpg\")");

//set up constructor(s) for game
var Player = function (options) {
  this.name = options.name || 'Hero';
  this.type = options.type;
  this.race = options.race;
  this.gender = options.gender || 'male';
  this.avatarUrl = options.avatarUrl;
  this.life = options.life || 100;
  this.magic = options.magic || 100;
  this.physicalAttack = options.physicalAttack;
  this.magicalAttack = options.magicalAttack;
  this.physicalDefense = options.physicalDefense;
  this.magicalDefense = options.magicalDefense;
  this.speed = options.speed;
  this.castSpeed = options.castSpeed;
  this.luck = options.luck;
};

//Remove initial start screen and go to character creation scene
$('#openingScreen').on('click', function () {
  $('#openingScreen').fadeOut(1000,function(){
    $('#openingScreen').remove();
  });
});


//create player when clicked
$('#createBtn').click( function() {
  if($('#name').val() === "" || $('#userType').val() === "" || $('#userRace').val() === "" || $('#userGender').val() === ""){
    alert("Enter all values for your new character");
  }
  else {
  createPlayer();
  //after creation get rid of the text in the inputs
  $('#name').val('');
  $('#userType').val('');
  $('#userRace').val('');
  $('#userGender').val('');
}
});

//select a character to battle with ======================================
$('#warriorList').on('click', ".character", function(){

  var characterName = $(this).find("h3").text();
  var selectedCharacter = _.findWhere(currentPlayers, {name: characterName});

  if (_.contains(players,selectedCharacter)){
    players = _.without(players, selectedCharacter);
    $(this).css("border", "1px solid gray");
  }
  //stop adding after four players added
  else if (players.length < 4){
    players.push(selectedCharacter);
    $(this).css("border", "2px solid black");
  }
});
//========================================================================
//click the button to start quest and move to the game screen

  $('#beginQuest').click( function() {
    if (players.length === 0){
      alert("You must select at least one player to do battle!");
    }

    //Remove the start screen, add the game screen, start the game up, add the selected players and begin playing
    else {
      $('#startScreen').fadeOut(500, function() {
        $('.container').append(gameScreenTemplateRenderer());

          players.forEach(function(player){
            $('#goodGuys').append(warriorTemplateRenderer(player));
          });
          enemies.forEach(function(enemy){
            $('#badGuys').append(warriorTemplateRenderer(enemy));
          });
      }).remove();
    }
  });



/*============================================================================================
=============================================================================================*/

//template for character selection/creation scene
// var creationScreenTemplate = $('#characterCreationTemplate').html();
// var creationScreenTemplateRenderer = _.template(creationScreenTemplate);

//create a template for the main game screen
var gameScreenTemplate = $('#gameScreenTemplate').html();
var gameScreenTemplateRenderer = _.template(gameScreenTemplate);

//create a template and add the current players to it
var warriorTemplate = $('#warriorListTemplate').html();
var warriorTemplateRenderer = _.template(warriorTemplate);

//Create the new player and add to currentPlayers =========================================================

var createPlayer = function() {
  userName = $('#name').val();
  userType = $('#userType').val();
  userRace = $('#userRace').val();
  userGender = $('#userGender').val();

  var newPlayer;

if (userRace === 'Human') {
  switch (userType){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 10,
        physicalAttack: 70,
        magicalAttack: 10,
        physicalDefense: 80,
        magicalDefense: 30,
        speed: 50,
        castSpeed: 10,
        luck: 40});
      break;
    case "Ranger":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 90,
        magic: 20,
        physicalAttack: 75,
        magicalAttack: 20,
        physicalDefense: 60,
        magicalDefense: 40,
        speed: 70,
        castSpeed: 10,
        luck: 60});
      break;
    case "Thief":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 75,
        magic: 30,
        physicalAttack: 40,
        magicalAttack: 30,
        physicalDefense: 30,
        magicalDefense: 40,
        speed: 90,
        castSpeed: 60,
        luck: 90});
      break;
    case "Light Wizard":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 80,
        physicalAttack: 10,
        magicalAttack: 50,
        physicalDefense: 50,
        magicalDefense: 90,
        speed: 50,
        castSpeed: 70,
        luck: 60});
      break;
    case "Dark Wizard":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 70,
        magic: 80,
        physicalAttack: 10,
        magicalAttack: 90,
        physicalDefense: 20,
        magicalDefense: 70,
        speed: 60,
        castSpeed: 60,
        luck: 50});
      break;
    case "Rogue":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 40,
        physicalAttack: 90,
        magicalAttack: 20,
        physicalDefense: 10,
        magicalDefense: 10,
        speed: 70,
        castSpeed: 40,
        luck: 70});
      break;
  }
}

else if (userRace === 'Elf') {
  switch (userType){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 20,
        physicalAttack: 60,
        magicalAttack: 20,
        physicalDefense: 70,
        magicalDefense: 50,
        speed: 70,
        castSpeed: 30,
        luck: 60});
      break;
    case "Ranger":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 20,
        physicalAttack: 95,
        magicalAttack: 20,
        physicalDefense: 40,
        magicalDefense: 40,
        speed: 80,
        castSpeed: 20,
        luck: 70});
      break;
    case "Thief":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 75,
        magic: 40,
        physicalAttack: 50,
        magicalAttack: 50,
        physicalDefense: 15,
        magicalDefense: 25,
        speed: 100,
        castSpeed: 70,
        luck: 80});
      break;
    case "Light Wizard":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 100,
        magic: 100,
        physicalAttack: 10,
        magicalAttack: 60,
        physicalDefense: 35,
        magicalDefense: 80,
        speed: 85,
        castSpeed: 95,
        luck: 60});
      break;
    case "Dark Wizard":
      newPlayer = new Player({
        name: userName,
        type:userType,
        race: userRace,
        gender: userGender,
        life: 90,
        magic: 90,
        physicalAttack: 10,
        magicalAttack: 95,
        physicalDefense: 10,
        magicalDefense: 70,
        speed: 85,
        castSpeed: 90,
        luck: 40});
      break;
    case "Rogue":
      newPlayer = new Player({
        name: userName,
        type:userType,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 50,
        physicalAttack: 100,
        magicalAttack: 30,
        physicalDefense: 20,
        magicalDefense: 20,
        speed: 90,
        castSpeed: 50,
        luck: 70});
      break;
  }
}

else {
  //race is dwarf
  switch (userType){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 100,
        magic: 10,
        physicalAttack: 90,
        magicalAttack: 10,
        physicalDefense: 100,
        magicalDefense: 50,
        speed: 35,
        castSpeed: 10,
        luck: 60});
      break;
    case "Ranger":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 90,
        magic: 20,
        physicalAttack: 75,
        magicalAttack: 20,
        physicalDefense: 80,
        magicalDefense: 60,
        speed: 40,
        castSpeed: 10,
        luck: 60});
      break;
    case "Thief":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 55,
        magic: 30,
        physicalAttack: 30,
        magicalAttack: 40,
        physicalDefense: 50,
        magicalDefense: 60,
        speed: 70,
        castSpeed: 30,
        luck: 100});
      break;
    case "Light Wizard":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 100,
        magic: 90,
        physicalAttack: 10,
        magicalAttack: 50,
        physicalDefense: 40,
        magicalDefense: 100,
        speed: 30,
        castSpeed: 50,
        luck: 60});
      break;
    case "Dark Wizard":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 90,
        magic: 90,
        physicalAttack: 10,
        magicalAttack: 90,
        physicalDefense: 40,
        magicalDefense: 90,
        speed: 40,
        castSpeed: 40,
        luck: 50});
      break;
    case "Rogue":
      newPlayer = new Player({
        name: userName,
        type: userType,
        race: userRace,
        gender: userGender,
        life: 90,
        magic: 40,
        physicalAttack: 90,
        magicalAttack: 20,
        physicalDefense: 30,
        magicalDefense: 30,
        speed: 50,
        castSpeed: 20,
        luck: 70});
      break;
  }
}

//Finally, set the avatar url based on the class, race, and gender chosen (and randomNumber based upon number of images available for each)
var randomCharacterNumber = _.random(1,4).toString();

//check to see if avatar url exists with random number to 5, if not, return one that exists
var avatarUrl = "../images/heroes/" + userType + "-" + userRace + "-" + userGender + "-" + "0" + randomCharacterNumber + ".png";

var avatarUrl4 = "../images/heroes/" + userType + "-" + userRace + "-" + userGender + "-" + "04.png";
;

var avatarUrl3= "../images/heroes/" + userType + "-" + userRace + "-" + userGender + "-" + "03.png";
;

var avatarUrl2 = "../images/heroes/" + userType + "-" + userRace + "-" + userGender + "-" + "02.png";
;

var avatarUrl1 = "../images/heroes/" + userType + "-" + userRace + "-" + userGender + "-" + "01.png";
;

//helper function to return existing image
var imageExists = function(url){
   var img = new Image();
   img.src = url;
   return img.height != 0;
};

//check to see if image exists and set one that does to the avatar....poor code for uneven amount of images...=(

if (imageExists(avatarUrl)) {
    newPlayer.avatarUrl = avatarUrl;
}

else if (imageExists(avatarUrl4)) {
  newPlayer.avatarUrl = avatarUrl4;
}

else if (imageExists(avatarUrl3)) {
  newPlayer.avatarUrl = avatarUrl3;
}

else if (imageExists(avatarUrl2)) {
  newPlayer.avatarUrl = avatarUrl2;
}
else {
  newPlayer.avatarUrl = avatarUrl1;
}

currentPlayers.push(newPlayer);
$('#warriorList').append(warriorTemplateRenderer(newPlayer));

};

/*==============================================================================
================================================================================*/

//default players for the game - NEED TO STORE IN SEPARATE JS FILE!!!
var defaultKnight = new Player({
  name: "Tim",
  type: "Knight",
  race: "Human",
  gender: "Male",
  avatarUrl: "../images/heroes/Knight-Human-Male-01.png",
  life: 80,
  magic: 20,
  physicalAttack: 60,
  magicalAttack: 20,
  physicalDefense: 70,
  magicalDefense: 50,
  speed: 70,
  castSpeed: 30,
  luck: 40
});

var defaultLightWizard = new Player({
  name: "Laura",
  type: "Light Wizard",
  race: "Elf",
  gender: "Female",
  avatarUrl: "../images/heroes/Light Wizard-Elf-Female-02.png",
  life: 100,
  magic: 100,
  physicalAttack: 10,
  magicalAttack: 60,
  physicalDefense: 35,
  magicalDefense: 80,
  speed: 85,
  castSpeed: 95,
  luck: 60
});

var defaultDwarfDarkWizard = new Player({
  name: "James",
  type: "Dark Wizard",
  race: "Dwarf",
  gender: "Male",
  avatarUrl: "../images/heroes/Dark Wizard-Dwarf-Male-02.png",
  life: 90,
  magic: 90,
  physicalAttack: 10,
  magicalAttack: 90,
  physicalDefense: 40,
  magicalDefense: 90,
  speed: 40,
  castSpeed: 40,
  luck: 50
});

var defaultThief = new Player({
  name: "Sarah",
  type: "Thief",
  race: "Human",
  gender: "Female",
  avatarUrl: "../images/heroes/Thief-Human-Female-04.png",
  life: 75,
  magic: 30,
  physicalAttack: 40,
  magicalAttack: 30,
  physicalDefense: 30,
  magicalDefense: 40,
  speed: 90,
  castSpeed: 60,
  luck: 90
});

  currentPlayers.push(defaultKnight);
  currentPlayers.push(defaultLightWizard);
  currentPlayers.push(defaultDwarfDarkWizard);
  currentPlayers.push(defaultThief);

//let's create some enemies to battle with

var goblin1 = new Player({
  name: "Gribble Goblin",
  type: "Fighter",
  race: "Goblin",
  gender: "Male",
  avatarUrl: "../images/monsters/goblin-01.png",
  life: 30,
  magic: 30,
  physicalAttack: 30,
  magicalAttack: 10,
  physicalDefense: 25,
  magicalDefense: 10,
  speed: 25,
  castSpeed: 15,
  luck: 10
});
var orc1 = new Player({
  name: "Morc the Orc",
  type: "Knight",
  race: "Orc",
  gender: "?",
  avatarUrl: "../images/monsters/orc-02.png",
  life: 50,
  magic: 10,
  physicalAttack: 40,
  magicalAttack: 10,
  physicalDefense: 45,
  magicalDefense: 10,
  speed: 45,
  castSpeed: 15,
  luck: 20
});

var troll1 = new Player({
  name: "Trouble Troll",
  type: "Brawler",
  race: "Troll",
  gender: "?",
  avatarUrl: "../images/monsters/troll-01.png",
  life: 80,
  magic: 10,
  physicalAttack: 10,
  magicalAttack: 10,
  physicalDefense: 75,
  magicalDefense: 10,
  speed: 15,
  castSpeed: 15,
  luck: 70
});


enemies.push(goblin1);
enemies.push(orc1);
enemies.push(troll1);

/*====================================================================================
======================================================================================*/
currentPlayers.forEach(function(player){
  $('#warriorList').append(warriorTemplateRenderer(player));
});
});
