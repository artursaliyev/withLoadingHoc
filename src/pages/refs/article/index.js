import React from "react";
import withLoading from "hoc/withLoading";
import { connect } from "react-redux";
import { getArticles } from "pages/refs/article/articleSlice";

export const Users = ({ articles, getArticles }) => {
  return (
    <div>
      Articles
      {articles.map((article) => (
        <div key={article.id}>{article.name}</div>
      ))}
      <button onClick={getArticles}>getArticles</button>
    </div>
  );
};

const mapStoreToProps = ({ refs: { article } }) => ({
  isFeching: article.isFeching,
  articles: article.all,
});
const mapDispatchToProps = { getArticles };

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withLoading("isFeching", "getArticles")(Users));
