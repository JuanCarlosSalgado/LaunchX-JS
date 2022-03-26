const fetchPokemon = () => {
    const pokeName = document.getElementById("pokename");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imagenes/pokeball.png");
            Namepokemon();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeName = data.name;
        //Stats
        let hp = data.stats[0].base_stat;
        let atq = data.stats[1].base_stat;
        let def = data.stats[2].base_stat;
        let vel = data.stats[5].base_stat;
        let atqs = data.stats[3].base_stat;
        let defs = data.stats[4].base_stat;

        let tippos;
        for(var i=0;i<data.types.length;i++){
        tippos += data.types[i].type.name;
        tippos += '<br>';
        }

        let movimientos;
        for(var i=0;i<data.moves.length;i++){
        movimientos += data.moves[i].move.name;
        movimientos += '<br>';
        }
        
        console.log(movimientos)
        Move(movimientos);
        //pokeTypes = '';
        //for (let value of total) {
        // let movimiento1 = data.moves[value].move.name;
        //pokeTypes = pokeTypes.concat(movimiento1);
        //value += 1;

        //}

        console.log(pokeImg);
        pokeImage(pokeImg);
        Namepokemon(pokeName);
        Nametype(tippos);
        Pokestats(hp, atq, def, vel, atqs, defs);
    })

}

//fetchPokemon();
//let pkname = data.name

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokename");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);

}

const Namepokemon = (nombre) => {
    document.getElementById("namepoke").innerHTML = nombre;
}

const Pokestats = (ps, atq, defensa, velocidad, atqs, defs) => {
    document.getElementById("hp").innerHTML = "HP";
    document.getElementById("hpstat").innerHTML = ps;
    document.getElementById("atq").innerHTML = "Ataque";
    document.getElementById("atqstat").innerHTML = atq;
    document.getElementById("def").innerHTML = "Defensa";
    document.getElementById("defstat").innerHTML = defensa;
    document.getElementById("vel").innerHTML = "Velocidad";
    document.getElementById("velstat").innerHTML = velocidad;
    document.getElementById("atqs").innerHTML = "At. Especial";
    document.getElementById("atqsstat").innerHTML = atqs;
    document.getElementById("defs").innerHTML = "Def. Especial";
    document.getElementById("defsstat").innerHTML = defs;
}

const Visible = () => {
    var x = document.getElementById("Ocultar");
    x.style.display = "block";
}

const VisibleM = () => {
    var x = document.getElementById("move");
    x.style.display = "block";
    var y = document.getElementById("Stats");
    y.style.display = "none";
}

const Nametype = (type) => {
    type = type.replace('undefined','')
    document.getElementById("nametype").innerHTML = type;
}

const Move = (nmove) => {
    nmove = nmove.replace('undefined','')
    document.getElementById("move").innerHTML = nmove;
}




