console.log('--- script running ---')

const getPokemons = async () => {
  const url = 'http://localhost:4321/api/pokemon/index.json'
  const response = await fetch(url,{
    method: "GET"
  });
  const myJson = response
  console.log(myJson);
}

getPokemons()