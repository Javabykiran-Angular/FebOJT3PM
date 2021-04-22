
//json => java script object notation
// json=> key & value(data) Format
var obj={
    name:"sumit Raokhande",
    id:9,
    "role":'Developer'
}

// here we can parse a data using 2 method 
// 1 using dot operator
// 2 using square operator

//1 dot operator

// console.log(`
// -------------------------------------
// Name is :: ${obj.name}
// Id  :: ${obj.id}
// Role :: ${obj.role}
// `);

// Using Square operator

// console.log(`
// ===========================================
// name :: ${obj["name"]}
// id   :: ${obj["id"]}
// Role :: ${obj["role"]}
// `);


//array of object

var arrobj=[
    {
        name:"sumit Raokhande",
         id:9,
        status:true,
        marks:[40,45,55,38],
        country:{
            id:1,
            name:'India'
        }
    },
    {
        name:"Spruha Raokhande",
         id:3,
        status:false,
        marks:[75,80,65,88],
        country:{
            id:2,
            name:'Japan'
        }
    },
    {
        name:"kiran Raokhande",
         id:6,
        status:true,
        marks:[55,65,50,62],
        country:{
            id:3,
            name:'US'
        }
    }
];

// console.log(`
//     Name :: ${arrobj[0].name}
//     Id   :: ${arrobj[0].id}
//     Status :: ${arrobj[0].status}
// `);

for (let i = 0; i < arrobj.length; i++) {
  
    console.log(`
    -------------------------------
    Name :: ${arrobj[i].name}
    Id   :: ${arrobj[i].id}
    Status :: ${arrobj[i].status}
    Marks   :: ${arrobj[i].marks.join(' ')}
    ========== Country ==================
            ${arrobj[i].country.name}
`);
    
}


// HW => Make json object => make keys like status=> string msg
// next key company=> array of object=> various company json object
//particular company json object=> model no,price,quantity,decription=> one json object
// description=> one object techinical =>{

//},general=> only string data




