const url = "https://restcountries.com/v3.1/all";

async function fetchData() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        let j = 0;
        for(let i = 0;i<data.length;i++){
          
        
              j++;
            const element = document.getElementById("document");
           
            const value = data[i];
            const HTML = `<div class = 'card'><h3>${j} <img src=${value?.flags?.png} /> 
            ₦ame → ${value?.name?.common}🚩<br>
            €apital → ${value?.capital}<br>
            ₹egion → ${value?.region} <br>
            ₱opulation → ${value?.population} </h3></div>`;
          
            // const HTML = `<div class = 'card'><h3> ${value?.name?.common}</h3></div>`;
            // const HTML = `<div class = 'card'><h3> ${value?.name?.common}</h3></div>`;
            element.innerHTML += HTML
            
            // console.log(common.name.population);
        }
       
    }catch (error){
        console.log("----------error---------:", error.message);
    }
    
}
// const element = document.getElementsByClassName("document");
// let common = 0;
// for(let i = 1;i<=url.length;i++){
//     const firstvalue = url[i].common;
//     const name1 = ("firstvalue",firstvalue);
//     element.innerHTML += name1;

// }