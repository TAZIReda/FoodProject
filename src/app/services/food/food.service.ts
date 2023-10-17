import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag == "All" ? 
    this.getAll():
    this.getAll( ).filter(food => food.tags?.includes(tag));
  //   return this.getAll();
  //   else 
  //   return this.getAll( ).filter(food => food.tags?.includes(tag));
   }

   getAllTags():tag []{
    return [
      {name: "All",count: 14},
      {name: "FastFood",count: 4},
      {name: "Lunch",count: 4},
      {name: "fries",count: 2},
      {name: "Burger",count: 1},
      {name: "TraditionFood",count: 2},
      {name: "Meet",count: 1},
    ];
   }
  getAll():Food[] { 
    return [
      {
        id:1,
        name: 'Fries ',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        starts: 4.5,
        imageUrl: '/assets/food1.jpeg',
        tags: ['FastFood', 'fries','Lunch'],
      },
      {
        id:2,
        name: 'Escalope Pani',
        cookTime: '20-30',
        price: 25,
        favorite: true,
        origins: ['europe'],
        starts: 4,
        imageUrl: '/assets/food2.jpeg',
        tags: ['FastFood','Lunch'],
      },
      {
        id:3,
        name: ' Burger',
        cookTime: '10-20',
        price: 5,
        favorite: false,
        origins: ['USA'],
        starts: 4.5,
        imageUrl: '/assets/food3.jpeg',
        tags: ['FastFood', 'Burger','Lunch'],
      },
      {
        id:4,
        name: 'Eggs Pepperoni',
        cookTime: '10-15',
        price: 15,
        favorite: true,
        origins: ['korean japan'],
        starts: 3.5,
        imageUrl: '/assets/food4.jpeg',
        tags: ['FastFood', 'Egs','Lunch'],
      },
      {
        id:5,
        name: 'Couscous',
        cookTime: '30-40',
        price: 30,
        favorite: true,
        origins: ['Algeria'],
        starts: 4.5,
        imageUrl: '/assets/food5.jpeg',
        tags: ['Couscous', 'TraditionFood','Lunch'],
      },
      {
        id:6,
        name: ' Metouame',
        cookTime: '25-35',
        price: 18,
        favorite: false,
        origins: ['Algeria'],
        starts: 5,
        imageUrl: '/assets/food6.jpeg',
        tags: ['TraditionFood', 'Meat','Lunch'],
      }
    ]
}
}