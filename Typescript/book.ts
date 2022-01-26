export class Book
{
    // Declarando atributos
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    // Declarando Constructor

    constructor(title:string, nPages:number, isbn:string,author:string,editorial:string)
    {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
        
    }

    // Declarando metodos

    public setTitle(title: string):void 
    {
        this.title = title;
    }
    public setnPages(nPages: number):void 
    {
        this.nPages = nPages;
    }
    public setisbn(isbn:string):void 
    {
        this.isbn = isbn;
    }
    public seAuthor(author:string):void 
    {
        this.author = author;
    }
    public setEditorial(editorial:string):void  
    {
        this.editorial = editorial;
    }

    public getTitle():string
    {
        return this.title;
    }
    public getnPages():number
    {
        return this.nPages;
    }
    public getisbn():string
    {
        return this.isbn;
    }
    public getAuthor():string
    {
        return this.author;
    }
    public getEditorial():string
    {
        return this.editorial;
    }
    public printAll():void
    {      


        console.log( "Title" +" - "+ this.title + "\n" + "Number of Pages"+" - "+ this.nPages + "\n" +
        "ISBN" +" - "+ this.isbn, "\n" +"Author" + " - "+ this.author + "\n" + "Editorial" +" - "+ this.editorial + "\n")
                    

    }
    
        
}

