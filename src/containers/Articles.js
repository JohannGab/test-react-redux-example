import React from "react"
import { connect } from "react-redux"

import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import { simulateHttpRequest, deleteArticle } from "../store/actionCreators"


const Articles = ({ articles, saveArticle, deletePost }) => {

  const deletePostCallBack = (post) => {
    console.log('hello', post);
    deletePost(post.id)
  }

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article 
          key={article.id}
          article={article}
          deletePostCallBack={(article) => deletePostCallBack(article)} 
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
    deletePost: (id) => dispatch(deleteArticle(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)