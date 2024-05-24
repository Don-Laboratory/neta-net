'use client'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from '@/components/layouts/tabs';
import Sidebar from '@/components/layouts/sidebar';
import HeaderHome from '@/components/layouts/headerHome';
import Neta_Footer from '../components/layouts/Neta_Footer';
import homeScss from '@/styles/scss/project/_home.module.scss';

export default function Home() {
  return (

    <main>
      <HeaderHome />
      <Image className={"mv"} src="/home/pc_mv_img01.png" alt="メインビジュアル" width={874} height={239} />

      <Container>
        <div className={`${homeScss.threeCol}`}>

          <Sidebar />

          <div>
            <NavBar />
          </div>

        </div>
      </Container>

      <Neta_Footer></Neta_Footer>
    </main >
  )
}
