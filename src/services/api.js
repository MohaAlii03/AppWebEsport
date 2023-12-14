const getGameById = async (id) =>  {
    const infos = new Request('http://localhost:3000/games', {
        method: 'get',
    })

    const req = await fetch(infos);
    const res = await req.json();

    console.log(res);
    // boucler sur la réponse (filter)
    
}

export { getGameById };
