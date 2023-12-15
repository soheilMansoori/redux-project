import React, { useEffect } from "react";
import "./Users.css";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { getUsersFromServer } from "../../Redux/users/users";
import { useDispatch, useSelector } from 'react-redux'
import UserItem from "../../Components/UserItem/UserItem";


export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  useEffect(() => {
    dispatch(getUsersFromServer('/users'))
  }, [])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <TabMenu />
        <div className="users">
          <form action="#" className="form row justify-content-between gap-3 mx-0">
            <div className="form__box-input col-8 px-1">

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                className="form-control form__input px-5 position-relative"
                required
              />
              <span className="fa fa-search form__icon form__icon-search position-absolute top-0" />
            </div>
            <button type="reset" className="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              {users.length ? (
                users.map(user => (
                  <UserItem {...user} key={user._id} />
                ))
              ) : (
                <div className="alert alert-danger">کاربری یافت نشد</div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}