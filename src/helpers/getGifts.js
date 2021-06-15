export const getGifts = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0OEh5CpUuGJrjADfJ2H9QG1NBWck2nGr`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            author: img.username,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });
    
    return gifs;
}