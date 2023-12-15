import React from "react";
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { removeCoursesFromServer } from '../../Redux/courses/courses'

export default function CourseBox({ getAllCourses, _id, title, desc, category, registersCount, price, discount }) {

    const dispatch = useDispatch()

    const removeCourse = (id) => {
        console.log(id);
        swal({
            title: "ایا از حذف دوره مطمعن هستید",
            icon: 'warning',
            buttons: ['نه', 'اره']
        }).then(result => {
            console.log(result);
            if (result) {
                dispatch(removeCoursesFromServer(id))
                swal({
                    title: 'دوره مورد نظر با موفقیت حذف شد',
                    icon: 'success',
                    buttons: 'اوک'
                }).then(() => getAllCourses())
            }
        })
    }


    const imgs = [
        'img/courses/course-1.jpg',
        'img/courses/course-2.jpg',
        'img/courses/course-3.jpg',
        'img/courses/course-4.jpg',
        'img/courses/course-5.jpg',
        'img/courses/course-6.jpg',
    ]

    let randomImgIndex = Math.round(Math.random() * (imgs.length - 1))
    let randomImg = imgs[randomImgIndex]

    return (
        <div className="products__item">
            <img
                src={randomImg}
                alt="product-img-1"
                className="products__img"
            />
            <div className="products__details w-100">
                <div className="products__info">
                    <h3 className="products__name">{title}</h3>
                    <p className="products__short-desc">
                        {desc}
                    </p>
                </div>
                <div className="products__tags">
                    <div className="products__boxes">
                        <div className="products__price-box">
                            <span className="fa fa-wallet"></span>

                            <span className="product__teg-text">قیمت :</span>
                            <span className="product__teg-text products__price-value">
                                {price ? (
                                    <>
                                        {price.toLocaleString()}
                                    </>
                                ) : (
                                    'رایگان'
                                )}
                            </span>
                        </div>
                        <div className="products__category-box">
                            <span className="fa fa-folder"></span>

                            <span className="product__teg-text">دسته بندی:</span>
                            <span className="product__teg-text products__category">
                                {category}
                            </span>
                        </div>
                        <div className="products__shop-box">
                            <span className="fa fa-users"></span>

                            <span className="product__teg-text">تعداد فروش :</span>
                            <span className="product__teg-text products__sell">{registersCount}</span>
                        </div>
                    </div>
                    <div className="products__btns">
                        <button className="btn btn-danger btn-lg" onClick={() => removeCourse(_id)}>حذف</button>
                    </div>
                </div>
            </div>

            <div className="product__discount-Box">{discount}%</div>
        </div>
    );
}