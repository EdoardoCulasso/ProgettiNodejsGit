const somma = async () =>{
    await fetch('http://v2.jokeapi.dev/joke/Programming?type=single')
    .then(res => res.json())
    .then(json => console.log(json.joke));
}

somma().then(console.log("Edoardo")) //la esegue dopo aver fatto tutta la funzione somma