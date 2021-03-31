
const koderObject = {
    name: 'Aron',
    lastName: 'Barcenas',
    generation: 11
}

// declaración

function Koder(name, lastName, generation, birthDate, country, bootcamp, school='Kodemia', scores=[90, 80, 95, 100]) {
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.birthDate = birthDate;
    this.country = country;
    this.bootcamp = bootcamp;
    this.school = school;
    this.scores = scores;
    this.greet = function() {
        console.log(`Hola Mi nombre es ${name} y soy de la generación ${this.generation}º de ${this.bootcamp}`)
    }
    this.asking = function(question, mentor) {
        console.log(`${mentor} tengo duda sobre: ${question}`)
    }
    this.getAge = function() {
        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        return age
    }
}

// instanciar

const koderDiana = new Koder('Diana', 'Ibañez', 11, '1996/06/24', 'Peru', 'JavaScript', 'KoderHause')
const koderTaquito = new Koder('Vero', 'Paredes', 11, '1992/06/03', 'Mexico', 'JavaScript')

console.log(koderDiana)
console.log(koderTaquito)