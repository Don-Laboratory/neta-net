'use client'
import Image from "next/image";
import allScss from '@/styles/scss/project/_home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import NavBar from '@/components/layouts/tabs.tsx';
import Sidebar from '@/components/layouts/sidebar.tsx';
import HeaderHome from '@/components/layouts/headerHome.tsx';

export default function Home() {
  return (

    <main>
      <HeaderHome />
      <Image className={"mv"} src="/home/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />

      <Container>
        <div className={`${allScss.threeCol}`}>

          <Sidebar />

          <div>
            <NavBar />
          </div>

        </div>
      </Container>

    </main >

  )
}