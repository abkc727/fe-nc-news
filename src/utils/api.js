import axios from 'axios';

export const getArticles = () => {
    const baseUrl = `https://aditya-nc-news.onrender.com/api/articles`;
    return axios
      .get(baseUrl)
      .then((response) => {
        return response.data.articles
      });
    }
  