
import {Shape} from './Shape';
export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(r:number){
        super();
        this.radius=r;
        this.area=0;
    }

    MyArea(){
        this.area=3.14*this.radius*this.radius;
    }
    
    Display(){
        console.log(`
        ---------Circle Area details-------------
        Radius :: ${this.radius}
        Area    :: ${this.area}
        `);
    }

    
}