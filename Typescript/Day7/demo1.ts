
// HW => Make json object => make keys like status=> string msg
// next key company=> array of object=> various company json object
//particular company json object=> model no,price,quantity,decription=> one json object
// description=> one object techinical =>{

//},general=> only string data

var jsonObj={
    status:'Data is available',
    manufacture:[
        {
            company:'Motorola',
            modelno:'G60',
            price:17999,
            quantity:1,
            description:{
                general:'Good product',
                techinical:{
                    cpu:'snapdragon 860 G',
                    ram:'6gb'

                }

            }
        },
        {
            company:'One Plus',
            modelno:'9R',
            price:49999,
            quantity:1,
            description:{
                general:'better product',
                techinical:{
                    cpu:'snapdragon 888',
                    ram:'8gb'

                }

            }
        },
        {
            company:'Realme',
            modelno:'8',
            price:24999,
            quantity:1,
            description:{
                general:'Good product',
                techinical:{
                    cpu:'snapdragon 765G',
                    ram:'6gb'

                }

            }
        }
    ]
}

for (let i = 0; i < jsonObj.manufacture.length; i++) {
   console.log(`
   -------------Details-------------------------
Company:: ${jsonObj.manufacture[i].company}
Model No:: ${jsonObj.manufacture[i].modelno}
Price:: ${jsonObj.manufacture[i].price}
Quantity:: ${jsonObj.manufacture[i].quantity}
===========Description==================
General :: ${jsonObj.manufacture[i].description.general}
Tech : Cpu => ${jsonObj.manufacture[i].description.techinical.cpu}
Tech : RAM => ${jsonObj.manufacture[i].description.techinical.ram}


   `)
    
}