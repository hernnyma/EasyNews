import * as articlesAPI from './articles-api'

export async function getArticles() {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const articles = await articlesAPI.getArticles();
    // Baby step by returning whatever is sent back by the server
    // Persist the "token"
    return articles;
  }

  export async function getUserArticles() {
    const articles = await articlesAPI.getUserArticles();
    return articles
  }

  export async function saveArticle(article) {
    const savedArticle = await articlesAPI.saveArticle(article);
    return savedArticle
  }

  export async function updateNote(updateNote) {
    const noteUpdated = await articlesAPI.updateNote(updateNote)
    return noteUpdated
  }

  export async function deleteArticle(id) {
    await articlesAPI.deleteArticle(id)
  }