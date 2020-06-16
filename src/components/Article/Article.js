import React from "react"
import "./Article.css"
import EditArticle from "../EditArticle/editArticle";

const article = ({
  article,
  deletePostCallBack,
  editArticle,
  edit,
  setEditArticle 
}) => {

  const handleTitleEdit = (event, article) => {
    article.title = event.target.value;
    edit(article);
}

  const handleBodyEdit = (event, article) => {
    article.body = event.target.value;
    edit(article)
  } 

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <div className='modif'>
        <button 
          onClick={() => setEditArticle(!editArticle)}
          style={editArticle 
            ? {color: 'red', background: 'black'} 
            : {color: 'white', background: 'grey'}}
        >
            {editArticle ? 'Valider' : 'Modifier'}
        </button>
          {
            editArticle 
              ?
                <EditArticle
                  handleTitleEdit={handleTitleEdit}
                  handleBodyEdit={handleBodyEdit}
                  article={article}
                />
              : null
          }
        <p>ou</p>
        <button 
          onClick={()=> deletePostCallBack(article)}
          className='buttonDelete'
        >
          Supprimer
        </button>
      </div>
  
    </div>
  )
}

export default article