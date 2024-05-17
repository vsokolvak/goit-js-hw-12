import axios from "axios";


const URL = 'https://pixabay.com/api/?';
const KEY = '37903725-9b007c08cd936d7b1a7a439ee';
const per_page = 15;

export const getImg = async (serchText, serchCategory, page = 1) => {

    const params = {
      key: KEY,
      q: serchText,
      image_type: 'photo',
      category: serchCategory,
      orientation: 'horizontal',
      safesearch: 'false',
      page: page,
      per_page,
    };

    return await axios.get(URL, {params})

}
