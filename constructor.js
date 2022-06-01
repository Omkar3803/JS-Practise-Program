// Default constructor using this and new keywords
function Laptop() {
    this.make = "Apple"
    this.model = 'MacBook Pro'
    this.memory = ['SSD','HDD']
    this.cores = 8
    this.memorySize = [256, 512]
}
const laptop = new Laptop();
console.log(laptop.make + ", " + laptop.model + ", " + laptop.cores)
console.log(laptop.memory, laptop.memory[0], laptop.memory[1])
console.log(laptop.memorySize, laptop.memorySize[0], laptop.memorySize[1])

// Parameterized constructor using this and new keywords
function Laptop1(lapMake, lapModel, lapMemory, lapCores, lapMemorySize) {
    this.make = lapMake
    this.model = lapModel
    this.memory = lapMemory
    this.cores = lapCores
    this.memorySize = lapMemorySize
}
const laptop1 = new Laptop1('Apple','MacBook Pro',['SSD','HDD'],6,[1265,1512]);
console.log(laptop1.make + ", " + laptop1.model + ", " + laptop1.cores)
console.log(laptop1.memory, laptop1.memory[0], laptop1.memory[1])
console.log(laptop1.memorySize, laptop1.memorySize[0], laptop1.memorySize[1])