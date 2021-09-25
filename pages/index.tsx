import styles from "../styles/index.module.css";
import Image from "next/image";

import TopBar from "../components/navigation/topbar";

const Index = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <h1> WHITE LUCIDA </h1> {/*  imgに置き換え  */}
                <ul className={styles.list}>
                    <li> コミュニティについて </li>
                    <li> お知らせ </li>
                    <li> お問い合わせ </li>
                </ul>
            </nav>
            <img src="/export.svg" className={styles.svg}/>
            <section className={styles.main}>
                <p className={styles.copy}> 
                    スプラトゥーン3 <br />
                    プレイヤーのための <br />
                    Discord コミュニティ。
                    
                </p>
                <button className={styles.discord}>
                    参加する
                </button>
            </section>
            <section className={`${styles.play} ${styles.paragraph}`}>
                <h1> PLAY </h1>
                <article>
                    <img className={styles.left} src="sample.jpg"/>  {/* 左半分に画像、右半分にコメント */}
                    <p className={styles.right}>
                        リーグマッチやプライベートマッチなど、<br />
                        仲間と通話をつなぎながらプレイできます。
                    </p>
                </article>
                <article>
                    <img className={styles.right} src="sample2.jpg"/> {/* 右半分に画像、左半分にコメント*/}
                    <p className={styles.left}>
                        大会や対抗戦(*1)などの大人数で楽しめる<br />
                        イベントを開催予定です。
                    </p>
                </article>
            </section>
            <section className={`${styles.utilize} ${styles.paragraph}`}>
                <h1> UTILIZE </h1>
                <article>
                    <img className={styles.left} src="sample.jpg" /> {/* 左半分に画像、右半分にコメント*/}
                    <p className={styles.right}>
                        知名度のある様々な Discord Bot (*2) を利用できます。 <br />
                        本コミュニティ用の Discord Bot も開発しています。
                    </p>
                </article>
                <article>
                    <img className={styles.right} src="sample2.jpg" />　{/* 右半分に画像、左半分にコメント */}
                    <p className={styles.left}>
                        試合相手の募集をしたり、<br />
                        Webでコミュニティメンバーの <br />
                        フレンドコードを確認したりできます。
                    </p>
                </article>
            </section>

            
            
            <section className={styles.touting}>

                WHITE LUCIDA ではコミュニティメンバーを募集しています。 <br />
                Discord サーバーへの参加はお気軽にどうぞ！

                <button> Discord へ参加 </button>
            </section>


        </div>
    )
}

export default Index;