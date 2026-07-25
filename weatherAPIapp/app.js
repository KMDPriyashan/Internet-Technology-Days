const apiKey = "3fc363cce9aa470cb7872322262507";
const baseUrl = "http://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=panadura`).then(res => res.json()).then(data => {
    //console.log(data);

    document.getElementById("contentSection").innerHTML=`
        <div>
                <h1>${data.current.condition.text}</h1>
                <h1>${data.location.name}</h1>
                <img src="${data.current.condition.icon}" alt>
                <p>${data.location.country}</p>
                <p>${data.current.temp_c}</p>
            </div>
    `
})

function btnSearchOnAction(){
    let txtUser = document.getElementById("txtSearch").value;
    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUser}`).then(res => res.json()).then(data => {
    console.log(data);

    document.getElementById("contentSection").innerHTML=`
        <div>
                <h1>${data.current.condition.text}</h1>
                <h1>${data.location.name}</h1>
                <img src="${data.current.condition.icon}" alt>
                <p>${data.location.country}</p>
                <p>${data.current.temp_c}</p>
            </div>
    `
})
}
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
    console.log(position.coords.altitude);
    console.log(position.coords.longitude);
})

