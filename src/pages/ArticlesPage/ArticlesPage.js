import Article from '../../components/Article/Article'
import * as articlesServices from '../../utilities/articles-services'
import {useState, useEffect} from 'react'

export default function ArticlesPage() {
const [articles, setArticles] = useState([])

useEffect(function() {
  async function getArticles() {
    const articlearray = await articlesServices.getArticles()
    setArticles(articlearray)
  }
  getArticles()

}, [])

  const article = articles.map((element,idx) => (<Article  title={element.title} link={element.link} img={element.img} idx={idx}/>))

  // async function getArticles() {
  //   const articlearray = await articlesServices.getArticles()
  //   setArticles(articlearray)
  // }

    return (
      <div className="ArticlesPage">
        <h1>Articles</h1>
        <br/>
        {article}
      </div>
    );
  }