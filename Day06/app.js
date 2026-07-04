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

let student2 = {
    name: "John Doe",
     age: 12 
    
};

console.log(student2);