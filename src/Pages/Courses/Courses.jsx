import React, { useEffect } from "react";
import CourseBox from "../../Components/CourseBox/CourseBox";
import { Link } from "react-router-dom";
import "./Courses.css";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesFromServer } from "../../Redux/courses/courses";
export default function Courses() {
  const dispatch = useDispatch()
  const courses = useSelector(store => store.courses)

  useEffect(() => {
    console.log(courses);
    dispatch(getAllCoursesFromServer('/courses'))
  }, [])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <TabMenu />
        <div className="products products-container">
          <div className="products__list products-wrapper">
            {courses.length ? (
              <>
                {courses.map(course => (
                  <CourseBox  {...course} key={course._id} />
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
            data-bs-toggle="modal"
            data-bs-target="#new-product"
          >
            افزودن دوره جدید
          </button>
          <button
            className="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product"
          >
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            className="btn-custome btn-custome__green btn-modal-new-category"
            data-bs-toggle="modal"
            data-bs-target="#add-new-category"
          >
            افزودن دسته بندی
          </button>
        </div>
      </div>
    </div>
  );
}