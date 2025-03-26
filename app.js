let key = "cc8d4149e9ea4ef3a36b22fe84e75440";
let carddata = document.querySelector(".carddata");
let searchbtn = document.getElementById("searchbtn");
let inputdata = document.getElementById("inputdata");


const getdata = async(input)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsondata = await res.json();
    // console.log(jsondata.articles[0].title);
    carddata.innerHTML = ``;
    jsondata.articles.forEach((article) => {
        // if(!article.urlToImage) continue;
        let divs = document.createElement("div");
        divs.classList.add("card");
        carddata.appendChild(divs);
    
        divs.innerHTML = `
    
            <img src="${article.urlToImage}" alt="">
            <h3>${article.title}</h3>
            <p>${article.description.slice(0,140)+"...."}</p>
    
        `
    });


   

}

window.addEventListener("load",()=>{
    getdata("india");
})

searchbtn.addEventListener("click",function(){
    let inputtext = inputdata.value;
    getdata(inputtext);

})

