let catDiv = document.getElementById('cat-pic')
getPicture();
    

catDiv.addEventListener("click", event => {
        getPicture();
})

function getPicture(){
    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(response => response.json())
    .then(cats => {
        cats.forEach(element => {
            catDiv.innerHTML = `<h3>Here is your cat, Sweetheart!</h3><img src="${element.url}" class="img-rounded img-responsive d-flex justify-content-center" alt="Super cat" />`
        });   
    })
}

// //getting HTML element, where we will place quote
// let quotesDiv = document.getElementById('quotes')

// //GET requesting Kanye quote from service
// fetch('https://api.kanye.rest')
// //Parsing response object into a json
// .then(response => response.json())
// //Getting value from JSON object and assigning quote value to html element
// .then(quote => {
//     quotesDiv.innerHTML += `<p>${quote.quote}</p>`
// })