let pokemonName = null
async function fetchData() // Mauro did this whole function
{
    try
    {
        pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok || pokemonName == "")
        {
            window.alert("This pokemon does not exist");
            throw new Error("Could not fetch resource");
        }
        const data = await response.json(); // parses response into an object
        // Lyanne - Stores data in sessionstorage as a string then redirects to new page to display data
        sessionStorage.setItem("pdata", JSON.stringify(data));
        window.open("display.html"); 

        /*window.open("display.html"); 
        
        // Displays data from pokeapi
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        const nameElement = document.getElementById("pokemonName");
        nameElement.textContent = data.forms[0].name;
        
        const height = document.getElementById("pokemonHeight");
        height.textContent = data.height;
        
        const weight = document.getElementById("pokemonWeight");
        weight.textContent = data.weight;
        
        const type = document.getElementById("pokemonType");
        type.textContent = data.types[0].type.name;
        
        const abilities = document.getElementById("pokemonAbilities");
        let abilityNames = "";
        for (let i = 0; i < data.abilities.length; i++) {
            abilityNames += data.abilities[i].ability.name;
            if (i < data.abilities.length - 1) {
                abilityNames += ", ";
            }
        }
        abilities.textContent = abilityNames;*/

    }
    catch(error)
    {
        console.error(error);
    }
}

window.addEventListener("load", function() // Mauro - This is the function for pressing enter
{
    this.document.getElementById("fetchbtn").addEventListener("click", function()
    {
        if (pokemonName != null)
        {
            fetchData();
        }
    });
    this.document.getElementById("pokemonName").addEventListener("keypress", function(event)
    {
        if (event.key == 'Enter')
            {
                //openDisplay();
                fetchData(); 
            }
    });   
});
