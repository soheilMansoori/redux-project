import React from "react";
import { useDispatch } from 'react-redux'
import { removeUserFromServer } from "../../Redux/users/users";

export default function UserItem({ _id, firstname, lastname, email }) {
    const dispatch = useDispatch()
    const removeHandler = (id) => {
        console.log(id);

    }
    return (
        <div className="uesrs__item">
            <div className="users__info">
                <img
                    src="/"
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
                <button className="btn-custome btn-custome--gray">پیام ها</button>
                <button className="btn-custome btn-custome__blue">اطلاعات</button>
                <button className="btn-custome btn-custome__red" onClick={() => removeHandler(_id)}>حذف</button>
            </div>
        </div>
    );
}