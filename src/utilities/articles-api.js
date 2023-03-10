

// Add the following import
import sendRequest from './send-request';
const BASE_URL = '/api/articles';

// Refactored code below
export function getArticles(articles) {
  return sendRequest(BASE_URL, 'GET');
}

export function saveArticle(article) {
    return sendRequest(BASE_URL + '/save', 'POST', article)
}

export function getUserArticles() {
    return sendRequest(BASE_URL + '/user')
}

export function updateNote(updateNote) {
    return sendRequest(BASE_URL + '/updateNote', 'POST', updateNote)
}
export function deleteArticle(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST')
}