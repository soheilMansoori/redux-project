import React, { useEffect, useState } from "react";
import CourseBox from "../../Components/CourseBox/CourseBox";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesFromServer, addOfferToAllCoursesFromServer, addNewCourseInServer } from "../../Redux/courses/courses";
import Modal from '../../Components/Modal/Modal'
import swal from 'sweetalert'
import { Formik } from "formik";
import "./Courses.css";


export default function Courses() {
  const dispatch = useDispatch()
  const courses = useSelector(store => store.courses)
  const [isShowAllOffModal, setIsShowAllOffModal] = useState(false)
  const [disCount, setDisCount] = useState('')
  const [isShowAddNewCourseModal, setIsShowAddNewCourseModal] = useState(false)

  const closeAddNewCourseModal = () => setIsShowAddNewCourseModal(false)
  const closeAllOffModal = () => setIsShowAllOffModal(false)


  useEffect(() => {
    getAllCourses()
  }, [])

  function getAllCourses() {
    dispatch(getAllCoursesFromServer('/courses'))
  }

  const addNewOffer = (event) => {
    // console.log('submit');
    event.preventDefault()
    if (disCount) {
      dispatch(addOfferToAllCoursesFromServer(disCount))
      setDisCount('')
      closeAllOffModal()

      swal({
        title: "تخفیف همگانی اعمال شد",
        icon: 'success',
        buttons: 'اوکی'
      }).then(() => getAllCourses())

    }

  }


  const addNewCourse = (newCourseBody) => {
    closeAddNewCourseModal()
    dispatch(addNewCourseInServer(newCourseBody))
    swal({
      title: 'دوره مورد نظر ساخته شد',
      icon: 'success',
      buttons: 'اوکی'
    }).then(() => getAllCourses())
  }

  return (
    <>

      {isShowAllOffModal ? (
        <Modal title='اعمال تخفیف همه دوره‌ها' onHide={closeAllOffModal}>
          <div className="modal-body position-relative">
            <form className="form row mx-0" onSubmit={addNewOffer}>
              <div className="form__box-input col-12 px-2">
                <span className="fa-solid fa-gift form__icon icon-name-article" />
                <input
                  type="text"
                  placeholder="مقدار تخفیف را وارد کنید"
                  id="firstname"
                  onChange={(event) => setDisCount(event.target.value)}
                  value={disCount}
                  className="form-control form__input input-user-firstname px-5"
                />
              </div>
            </form>
          </div>
        </Modal>
      ) : (null)}


      {isShowAddNewCourseModal ? (
        <Modal title='افزودن مقاله جدید' onHide={closeAddNewCourseModal}>
          <Formik
            initialValues={{
              "title": "test",
              "price": "test",
              "category": "فرانت اند",
              "registersCount": 12,
              "discount": 60,
              "desc": "test"
            }}

            onSubmit={(values) => {
              // console.log('form values is', values);
              addNewCourse(values)
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
                    placeholder="نام دوره مورد نظر را وارد کنید"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <input
                    type="text"
                    name='price'
                    onChange={handleChange}
                    value={values.price}
                    placeholder="مبلغ دوره مورد نظر را وارد کنید"
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
                    name='registersCount'
                    onChange={handleChange}
                    value={values.registersCount}
                    placeholder="تعداد دانشجوی دوره را وارد کنید"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <span className="fa-solid fa-gift form__icon icon-name-article" />
                  <input
                    type="text"
                    name='discount'
                    onChange={handleChange}
                    value={values.discount}
                    placeholder="مقدار تخفیف دوره را وارد کنید"
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
                    placeholder="توضیحات دوره را وارد کیند"
                    className="form-control form__input input-user-firstname px-5"
                  />
                </div>

                <div className="form__box-input col-12 px-2 my-3">
                  <button type="submit" className="btn btn-dark  px-5">ارسال</button>
                </div>

              </form>
            )}

          </Formik>

        </Modal >
      ) : (null)
      }

      <div className="col-8 content px-0">
        <div className="content__wrapper d-flex flex-column align-content-between">
          <TabMenu />
          <div className="products products-container">
            <div className="products__list products-wrapper">
              {courses.length ? (
                <>
                  {courses.map(course => (
                    <CourseBox  {...course} getAllCourses={getAllCourses} key={course._id} />
                  ))}
                </>
              ) : (
                <div className="alert alert-danger"> هیچ دوره ایی یافت نشد </div>
              )}
            </div>
          </div>

          <div className="new-course d-flex gap-2">
            <button
              className="btn-custome btn-custome__blue"
              onClick={() => setIsShowAddNewCourseModal(true)}
            >
              افزودن دوره جدید
            </button>
            <button
              className="btn-custome btn-custome__red"
              onClick={() => setIsShowAllOffModal(true)}
            >
              اعمال تخفیف همه دوره‌ها
            </button>
          </div>
        </div>
      </div>
    </>
  );
}