import { Person } from './person';

export class  contacts{
    
    // Declarando atributos.

    public people:Person[] = []

    constructor() 
    {   
      
        this.people;

    }

    printContacts():void{
      
     
       console.log(this.people);
    }
}
