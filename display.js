// Lyanne - Getting data from session storage and parse the string back into an object 
let data = JSON.parse(sessionStorage.getItem("pdata"));
        // Displays data from pokeapi
        if(data) {
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        const nameElement = document.getElementById("pokemonName");
        nameElement.textContent = data.forms[0].name;
        
        const height = document.getElementById("pokemonHeight");
        height.textContent = data.height + " dm"; // Mauro added units of easurements
        
        const weight = document.getElementById("pokemonWeight");
        weight.textContent = data.weight + " dg"; // Mauro added units of measurements
        
        const type = document.getElementById("pokemonType");
        let typeNames = "";
        for (let i = 0; i < data.types.length; i++)
        {
            typeNames += data.types[i].type.name;
            if (i < data.types.length - 1)
            {
                typeNames += " ";
            }
        }
        type.textContent = typeNames;
        
        const abilities = document.getElementById("pokemonAbilities");
        let abilityNames = "";
        let hidden = "";
        for (let i = 0; i < data.abilities.length; i++) {
            if (data.abilities[i].is_hidden == true)
            {
                hidden = "<br> Hidden Ability: ";
            }
            abilityNames += hidden + data.abilities[i].ability.name;
            if (i < data.abilities.length - 1) {
                abilityNames += ", ";
            }
        }
        abilities.innerHTML= abilityNames;
        // Mauro added this loop
        const moves = document.getElementById("pokemonMoves");
        let moveNames = "";
        for (let i = 0; i < data.moves.length; i++)
        {
            moveNames += data.moves[i].move.name + "<br>";
            if (i < data.moves.length - 1)
            {
                moveNames += " ";
            }
        }
        moves.innerHTML = moveNames;

        const stats = document.getElementById("pokemonStats");
        let pokeStats = "";
        for (let i = 0; i < data.stats.length; i++)
        {
            pokeStats += data.stats[i].stat.name + ": " + data.stats[i].base_stat + "<br>";
            if (i < data.stats.length - 1)
            {
                pokeStats += " ";
            }
        }
        stats.innerHTML = pokeStats;
        //sessionStorage.clear();
    }