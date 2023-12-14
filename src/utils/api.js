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

export const getCommentsByArticleId = (articleId) => {
  const baseUrl = `https://aditya-nc-news.onrender.com/api/articles/${articleId}/comments`;
  return axios.get(baseUrl).then((response) => {
    return response.data.comments
  });
};


export const postComment = (articleId, commentBody) => {
  const newComment = {username: 'tickle122', body: commentBody}
  const baseUrl = `https://aditya-nc-news.onrender.com/api/articles/${articleId}/comments`;
  return axios.post(baseUrl, newComment).then((response) => {
    return response.data.comment
  });
};
export const patchArticle = (articleId, incValue) => {
  const baseUrl = `https://aditya-nc-news.onrender.com/api/articles/${articleId}`;
  const patchData = { inc_votes: incValue }
  return axios.patch(baseUrl, patchData).then((response) => {
    return response.data.article

  });
};

export const deleteComment = (commentId) => {
  const baseUrl = `https://aditya-nc-news.onrender.com/api/comments/${commentId}`;
  return axios.delete(baseUrl).then((response)=> {
    return response.rowCount
  } )

};