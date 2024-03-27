import Image from "next/image";
import allScss from '@/styles/scss/project/_home.module.scss'

export default function Home() {
  return (
    <main>
      <Image className={"mv"} src="/home/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />

      <button type="button" className="btn btn-primary">
        Push!test
      </button>

      <div className={[allScss.sidebar].join(`flex-shrink-0 p-3`)}>
        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
          <svg className="bi pe-none me-2" width="30" height="24"></svg>
          <span className="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              ホーム
            </button>
            {/* <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div> */}
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              ランキング
            </button>
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              カテゴリー
            </button>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              Account
            </button>
          </li>
        </ul>
      </div>

    </main>

  )
}
