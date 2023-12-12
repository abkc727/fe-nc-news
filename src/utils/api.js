import axios from "axios";

export const getArticles = () => {
  const baseUrl = `https://aditya-nc-news.onrender.com/api/articles`;
  return axios.get(baseUrl).then((response) => {
    return response.data.articles;
  });
};


export const getArticleById = (articleId) => {
  const baseUrl = `https://aditya-nc-news.onrender.com/api/articles/${articleId}`;
  return axios.get(baseUrl).then((response) => {
    return response.data.article
  });
};
