import React from 'react';
import Image from 'next/image';
import footer_styles from '@/styles/scss/project/_footer.module.scss'

const Neta_Footer = () => {
  return (
    <footer className={footer_styles.footer}>
      <div className={footer_styles.footer_col2}>
        <div>
          <Image
            src={'/assets/img_logo.png'}
            alt="Logo"
            width={173}
            height={79}
            priority
          />
        </div>
        <div>
          <ul className={footer_styles.footer_col2__innerLink}>
            <li>ねたnetについて</li>
            <li>導入事例</li>
            <li>セミナーイベント情報</li>
          </ul>
          <ul className={footer_styles.footer_col2__outerLink}>
            <li><a href="" target='_blank'>クッキーに関する通知</a></li>
            <li><a href="" target='_blank'>プラバシーポリシー</a></li>
          </ul>
        </div>
      </div>
      <p className={footer_styles.footer__comment}>
        © 2023. 詳細は 利用規定 をご覧ください。Deloitte（デロイト）とは、デロイト トウシュ トーマツ リミテッド（“DTTL”）ならびにそのグローバルネットワーク組織を構成するメンバーファームおよびそれらの関係法人のひとつまたは複数を指します。DTTL（または“Deloitte Global”）および各メンバーファームならびにそれらの関係法人はそれぞれ法的に独立した別個の組織体です。DTTLはクライアントへのサービス提供を行いません。詳細は「<a href='https://www2.deloitte.com/jp/ja/pages/about-deloitte/articles/about-deloitte.html' target='_blank'>デロイト トーマツ グループおよびデロイトについて</a>」をご覧ください。
      </p>
    </footer>
  );
};
export default Neta_Footer;
