// let customer = {
//     name: "Jone",
//     age: 21,
//     address: "Gampaha",
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: "500/="
//         },
//         {
//             id: 2,
//             name: "item2",
//             price: "300/="
//         }
//     ],
//     father:{
//         name: "Wasantha",
//         age: 55,
//         adddress: "gampaha"
//     }
// };

// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.father.name);

// console.log(document.head);

// let heading = document.getElementById("heading1");
// heading.innerText="Dulash";
let count = 0;
let value = document.getElementById("values");
function addvalue(){
    count++;
    value.innerText= "Update value > "+count;
    console.log("Clicked..");
}

function removevalue(){
    count--;
    value.innerText= "Update value > "+count;
    console.log("Clicked..");
}