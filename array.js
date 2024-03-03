const petsData = [
    {
    petName: "Stella",
    age: 7,
    weightInKilos: 24,
    breed: "Dalmation",
    pic:
    "images\\stella.png"
    },
    {
    petName: "Cody",
    age: 8,
    weightInKilos: 22,
    breed: "Corgi",
    pic:
    "images\\cody.png"
    },
    {
    petName: "Mango",
    age: 2,
    weightInKilos: 11,
    breed: "Persian",
    pic:
    "images\\mango.png"
    },
    {
    petName: "Lucy",
    age: 4,
    weightInKilos: 35,
    breed: "Ball Python",
    pic:
    "images\\lucy.png"
    },
    {
    petName: "Buhmie",
    age: 1,
    weightInKilos: 28,
    breed: "Bull-dog",
    pic:
    "images\\buhmie.png"
    }
    ];

let demoRef2 = document.querySelector(".demo2");
let animalsDiv = document.createElement("div");
let animalsList = document.createElement("ul");
petsData.forEach((animal)=>{
let listItem = document.createElement("li");
listItem.textContent = `${animal.petName} is a
${animal.breed}, and is ${animal.age} years old`;
let animalImage = document.createElement("img");
animalImage.src = animal.pic;
listItem.append(animalImage);
animalsList.append(listItem);
});
animalsDiv.append(animalsList);
demoRef2.append(animalsDiv);


let demoRef3 = document.querySelector(".demo3");
let soughtAnimals = [];
petsData.forEach((animal)=>{
    if (animal.age >= 3)
        soughtAnimals.push(animal);
        console.log(soughtAnimals);
});
