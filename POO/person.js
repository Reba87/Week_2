// Definiendo class person, con caracteristicas generales de cualquier persona.

class Person
{
    constructor(peso,altura,genero)
    {
        this.peso = peso;
        this.altura = altura;
        this.genero = genero;
        this.colorOjos;
        this.colorPelo;
        this.colorPiel;
        this.yearOfBirth;
        this.hobbies = []
    }
    calcularImc()
    {
       return this.peso / (this.altura * this.altura)

    }

    edad(yearOfBirth)
    {   
        let fechaActual = new Date
        let year = fechaActual.getFullYear()
        let edad = year - this.yearOfBirth;
        let resultado = "Tu edad es: " + edad + " Años"
        return resultado
    } 

    printAll(constructor)
    {
        for(let key1 in constructor)
        {  
           console.log(key1 + "-" + constructor[key1] )     
          
        }      
    }

    printHobbies(){
        console.log("Mis hobbis son: " + this.hobbies);
    }
       
    }

    
    
  module.exports = Person;