$(document).ready(function () {

//create player when clicked
$('#createBtn').click( function(){
  createPlayer();
});

//set up constructors for game
var Player = function (options) {
  this.name = options.name || 'Hero';
  this.class = options.class;
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



// var UserPlayer = function (name, race, gender) {
//   Player.call(this, {name: name, race: race, gender: gender});
//
// };


//create some basics players to test with - TOREMOVE LATER!!
var player = new Player({ physicalAttack: 30, magicalAttack: 30, physicalDefense: 30, magicalDefense: 30, speed: 30, castSpeed: 30, luck: 30 });


var opponent = new Player({ physicalAttack: 30, magicalAttack: 30, physicalDefense: 30, magicalDefense: 30, speed: 30, castSpeed: 30, luck: 30 });

var currentPlayers = [];
currentPlayers.push(player);
currentPlayers.push(opponent);

//create a template and the current players to it
var warriorTemplate = $('#warriorListTemplate').html();
console.log(warriorTemplate);
var warriorTemplateRenderer = _.template(warriorTemplate);
console.log(warriorTemplateRenderer);

currentPlayers.forEach(function(player){
  $('#warriorList').append(warriorTemplateRenderer(player));
});

//Create the new player and add to currentPlayers =========================================================

var createPlayer = function() {
  userName = $('#name').val();
  userClass = $('#userClass').val();
  userRace = $('#userRace').val();
  userGender = $('#userGender').val();

  var newPlayer;

if (userRace === 'Man') {
  switch (userClass){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        luck: 50});
      break;
    case "Ranger":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        class:userClass,
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
        class:userClass,
        race: userRace,
        gender: userGender,
        life: 80,
        magic: 80,
        physicalAttack: 10,
        magicalAttack: 50,
        physicalDefense: 20,
        magicalDefense: 90,
        speed: 50,
        castSpeed: 70,
        luck: 60});
      break;
    case "Dark Wizard":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        class:userClass,
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
  switch (userClass){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        class:userClass,
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
        class:userClass,
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
        class:userClass,
        race: userRace,
        gender: userGender,
        life: 100,
        magic: 100,
        physicalAttack: 10,
        magicalAttack: 60,
        physicalDefense: 65,
        magicalDefense: 80,
        speed: 85,
        castSpeed: 95,
        luck: 60});
      break;
    case "Dark Wizard":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        class:userClass,
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
  switch (userClass){
    case "Knight":
      newPlayer = new Player({
        name: userName,
        class:userClass,
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
        class:userClass,
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
        class:userClass,
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
        class:userClass,
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
        class:userClass,
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
        class:userClass,
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
