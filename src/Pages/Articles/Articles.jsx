import React, { useEffect } from "react";
import ArticleBox from "./../../Components/ArticleBox/ArticleBox";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesFromServer } from '../../Redux/articles/articles'
import "./Articles.css";

export default function Articles() {
  const articles = useSelector(store => store.articles)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(articles);
    dispatch(getAllArticlesFromServer('articles'))
  }, [])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <TabMenu />
        <div className="articles">
          <div className="articles__list">
            {articles.length ? (
              <>
                {articles.map(article => (
                  <ArticleBox {...article} key={article._id} />
                ))}
              </>
            ) : (
              <div className="alert alert-danger">هیچ مقالیه ایی یافت نشد</div>
            )}
          </div>
        </div>

        <div className="new-article">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-article"
            id="btn-modal-new-article"
          >
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </div>
  );
}