// //localStorage.clear()


// //value set karanane mehema meke thiyanne key , value format ekat athama thiyanne 
// localStorage.setItem("name","Dulash");
// localStorage.setItem("address","Gampaha")
// localStorage.setItem("Age","25")
// localStorage.setItem("ids",{"id":"c001" , "id": "Coo2"})


// //items remoe laranne meken methana denne key eka thama 
// localStorage.removeItem("ids")


// //get karaganne mehema values
// let getName = localStorage.getItem("address")
// console.log(getName)

// //object ekak local storage ekata daganne ,ekemai
// let customer = {
//     name: "Dulash",
//     address: "Gampaha",
//     Age: 25
// }
// //meken thama string ekak vidiyata convert karaganne 
// let stringcustomer = JSON.stringify(customer);

// localStorage.setItem("Customers",stringcustomer);

// let getCustomer = localStorage.getItem("Customers");

// let jsoncustomer = JSON.parse(getCustomer);
// console.log(jsoncustomer);

const orderList = [];

function btnaddOnaction() {
    let order = {
        id: document.getElementById("textorderId").value,
        name: document.getElementById("textordername").value,
        category: document.getElementById("textordercategory").value,
        count: document.getElementById("textordercount").value
    }

    orderList.push(order);
    localStorage.setItem("orderList", JSON.stringify(orderList));

    console.log(orderList[orderList.length - 1].id);
    alert("Added successfully !..");

}
function btnsearchOnaction() {
    let ordersList = JSON.parse(localStorage.getItem("orderList")) || [];
    
    let orders = ordersList.find(order => {
        return order.id == document.getElementById("textorderId").value;
    });
    
    if(orders) {
        document.getElementById("textordername").value = orders.name;
        document.getElementById("textordercategory").value = orders.category;
        document.getElementById("textordercount").value = orders.count;
        console.log(orders);
    } else {
        alert("Order not found!");
        // Clear the fields if not found
        document.getElementById("textordername").value = "";
        document.getElementById("textordercategory").value = "";
        document.getElementById("textordercount").value = "";
    }
}
function btndeleteOnaction() {
    let allorderList = localStorage.getItem("orderList");
    let orderId = document.getElementById("textorderId").value

    let index = orderList.findIndex(order =>{
        return order.id === orderId;
    })

    orderList.splice(index,1);
    localStorage.setItem("orderList", JSON.stringify(orderList))

    console.log(orderList);
    
    
}
function btnupdateOnaction() {
    let allorderList = localStorage.getItem("orderList");
    let orderId = document.getElementById("textorderId").value

    let index = orderList.findIndex(order =>{
        return order.id === orderId;
    })

    orderList

    
}
function btnclearonaction() {
    localStorage.clear();
    
}
function btnviewOnaction() {
    let ordersList = JSON.parse(localStorage.getItem("orderList"));
let body = " ";
ordersList.array.forEach(element => {
    body+=` <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.category}</td>
            <td>${element.count}</td>
        </tr> `
});

document.getElementById("tblOrder").innerHTML=body;
console.log(body);


}

