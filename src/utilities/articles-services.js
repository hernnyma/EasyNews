import * as articlesAPI from './articles-api'

export async function getArticles() {
    const articles = await articlesAPI.getArticles();
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