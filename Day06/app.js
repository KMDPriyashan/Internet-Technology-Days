console.log("Hello, World!");


// mejem hadannath puluvan class ekak deela eken object eka coll karala object hadannath puluvan 
class customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new customer("John Doe", 12);
console.log(student1);

// second method --> eken venne class ekak hadanna one na object ekak hadala eken value assign karanna puluvan 


//me thiyanne object ekakat value assign karanne mehema name saha age kiyanne property venne ekata value assign karanna puluvan
let student2 = {
    name: "perera",
    age: 42,
    items: [{
        id: 1,
        name: "banana"
    }, {
        id: 2,
        name: "apple"
    }, {
        id: 3,
        name: "orange"
    }],
    address: {
        name: "gampaha",
        city: "kandy"
    },  //meka thama object ekak athule object ekak ganna eka thama 
    values: [12, 34, 56]

};

console.log(student2); //meken thama vakue assign karapu object eka print wenne
console.log(student2.name);
console.log(student2.items[0].name);
console.log(student2.address.city);//meken thama object ekata assign karapu name property eka print wenne

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);
// console.log(customer1.getName());

// ---------------------------------------------

let customer2 = {
    name: "John",
    age: 25,
    address: "New York",
    salary: 50000,
    items: [
        {
            id: 1,
            name: "item1",
            price: 100,
            variants: [
                {
                    id: 1,
                    name: "variant1",
                    price: 10
                },
                {
                    id: 2,
                    name: "variant2",
                    price: 20

                }
            ]
        }, {
            id: 2,
            name: "item2",
            price: 200
        }, {
            id: 3,
            name: "item3",
            price: 300
        }
    ],
    father: {
        name: "Doe",
        age: 50,
        address: "New York"
    }
};
console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.items[2].name);
console.log(customer2.father.name);

console.log(customer2.items[0].variants[0].name); // undefined