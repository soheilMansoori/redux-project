import React from "react";
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { removeArticlesFromServer } from '../../Redux/articles/articles'

export default function ArticleBox({ getAllArticles, _id, title, desc, category, views }) {
    const dispatch = useDispatch()
    const removeArticle = (id) => {
        // console.log(id);
        swal({
            title: 'ایا از حذف مقاله مطمعن هستید',
            icon: 'warning',
            buttons: ['نه', 'اره']
        }).then(result => {
            // console.log(result);
            if (result) {
                dispatch(removeArticlesFromServer(id))
                getAllArticles()
                swal({
                    title: 'مقاله مورد نظر با موفیقت حذف شد',
                    icon: 'success',
                    buttons: 'اوک'
                })
            }
        })
    }


    const imgs = [ 
        'img/articeles/articele-1.jpg',
        'img/articeles/articele-2.jpg',
        'img/articeles/articele-3.jpg',
        'img/articeles/articele-4.jpg',
        'img/articeles/articele-5.jpg',
        'img/articeles/articele-6.jpg',
    ]

    let randomImgIndex = Math.round(Math.random() * (imgs.length - 1))
    let randomImg = imgs[randomImgIndex]

    return (
        <div className="articles__item">
            <img
                src={randomImg}
                alt="product-img-1"
                className="articles__img"
            />
            <div className="articles__details w-100">
                <div className="articles__info">
                    <h3 className="articles__name">{title}</h3>
                    <p className="articles__short-desc">
                        {desc}
                    </p>
                </div>
                <div className="articles__tags">
                    <div className="articles__boxes">
                        <div className="articles__category-box d-flex gap-2 align-items-center">
                            <span className="fa fa-tags"></span>
                            <p className="articles__tag-text articles__category my-0">
                                <span>دسته بندی :</span>
                                <span className="articles__category-value">{category}</span>
                            </p>
                        </div>
                        <div className="articles__visited-box d-flex gap-2 align-items-center">
                            <span className="fa fa-users"></span>
                            <p className="articles__tag-text articles__visited my-0">
                                <span>تعداد بازدید :</span>
                                <span className="articles__visited-count">{views}</span>
                            </p>
                        </div>
                    </div>
                    <div className="articles__btns">
                        <button className="op-btn btn btn-danger btn-lg" onClick={() => removeArticle(_id)}>حذف</button>
                    </div>
                </div>
            </div>
        </div>
    );
}