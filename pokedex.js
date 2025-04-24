window.addEventListener("load", async function(){
    const output = document.getElementById("allPoke");

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");

    if (!response.ok)
    {
        throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    for (const pokemon of data.results)
    {
        const pokeResponse = await fetch(pokemon.url);
        const pokeData = await pokeResponse.json();
        const pokeDexnum = pokeData.id;
        const pokeName = pokeData.name; 
        const pokeSprite = pokeData.sprites.front_default;

        const space = document.createElement("div");
        space.innerHTML = <p>${pokeDexnum} ${pokeName}</p>; 
        space.innerHTML = <img src="${sprite}" alt="${name}"></img>;
        output.appendChild(space);
    }
});