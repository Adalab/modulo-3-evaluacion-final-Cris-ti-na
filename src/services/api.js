const getDataFromApi = () => {
    console.log('Pidiendo datos...');
    return fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => {
        //console.log(data.results);
        const results = data.results;
        return results;

        //const results = data.results.map((result, index) => {
        //    result.id = 'id' + index;
        //    return result;
        //});
        //return results;
    });
}

export default getDataFromApi;