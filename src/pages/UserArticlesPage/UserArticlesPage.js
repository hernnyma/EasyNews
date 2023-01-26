import * as userServices from '../../utilities/users-service'
import * as articlesServices from '../../utilities/articles-services'
import UserArticle from '../../components/UserArticle/UserArticle'
import { useState } from 'react'

export default function UserArticlesPage() {
  const [userArticles, setUserArticles] = useState([])

  const article = userArticles.map((element,idx) => (<UserArticle  title={element.header} link={element.articlelink} img={element.articleimg} idx={element._id} note={element.notes}/>))

  async function handleCheckToken() {
    let expDate = userServices.checkToken()
    console.log(expDate)
  }

  async function handleGetArticles() {
    const userArticlesArray = await articlesServices.getUserArticles()
    setUserArticles(userArticlesArray)
  }

    return (
      <div className="UserArticlesPage">
        <h1>UserArticlesPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        <button onClick={handleGetArticles}>Get my Article/Notes</button>
        {article}
      </div>
    );
  }