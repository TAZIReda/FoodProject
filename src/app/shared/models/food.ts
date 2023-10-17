export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    starts:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:String;
}