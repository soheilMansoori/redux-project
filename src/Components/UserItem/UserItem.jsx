import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { removeUserFromServer } from "../../Redux/users/users";
import swal from 'sweetalert'
import Modal from "../Modal/Modal";

export default function UserItem({ _id, firstname, lastname, email, age, city, username, }) {
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)
    const closeModal = () => setIsShowModal(false)

    const imgs = [
        'img/avaters/avatar1.png',
        'img/avaters/avatar2.png',
        'img/avaters/avatar3.png',
        'img/avaters/avatar4.png',
    ]

    let randomImgIndex = Math.round(Math.random() * (imgs.length - 1))
    let randomImg = imgs[randomImgIndex]

    const removeHandler = (id) => {
        // console.log(id);
        swal({
            title: "ایا از حذف کاربر اطمینان دارید",
            icon: "warning",
            buttons: ['نه', 'اره']
        }).then(result => {
            // console.log(result);
            if (result) {
                dispatch(removeUserFromServer(id))
                swal({
                    title: 'کاربر با موفقعیت حذف شد',
                    icon: 'success',
                    buttons: 'اوک'
                })
            }
        })
    }
    return (
        <>
            {isShowModal ? (
                <Modal onHide={closeModal} title='جزئیات'>
                    <div className="modal-body position-relative">
                        <form action="#" className="form row mx-0">
                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-user form__icon icon-name-article" />
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`نام: ${firstname}`}
                                    className="form-control form__input input-user-firstname px-5"
                                    readonly
                                />
                                <label for="firstname" className="form__label my-0">
                                    نام{" "}
                                </label>
                            </div>

                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-users form__icon" />
                                <input
                                    type="text"
                                    name=""
                                    value={`نام خانوادگی: ${lastname}`}
                                    id="lastname"
                                    className="form-control form__input input-user-lastname px-5"
                                    readonly
                                />
                                <label for="lastname" className="form__label my-0">
                                    نام خانوادگی
                                </label>
                            </div>

                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-user form__icon" />
                                <input
                                    lang="en"
                                    type="text"
                                    name=""
                                    value={`نام کاربری: ${username}`}
                                    id="username"
                                    className="form-control form__input input-user-username px-5"
                                    readonly
                                />
                                <label for="username" className="form__label my-0">
                                    نام کاربری
                                </label>
                            </div>

                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-globe form__icon" />
                                <input
                                    lang="en"
                                    type="email"
                                    name=""
                                    value={`ایمیل: ${email}`}
                                    id="email"
                                    className="form-control form__input input-user-email px-5"
                                    readonly
                                />
                                <label for="email" className="form__label my-0" lang="en">
                                    ایمیل
                                </label>
                            </div>

                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-key form__icon" />
                                <input
                                    type="text"
                                    name=""
                                    id="text"
                                    value={`شهر: ${city}`}
                                    className="form-control form__input input-user-password px-5"
                                    readonly
                                />
                                <label for="password" className="form__label my-0">
                                    {" "}
                                    شهر
                                </label>
                            </div>
                            <div className="form__box-input col-12 px-2">
                                <span className="fa fa-wallet form__icon" />
                                <input
                                    type="text"
                                    name=""
                                    value={`سن: ${age}`}
                                    id="count-product"
                                    className="form-control form__input input-user-product px-5"
                                    readonly
                                />
                                <label for="count-product" className="form__label my-0">
                                    سن
                                </label>
                            </div>
                        </form>
                    </div>
                </Modal>
            ) : (null)}

            <div className="uesrs__item">
                <div className="users__info">
                    <img
                        src={randomImg}
                        alt="photo user"
                        className="users__img"
                    />
                    <div className="users__details">
                        <p className="users__name my-0">{firstname} {lastname}</p>
                        <p lang="en" className="users__email">
                            {email}
                        </p>
                    </div>
                </div>
                <div className="users__btns">
                    <button className="btn-custome btn-custome__blue" onClick={() => setIsShowModal(true)}>اطلاعات</button>
                    <button className="btn-custome btn-custome__red" onClick={() => removeHandler(_id)}>حذف</button>
                </div>
            </div>
        </>
    );
}