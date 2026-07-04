// console.log("Hello, World!");


// // mejem hadannath puluvan class ekak deela eken object eka coll karala object hadannath puluvan 
// class customer {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let student1 = new customer("John Doe", 12);
// console.log(student1);

// // second method --> eken venne class ekak hadanna one na object ekak hadala eken value assign karanna puluvan 


// //me thiyanne object ekakat value assign karanne mehema name saha age kiyanne property venne ekata value assign karanna puluvan
// let student2 = {
//     name: "perera",
//     age: 42,
//     items: [{
//         id: 1,
//         name: "banana"
//     }, {
//         id: 2,
//         name: "apple"
//     }, {
//         id: 3,
//         name: "orange"
//     }],
//     address: {
//         name: "gampaha",
//         city: "kandy"
//     },  //meka thama object ekak athule object ekak ganna eka thama 
//     values: [12, 34, 56]

// };

// console.log(student2); //meken thama vakue assign karapu object eka print wenne
// console.log(student2.name);
// console.log(student2.items[0].name);
// console.log(student2.address.city);//meken thama object ekata assign karapu name property eka print wenne

// // class Customer{
// //     name;
// //     age;
// //     address;

// //     constructor(name, age, address){
// //         this.name = name;
// //         this.age = age;
// //         this.address = address;
// //     }
// //     getName(){
// //         return this.name;
// //     }
// //     setName(name){
// //         this.name = name;
// //     }
// // }

// // let customer1 = new Customer("Sharadha", 20, "Bangalore");
// // console.log(customer1);
// // console.log(customer1.getName());

// // ---------------------------------------------

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20

//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);

// console.log(customer2.items[0].variants[0].name); // undefined


// DOM manupulation (document object modele) e kiyanne html eke thiyena properties apita js file eke idan coll karanna puluvan 

// document.write("<h1>Hello, World! 02</h1>");
// console.log(document);
//console.log(heading);

//dom monipulation commit
// console.log(document.title);

// let heading = document.getElementById("heading");
// heading.innerText = "Dulash Priyashan";



//heading change karanna puluvan function ekak hadala eken heading eka change karanna puluvan countable ekth ekakama 
// let heading = document.getElementById("heading");
// let count = 0;
// function changeHeadingup(){
    
//     count++;
//     heading.innerText = "Current value >"+count; 
//     console.log("Clicked..");
// }

// function changeHeadingDown(){
//     count--;
//     heading.innerText = "Current value >"+count;
//     console.log("Clicked..");
// }

// let heading = document.getElementById("heading");

// function changename(){
//     let textinput = document.getElementById("inputField");
//     heading.innerText = textinput.value;
//     console.log(inputField.value);

// }



//meke simple calculater ekak using + and - butten click 
// let lable = document.getElementById("output");


// function addnumber(){
//     let num1 = document.getElementById("getNum1").value;
//     let num2 = document.getElementById("getNum2").value;

//     let total = parseInt(num1) + parseInt(num2);
//     lable.innerText = total;


// }


// function minusnumber(){
//     let num1 = document.getElementById("getNum1").value;
//     let num2 = document.getElementById("getNum2").value;

//     let total = parseInt(num1) - parseInt(num2);
//     lable.innerText = total;


// }

let customerlist = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtname").value;
    let txtAddress = document.getElementById("txtaddress").value;
    let txtAge = document.getElementById("txtage").value;
    let txtEmail = document.getElementById("txtemail").value;
    let txtSalary = document.getElementById("txtsalary").value;

    let customer ={
        name:txtName,
        address: txtAddress,
        age: txtAge,
        email: txtEmail,
        salary: txtSalary
    }


    customerlist.push(customer);
    loadData();
    console.log(customerlist);

    
}

function loadData(){
    let tblCustomer = document.getElementById("tblCustomer");

    let body="";

    for(let i=0;i<customerlist.length;i++){
        body+= `<tr>
            <th>${customerlist[i].name}</th>
            <th>${customerlist[i].address}</th>
            <th>${customerlist[i].age}</th>
            <th>${customerlist[i].email}</th>
            <th>${customerlist[i].salary}</th>
        </tr>` ;
    }
    
    tblCustomer.innerHTML=body;

    console.log(tblCustomer);
}






