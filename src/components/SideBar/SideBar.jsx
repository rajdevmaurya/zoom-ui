import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/main.css'
import $ from 'jquery';
import '../../js/ap'
const Sidebar = () => {
  return (
    <React.Fragment>

      <div className="container">
        <aside className="sidebar sidebar--expanded">
          <div className="sidebar__logo">
            <a href="#" title="NaveenAgro" className="sidebar__logo--full">IZoom</a>
            <a href="#" title="NaveenAgro" className="sidebar__logo--half">IZ</a>
          </div>
          <ul className="sidebar__categ__list level-1">
            <li className="sidebar__categ__list__item menu__open">
              <a href="#" className="sidebar__categ__list__link">
                <span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-grid fa-lg">
                    <path fill="currentColor" d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z" className=""></path>
                  </svg>Patient Master
                </span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
              <ul className="sidebar__categ__list level-2" >
                <li className="sidebar__categ__list__item">
                  <a href="#" className="sidebar__categ__list__link">Add new</a>
                </li>
                <li className="sidebar__categ__list__item">
                  <a href="#" className="sidebar__categ__list__link">History</a>
                </li>
                <li className="sidebar__categ__list__item">
                  <a href="#" className="sidebar__categ__list__link">Rx</a>
                </li>
              </ul>
            </li>
            <li className="sidebar__categ__list__item">
              <a href="#" className="sidebar__categ__list__link">
                <span><i className="fa-solid fa-table-cells"></i> Parent</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
              <ul className="sidebar__categ__list level-2">
                <li className="sidebar__categ__list__item">
                  <a href="#" className="sidebar__categ__list__link">Child</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
     </div>
    </React.Fragment>
  )
}

export default Sidebar;
