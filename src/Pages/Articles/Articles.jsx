import React from "react";
import ArticleBox from "./../../Components/ArticleBox/ArticleBox";

import "./Articles.css";
import TabMenu from "../../Components/TabMenu/TabMenu";

export default function Articles() {
  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <TabMenu />
        <div className="articles">
          <div className="articles__list">
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>

        <div className="new-article">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-article"
            id="btn-modal-new-article"
          >
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </div>
  );
}