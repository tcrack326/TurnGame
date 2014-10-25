$(document).ready(function () {
//arrays to hold available characters and characters selected for game
var currentPlayers = [];
var players = [];
var enemies = [];

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

//click the button to start quest and move to the game screen


  $('#beginQuest').click( function() {
    if (players.length === 0){
      alert("You must select at least one player to do battle!");
    }

    else {
      $('#startScreen').fadeOut(500, function() {

        $('#gameScreen').fadeIn(500, function(){
          players.forEach(function(player){
            $('#goodGuys').append(warriorTemplateRenderer(player));
          });
          enemies.forEach(function(enemy){
            $('#badGuys').append(warriorTemplateRenderer(enemy));
          });
        });
      });
    }
  });

  //select a character to battle with
  $('#warriorList').on('click', ".character", function(){

    var characterName = $(this).find("h3").text();
    var selectedCharacter = _.findWhere(currentPlayers, {name: characterName});

    if (_.contains(players,selectedCharacter)){
      players = _.without(players, selectedCharacter);
      $(this).css("border", "1px solid gray");
    }
    else{
    players.push(selectedCharacter);
    $(this).css("border", "3px solid black");
    }
  });


//set up constructors for game
var Player = function (options) {
  this.name = options.name || 'Hero';
  this.type = options.type;
  this.race = options.race;
  this.gender = options.gender || 'male';
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


//default players for the game
var defaultKnight = new Player({
  name: "Eddard Stark",
  type: "Knight",
  race: "Human",
  gender: "Male",
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
  name: "Zelda",
  type: "Light Wizard",
  race: "Elf",
  gender: "Female",
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
  name: "Willow",
  type: "Dark Wizard",
  race: "Dwarf",
  gender: "Male",
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
  name: "Anna",
  type: "Thief",
  race: "Human",
  gender: "Female",
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
/*============================================================================================
=============================================================================================*/
//create a template and the current players to it
var warriorTemplate = $('#warriorListTemplate').html();
var warriorTemplateRenderer = _.template(warriorTemplate);

currentPlayers.forEach(function(player){
  $('#warriorList').append(warriorTemplateRenderer(player));
});

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

currentPlayers.push(newPlayer);
$('#warriorList').append(warriorTemplateRenderer(newPlayer));

};

/*==============================================================================
================================================================================*/
});
