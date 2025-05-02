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
        height.textContent = data.height + "dm";
        
        const weight = document.getElementById("pokemonWeight");
        weight.textContent = data.weight + "dg";
        
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
        abilities.textContent = abilityNames;
        // Mauro added this loop
        const moves = document.getElementById("pokemonMoves");
        let moveNames = "";
        for (let i = 0; i < data.moves.length; i++)
        {
            moveNames += data.moves[i].move.name;
            if (i < data.moves.length - 1)
            {
                moveNames += ",";
            }
        }
        moves.textContent = moveNames;
        sessionStorage.clear();
    }