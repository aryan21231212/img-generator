let key = "nU15awnYJ6jdshGU5PFPN4lvXuxsW2nBwr25npiF-dE";
let url = "https://api.unsplash.com/search/photos?page=1&query=office";

let screen = document.querySelector("#search")
let button = document.querySelector("button")
let img_container = document.querySelector("#img");



button.addEventListener('click',async ()=>{
    if(screen.value === ''){
        alert("Enter the value")
    }
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${screen.value}&client_id=${key}`)
    let data = await response.json();
    results(data)
   
})

function results(data){
    img_container.innerHTML = ''
    data.results.forEach(element => {
        let img = document.createElement('img')
        img.src = element.urls.regular
        img_container.appendChild(img)
        
    });
}