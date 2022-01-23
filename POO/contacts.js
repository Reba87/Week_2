// Definiendo la clase contacts

class Contacts{
    
    constructor()
    {
        this.contactosArr =[];
    }

    printContactos()
    {
        for(let key of this.contactosArr)
        {  
           console.log(key)     
          
        }      
    }

}

module.exports = Contacts