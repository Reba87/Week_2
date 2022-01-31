
export class Person
{
    // Bloque de declaracion de atributos
    public name:string;
    public age:number;
    private address:string;

    // Bloque Constructor
            constructor(name:string, age:number, address:string)
            {
                this.name = name;
                this.age = age;
                this.address = address;
            }

    // Bloque Metodos

        public printName ():void
        {
            console.log("Name: " + this.name);
        }

        public yearOfBirth(currentYear:number):number
        {
           currentYear = currentYear
           return currentYear - this.age
        }

        public setAdress(address:string)
        {
            this.address = address
        }

        public getAdress():string
        {
            return this.address
        }
        
}

