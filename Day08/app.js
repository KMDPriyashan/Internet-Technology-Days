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

