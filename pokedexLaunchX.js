const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    //Al link de la API, le estamos metiendo al final la variable pokeInput, porque es el nombre del Pokémon que el usuario está digitando en la página
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; 
     //fetch va a ir con el servidor que le metimos y va a decirle si le puede dar la información que tiene ahí
    fetch(url).then((res)=> {
        if (res.status != "200"){
            console.log(res);
            pokeImage("https://i.pinimg.com/originals/3a/da/78/3ada7822f8739e49ae928b824cf45392.gif");
        }
        else{
            return res.json()
        }
    }).then((data) => {
        console.log(data);
        //Creamos la variable pokeImg para que de la data solo nos muestre la imagen que queremos
        let pokeImg = data.sprites.front_default; //Ahí se encuentra la imagen que queremos
        console.log(pokeImg);
        pokeImage(pokeImg); //A la función de cambiar la imagen, le estamos metiendo el valor de la variable pokeImg, que pues es el url del sprite de nuestro Pokémon
        //Voy a crear una variable para los tipos
        let pokeTypes = data.types.map(typ => typ.type.name);
        console.log(pokeTypes);
        pokeType(pokeTypes);
        //Voy a crear una variable para las estadísticas
        let pokeStats = data.stats[0].stat.name + "=" + data.stats[0].base_stat + ", " +
                        data.stats[1].stat.name + "=" + data.stats[1].base_stat + ", " +
                        data.stats[2].stat.name + "=" + data.stats[2].base_stat + ", " +
                        data.stats[3].stat.name + "=" + data.stats[3].base_stat + ", " +
                        data.stats[4].stat.name + "=" + data.stats[4].base_stat + ", " +
                        data.stats[5].stat.name + "=" + data.stats[5].base_stat;
        console.log(pokeStats);
        pokeStat(pokeStats);
        //Voy a crear una variable para los movimientos
        let pokeMoves = data.moves.map(mov => mov.move.name);
        console.log(pokeMoves);
        pokeMove(pokeMoves);
    })
}

//Función para cambiar la imagen 
const pokeImage = (url) => { //Acá si recibe un url porque justo lo que queremos cambiar es el url que está en el atributo src del html, que tenía originalmente, que era el de la pokebola
    const pokeImg = document.getElementById("pokeImg") //Ese id de pokeImg es el que está asociado a nuestra etiqueta img del html, 
    //NO CONFUNDIR CON LA VARIABLE QUE DECLARAMOS ARRIBA PARA GUARDAR EL SPRITE PROVENIENTE DE LA DATA DEL OBJETO
    pokeImg.src = url; //El atributo que queremos cambiar es el src, y ahora le vamos a poner el valor del url nuevo que está recibiendo la función
}

//Función para escribir los tipos del Pokémon
const pokeType = (tipo) => {
    const pokeType = document.getElementById("pokeType")
    pokeType.value = tipo;
}

//Función para escribir las estadísticas del Pokémon
const pokeStat = (estadistica) => {
    const pokeStat = document.getElementById("pokeStat")
    pokeStat.value = estadistica;
}

//Función para escribir los movimientos del Pokémon
const pokeMove = (movimiento) => {
    const pokeMove = document.getElementById("pokeMove")
    pokeMove.value = movimiento;
}
