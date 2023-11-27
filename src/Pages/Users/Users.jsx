import React from "react";
import "./Users.css";

export default function Users() {
  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <ul className="content__tabs">
          <li className="content__tab">
            <a href="users-admin.html" className="content__tab-link">
              <span className="fa fa-user"></span>
              کاربران
            </a>
          </li>
          <li className="content__tab">
            <a href="infomation-admin.html" className="content__tab-link">
              <span className="fa fa-book"></span>
              اطلاعات
            </a>
          </li>
          <li className="content__tab">
            <a href="products-admin.html" className="content__tab-link">
              <span className="fa fa-store"></span>
              دوره‌ها
            </a>
          </li>

          <li className="content__tab">
            <a href="weblog-admin.html" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </a>
          </li>
        </ul>
        <div className="active"></div>

        <div className="users">
          <form action="#" className="form row justify-content-between gap-3 mx-0">
            <div className="form__box-input col-8 px-0">
              <span className="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                className="form-control form__input"
                required
              />
            </div>
            <button type="reset" className="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              <div className="uesrs__item">
                <div className="users__info">
                  <img
                    src="../../img/admin/profile/banana.png"
                    alt="photo user"
                    className="users__img"
                  />
                  <div className="users__details">
                    <p className="users__name my-0">سهیل منصوری</p>
                    <p lang="en" className="users__email">
                      soheil@gamil.com
                    </p>
                  </div>
                </div>
                <div className="users__btns">
                  <button className="btn-custome btn-custome--gray">پیام ها</button>
                  <button className="btn-custome btn-custome__blue">اطلاعات</button>
                  <button className="btn-custome btn-custome__red">حذف</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}