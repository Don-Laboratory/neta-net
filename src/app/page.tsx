import Image from "next/image";
import allScss from '@/styles/scss/project/_home.module.scss'
import partsScss from '@/styles/scss/component/_parts.module.scss'
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <Image className={"mv"} src="/home/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />

      <Button variant="primary">
        Push!test
      </Button>

      <div className={`${allScss.sidebar} ${"flex-shrink-0 p-3"}`}>
        <ul className="list-unstyled ps-0">
          <li className="mb-2">
            <button className={`${allScss.test} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"}`} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              ホーム
            </button>
          </li>
          <li className="mb-2">
            <button className={`${allScss.test} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"}`} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              ランキング
            </button>
          </li>
          <li className="mb-2">
            <button className={`${allScss.test} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"}`} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              カテゴリー
            </button>
          </li>
          <li className="mb-2">
            <button className={`${allScss.test} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"}`} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              プロフィール
            </button>
          </li>
          <li className="mb-2">
            <button className={`${allScss.test} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"}`} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              設定
            </button>
          </li>
          <li className="mb-1">
            <button className={`${partsScss.netaPostButton} ${"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed test"}`} data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              ネタ投稿する
            </button>
          </li>
        </ul>
      </div>

    </main >

  )
}
