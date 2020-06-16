import React from "react"
import "./editArticle.css"

const EditArticle = ({ handleTitleEdit, handleBodyEdit, article }) => {
  return (
    <span>
      <input 
        type="text"
        value={article.title} 
        onChange={(event) => handleTitleEdit(event, article)}
        className='textTitle'
      />
      <input
        type="text"
        value={article.body} 
        onChange={(event) => handleBodyEdit(event, article)}
        className='textBody'
      />
  </span>
  )
}

export default EditArticle