export const getGifs = async (category) => {
    const api_key = 'OkpfeRLseOMtrhFGqsxzHs6TbASjdLUU';
    // Se agrego https
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
    });
    return gifs;
};

export default getGifs;