import Image from "next/image";
import allScss from '@/styles/scss/project/_home.module.scss'

export default function Home() {
  return (
    <main>
      <Image className={allScss.mv} src="/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />
      <div className={allScss.title}>Test Don lab</div>
    </main>
  )
}
