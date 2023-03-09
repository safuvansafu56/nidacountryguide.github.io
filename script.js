let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click",() => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(
        //     Object.values(data[0].languages).toString().
        //     split(",").join(",")
        // );
        result.innerHTML = `
          <img src="${data[0].flags.svg}" class="flag-img">
          <h2> ${data[0].name.common} </h2>
          <div class="wrapper">
              <div class="data-wrapper">
                 <h4 class ="effects">Capital:</h4>
                 <span class ="effects"><b>${data[0].capital[0]}<b></span>
              </div>      
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                 <h4 class ="effects">Continent:</h4>
                 <span class ="effects"><b>${data[0].continents}</b></span>
              </div>      
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                 <h4 class ="effects">Population:</h4>
                 <span class ="effects"><b>${data[0].population}</B</span>
              </div>      
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                 <h4 class ="effects">Currency:</h4>
                 <span class ="effects"><b>${data[0].currencies[Object.keys(data[0].currencies)].name} -${Object.keys(data[0].currencies)[0]}</b></span>
              </div>      
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                 <h4 class ="effects">Common Languages:</h4>
                 <span class ="effects"><b>${Object.values(data[0].languages).toString().
                    split(",").join(",")}</b></span>
              </div>      
          </div>
        `;

      }).catch(()=>{
          if(countryName.length == 0){
              result.innerHTML =`<h3>The input field cannot be empty</h3>`;
          }
          else{
            result.innerHTML=`<h3>Please enter a valid country name. </h3`
          }
      })
    
});


var input = document.getElementById("country-inp");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});