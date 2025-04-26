fetchData(); // Lyanne - used to show the pokemon on display.html

// Lyanne's function - Redirects to display.html with the pokemonName inputed by the user through the URL
async function openDisplay() {
    const text = document.getElementById("pokemonName").value;
    const encodedText = encodeURIComponent(text);
    
    window.open(`display.html?data=${encodedText}`, "_blank");
}

async function fetchData() // Mauro did this whole function
{
    // Lyanne - Added these lines to get the Name through the URL 
    const params = new URLSearchParams(window.location.search);
    const pokemonName = params.get("data"); 

    try
    {
        //const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok)
        {
            document.getElementById("pokemonName").textContent = pokemonName + " is not real."; // Lyanne - Added some Error Handling
            throw new Error("Could not fetch resource");

        }

        const data = await response.json();
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        // Lyanne - Displays name of Pokemon (will display more elements later from the API)
        const nameElement = document.getElementById("pokemonName");
        nameElement.textContent = data.forms[0].name;

    }
    catch(error)
    {
        console.error(error);
    }
}
