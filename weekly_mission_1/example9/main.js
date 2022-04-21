const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("PIKACHUU!")

bulbasaur.sayHello()
bulbasaur.sayMessage("BULBASAURRR!")

charmander.sayHello()
charmander.sayMessage("CHARMANDERRRR!")

squirtle.sayHello()
squirtle.sayMessage("SQUIRTLEEE!")