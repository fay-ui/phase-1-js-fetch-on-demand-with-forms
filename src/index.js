const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);
const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input value
      const input = document.querySelector("input#searchByID").value;
  
      // Fetch the movie data from the JSON server using the input value
      fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Movie not found'); // Handle invalid ID
          }
          return response.json();
        })
        .then((data) => {
          // Access the title and summary elements
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the content with the fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error("Error fetching movie:", error);
          // Optionally handle the error by showing a message to the user
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Movie not found";
          summary.innerText = ""; // Clear the summary
        });
    });
  };
  
  // Wait for the DOM to load before initializing
  document.addEventListener("DOMContentLoaded", init);
  