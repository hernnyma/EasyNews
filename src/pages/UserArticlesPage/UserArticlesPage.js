import * as userServices from '../../utilities/users-service'
import * as articlesServices from '../../utilities/articles-services'
import { useState } from 'react'

export default function UserArticlesPage() {
  const [userArticles, setUserArticles] = useState([])

  async function handleCheckToken() {
    let expDate = userServices.checkToken()
    console.log(expDate)
  }

  async function handleGetArticles() {
    const userArticlesArray = await articlesServices.getUserArticles()
    setUserArticles(userArticlesArray)
    console.log(userArticles)
  }

    return (
      <div className="UserArticlesPage">
        <h1>UserArticlesPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        <button onClick={handleGetArticles}>Get my Article/Notes</button>
      </div>
    );
  }