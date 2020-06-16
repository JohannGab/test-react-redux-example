import React, { useState } from "react"
import { connect } from "react-redux"

import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import { simulateHttpRequest, deleteArticle, editArticle } from "../store/actionCreators"


const Articles = ({ articles, saveArticle, deletePost, edit }) => {

  const [editArticle, setEditArticle] = useState(false)

  const deletePostCallBack = (post) => {
    deletePost(post.id)
  }


  return (
    <div>
      <AddArticle 
        saveArticle={saveArticle} 
      />
      {articles.map(article => (
        <Article 
          key={article.id}
          article={article}
          deletePostCallBack={(article) => deletePostCallBack(article)}
          editArticle={editArticle}
          edit={edit}
          setEditArticle={setEditArticle}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article => dispatch(simulateHttpRequest(article)),
    deletePost: (id) => dispatch(deleteArticle(id)),
    edit: (article) => dispatch(editArticle(article)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)