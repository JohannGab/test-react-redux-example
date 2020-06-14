import React from "react"
import "./Article.css"

const article = ({ article, deletePostCallBack }) => {

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button onClick={()=> deletePostCallBack(article)}>Supprimer</button>
    </div>
  )
}

export default article