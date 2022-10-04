export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bbbaec646amsh7c7bce97ac5b99cp17af23jsn7ef0f58ec77e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bbbaec646amsh7c7bce97ac5b99cp17af23jsn7ef0f58ec77e",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
