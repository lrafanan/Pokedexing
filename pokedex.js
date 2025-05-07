window.addEventListener("load", async function(){ 
    const output = document.getElementById("allPoke");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0");

    if (!response.ok)
    {
        throw new Error("Could not fetch resource");
    }

    const data = await response.json(); // This makes it as a usable object

    for (const pokemon of data.results)
    {
        const pokeResponse = await fetch(pokemon.url); // This fetches the pokemon using its url from the API
        const pokeData = await pokeResponse.json(); // This now has all the data it wants from that particular pokemon
        const pokeDexnum = pokeData.id;
        const pokeName = pokeData.name; 
        const pokeSprite = pokeData.sprites.front_default;

        const space = document.createElement("div");
        /*space.innerHTML = `<p>${pokeDexnum} ${pokeName}</p>
        <a href="display.html" class = "pokelink"> <img id = "pokePics" src="${pokeSprite}" alt="${pokeName}"></img></a>`; */
        space.innerHTML = `<a href="display.html" class = "pokelink"> 
        <img id = "pokePics" src="${pokeSprite}" alt="${pokeName}"></img>
        <p id = "PokeName" >${pokeDexnum} ${pokeName}</p> </a>`;
        output.appendChild(space);

        const link = space.querySelector(".pokelink");
        // When the pokemon gets clicked on the webpage it saves the data of that pokemon to pdata.. 
        link.addEventListener("click", function()
        {
            sessionStorage.setItem("pdata", JSON.stringify(pokeData));
        });
    }  
});