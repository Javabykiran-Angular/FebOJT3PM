
export class MyService{
    private course=['Angular 8','React Js','Vue Js','Embber Js'];

    private arrobj=[
        {
            name:'Motorola',
            price:15000,
            quantity:1
        },
        {
            name:'Samsung',
            price:15040,
            quantity:2
        },
        {
            name:'Oneplus',
            price:30000,
            quantity:1
        },
        {
            name:'Realme',
            price:25000,
            quantity:2
        }
    ];
    getCourse(){
        return (this.course);
    }

    getArrObj(){
        return (this.arrobj);
    }
}