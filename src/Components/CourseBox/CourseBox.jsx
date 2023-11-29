import React from "react";

export default function CourseBox({ title, desc, category, registersCount, price, discount }) {
    return (
        <div className="products__item">
            <img
                src="/"
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
                        <button className="btn btn-danger btn-lg">حذف</button>
                        <button className="btn btn-info btn-lg">ویرایش</button>
                    </div>
                </div>
            </div>

            <div className="product__discount-Box">{discount}%</div>
        </div>
    );
}