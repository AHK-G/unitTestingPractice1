import { Zoo, Animal } from "../src/Zoo";

let animal: Animal;
beforeEach(() => {(animal = new Animal("Zoe", "zebra"))});

describe("Animal", () => {
  it("should be 100 health upon creation", () => {
    animal.feed();

    const animalHealth = animal.checkHealth().health;

    expect(animalHealth).toBe(100);
  });

  it("should be hungry upon creation", () => {
    const animalHealth = animal.checkHealth().health;

    expect(animalHealth).toBe(90);
  });
});



describe("Zoo", () => {


  it("should be able to add an animal", () => {
    const zoo = new Zoo();

    zoo.addAnimal(animal);

    expect(zoo.checkAnimalHealth()[0].name).toBe("Zoe");
  });


  test.each([
    [new Animal("Zoe", "zebra") ,100],
    [new Animal("Sussie", "Sheep"),100],

  ])("should feed all animals", (a,c)=> {
    const zoo = new Zoo();
    zoo.addAnimal(a);

    zoo.feedAllAnimals();
    console.log(zoo.checkAnimalHealth()[0]);

    expect(zoo.checkAnimalHealth()[0].health).toBe(c);
  })

});
