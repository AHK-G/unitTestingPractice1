class Zoo {
    private animals: Animal[];

    public constructor() {
        this.animals = [];
    }

    public addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    public feedAllAnimals(): void {
        this.animals.forEach((animal) => {
            animal.feed();
        });
    }

    public checkAnimalHealth(): { name: string; species: string; health: number }[] {
        return this.animals.map((animal) => animal.checkHealth());
    }
}

class Animal {
    public name: string;
    public species: string;
    private isHungry: boolean;
    private health: number;

    public constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
        this.isHungry = true;
        this.health = 100;
    }

    public feed(): void {
        this.isHungry = false;
    }

    public checkHealth(): { name: string; species: string; health: number } {
        if (this.isHungry) {
            this.health -= 10;
        }
        return {
            name: this.name,
            species: this.species,
            health: this.health,
        };
    }
}

export { Zoo, Animal };
