let button = document.querySelector("#searchButton")
let output = document.querySelector("#searchBox")
button.addEventListener("click", displayData())

// button.addEventListener("click", fetch(`https://api.inaturalist.org/v1/places/autocomplete?q=${output}`))
//   .then(response => response.json()) // Convert the response to JSON
//   .then(data => displayData(data)) // Do something with the data
//   .catch(error => console.error('Error:', error)) // Handle any errors

  function displayData(){
    document.querySelector(".dataDisplay").textContent = "hi"
  }