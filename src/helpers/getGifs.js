export const getGifs = async (category) => {
  const apiKey = '8oTNKO16X1SHpNf8RvUBkhqUWupgJYN7';

  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;

  const res = await fetch(url);

  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
