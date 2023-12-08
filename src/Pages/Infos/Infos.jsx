import React from "react";
import "./Infos.css";
import TabMenu from "../../Components/TabMenu/TabMenu";
import { Formik } from "formik";
import { addNewUser } from '../../Redux/users/users'
import { useDispatch } from 'react-redux'


export default function Infos() {
  const dispatch = useDispatch()
  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <TabMenu />
        <div className="information">
          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                  اطلاعات شما
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="card-body information-current-admin-wrapper-form p-4">
                  <Formik
                    initialValues={{
                      firstname: '',
                      lastname: '',
                      username: '',
                      email: '',
                      city: '',
                      age: ''
                    }}
                    onSubmit={(values) => {
                      console.log('form values =>', values);
                      dispatch(addNewUser(values))
                    }}
                  >
                    {/* values === initialValues */}
                    {({ values, handleChange, handleSubmit }) => (
                      <form action="#" className="form row mx-0" onSubmit={handleSubmit}>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-user form__icon"></span>
                          <input
                            type="text"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            id="firstname"
                            placeholder="نام"
                            className="form-control form__input px-5"
                            required
                          />
                        </div>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-users form__icon"></span>

                          <input
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            id="lastname"
                            placeholder="نام خانوادگی"
                            className="form-control form__input px-5"
                            required
                          />
                        </div>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-address-book form__icon"></span>

                          <input
                            lang="en"
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            id="username"
                            placeholder="نام کاربری"
                            className="form-control form__input px-5"
                            required
                          />
                        </div>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-globe form__icon"></span>

                          <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="ایمیل"
                            className="form-control form__input px-5"
                            required
                          />
                        </div>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-key form__icon"></span>

                          <input
                            type="text"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            id="password"
                            placeholder="شهر"
                            className="form-control form__input px-5"
                            required
                          />
                          <span className="fa fa-key form__icon"></span>
                        </div>

                        <div className="form__box-input col-6 px-2">
                          <span className="fa fa-key form__icon"></span>

                          <input
                            type="password"
                            name='age'
                            value={values.age}
                            onChange={handleChange}
                            placeholder="سن"
                            className="form-control form__input px-5"
                            required
                          />
                          <span className="fa fa-key form__icon"></span>
                        </div>


                        <button type="submit" className="btn-custome btn-custome__blue col-6 my-3">
                          ثبت نام
                        </button>

                      </form>

                    )}
                  </Formik>

                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed btn information__team-title"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  اطلاعات تیم
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row justify-content-center mx-0 p-4">
                  <div className="infromation-team-container">
                    <div className="infromation-team-cards d-flex flex-wrap">
                      <div className="card col-4 information__team-card p-2">
                        <img
                          className="card-img-top information__admin-img"
                          src="../../img/store/avaters/avatar2.png"
                          alt="admin photo"
                        />
                        <div className="card-body d-flex flex-column justify-content-between p-4">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="card-title information__admin-name my-0">
                              عرشیا احسنی
                            </h4>
                            <p className="card-text information__admin-role my-0">
                              باغدار
                            </p>
                          </div>
                          <div className="mt-4 d-flex justify-content-end gap-2">
                            <button className="btn btn-lg btn-danger">حذف</button>
                            <button className="btn btn-lg btn-info">ویرایش</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn-custome btn-custome__red col-10 mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#new-member"
                  >
                    افزودن فرد جدید
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}