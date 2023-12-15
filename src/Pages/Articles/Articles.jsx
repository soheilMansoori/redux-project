import React, { useEffect, useState } from "react";
import ArticleBox from "./../../Components/ArticleBox/ArticleBox";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesFromServer, addNewArticleInServer } from '../../Redux/articles/articles'
import Modal from '../../Components/Modal/Modal'
import { Formik } from "formik";
import swal from 'sweetalert'
import "./Articles.css";

export default function Articles() {
  const [isShowAddNewArticleModal, setIsShowAddNewArticleModal] = useState(false)
  const articles = useSelector(store => store.articles)
  const dispatch = useDispatch()

  const closeAddNewArticleModal = () => setIsShowAddNewArticleModal(false)

  useEffect(() => {
    // console.log(articles);
    getAllArticles()
  }, [])

  function getAllArticles() {
    dispatch(getAllArticlesFromServer('articles'))
  }

  const addNewArticles = (newArticleBody) => {
    // console.log(newArticleBody);
    closeAddNewArticleModal()
    dispatch(addNewArticleInServer(newArticleBody))
    swal({
      title: 'مقاله جدید اضافه شد',
      icon: 'success',
      buttons: 'اوکی'
    }).then(() => getAllArticles())
  }


  return (
    <>
      {isShowAddNewArticleModal ? (
        <Modal title='ساخت مقاله جدید' onHide={closeAddNewArticleModal}>
          <Formik
            initialValues={{
              title: "",
              category: "فرانت اند",
              views: 0,
              desc: ""
            }}

            onSubmit={(values) => {
              // console.log('from values is', values);
              addNewArticles(values)
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form className="form row mx-0" onSubmit={handleSubmit}>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <input
                    type="text"
                    name='title'
                    onChange={handleChange}
                    value={values.title}
                    placeholder="نام مقاله مورد نظر را وارد کنید"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <input
                    type="text"
                    name='category'
                    onChange={handleChange}
                    value={values.category}
                    placeholder="دسته بندی مورد نظر را وارد کنید"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <input
                    type="text"
                    name='views'
                    onChange={handleChange}
                    value={values.views}
                    placeholder="تعداد بازدید مقاله را وارد کیند"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <textarea
                    type="text"
                    name='desc'
                    onChange={handleChange}
                    value={values.desc}
                    placeholder="توضیحات مقاله را وارد کیند"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <button type="submit" className="btn btn-dark  px-5">ارسال</button>
                </div>

              </form>
            )}
          </Formik>
        </Modal>
      ) : (null)}

      <div className="col-8 content px-0">
        <div className="content__wrapper d-flex flex-column align-content-between">
          <TabMenu />
          <div className="articles">
            <div className="articles__list">
              {articles.length ? (
                <>
                  {articles.map(article => (
                    <ArticleBox {...article} getAllArticles={getAllArticles} key={article._id} />
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
              onClick={() => setIsShowAddNewArticleModal(true)}
            >
              افزودن مقاله جدید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}