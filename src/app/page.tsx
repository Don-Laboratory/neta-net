import Image from "next/image";
import React from "react";
import allScss from '@/styles/scss/project/_home.module.scss'

export default function Home() {
  return (
    <main>
      <Image className={"mv"} src="/home/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />

      <button type="button" className="btn btn-primary">
        Push!test
      </button>

      <div className={[allScss.sidebar].join(`d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary`)}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <Image src="/pc_mv_img01.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>

    </main >

  )
}
