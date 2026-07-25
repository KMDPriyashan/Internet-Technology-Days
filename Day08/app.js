//localStorage.clear()


//value set karanane mehema meke thiyanne key , value format ekat athama thiyanne 
localStorage.setItem("name","Dulash");
localStorage.setItem("address","Gampaha")
localStorage.setItem("Age","25")
localStorage.setItem("ids",{"id":"c001" , "id": "Coo2"})


//items remoe laranne meken methana denne key eka thama 
localStorage.removeItem("ids")


//get karaganne mehema values
let getName = localStorage.getItem("address")
console.log(getName)

//object ekak local storage ekata daganne ,ekemai
let customer = {
    name: "Dulash",
    address: "Gampaha",
    Age: 25
}
//meken thama string ekak vidiyata convert karaganne 
let stringcustomer = JSON.stringify(customer);

localStorage.setItem("Customers",stringcustomer);

let getCustomer = localStorage.getItem("Customers");

let jsoncustomer = JSON.parse(getCustomer);
console.log(jsoncustomer);

