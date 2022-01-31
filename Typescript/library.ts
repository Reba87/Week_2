import { Book } from './book';



class Library 
{
    //Declarando atributos
    private books: Book[]=[]
    private address: string
    private manager: string

    //Declarando Constructor
    constructor(books,address:string,manager:string)
    {
        this.books= books
        this.address=address
        this.manager=manager
    }

    // Declarando metodos

    public setAdress(address:string)
    {
        return this.address = address
    }
    public setManager(manager:string)
    {
        return this.manager = manager
    }
   
    public getAdress(address:string)
    {
        return this.address
    }

    public getManager(manager:string)
    {
        return this.manager
    }
    

    private toString()
    {   
        
        return  this.books
    }
    public showBooks()
    {
        
        console.log(this.toString())
    }

    getNumberOfBooks():number
    {
        return this.books.length
    }

    findByAuthor(author:string):Book[]
    {
      
       return 
    }

}


let libro2 = new Book("Nunca te pares: Autobiografía del fundador de Nike",
432,"978-8416029778","Phil Knight","CONECTA; 002 edición" );


let libro1 = new Book("Elon Musk: El empresario que anticipa el futuro",464,
"978-8499426631","Ashlee Vance","Ediciones Península");


libro2.setTitle("Nunca te pares: Autobiografía del fundador de Nike");
libro2.setnPages(432);
libro2.setisbn("978-8416029778");
libro2.seAuthor("Phil Knight");
libro2.setEditorial("CONECTA; 002 edición")

let libreria = new Library([libro1,libro2],"Estados Unidos","Walter Isaacson");
libreria.setAdress("Califoni, Estados Unidos");
libreria.setManager("Walter Isaacson");


console.log(libreria.findByAuthor("Phil Knight"))
//console.log(libreria.getNumberOfBooks())
//console.log(libreria.toString())