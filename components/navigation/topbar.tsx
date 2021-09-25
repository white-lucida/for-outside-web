import styles from "../../styles/components/navigation/topbar.module.css"

const TopBar = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.name}> WHITE LUCIDA </h1>
            <nav>
                <ul className={styles.listParent}>
                    <li> コミュニティについて </li>
                    <li> お知らせ </li>
                    <li> お問い合わせ </li>
                </ul>
            </nav>
        </header>
    );
}
/* about 細かい紹介文、メンバーの年齢層やプレイ時間帯、腕前帯の統計など。閲覧者に有益なサーバー情報 */
/* news サーバー参加者向けニュース。大会の開催や、YouTubeチャンネルの告知など。外部の閲覧者も、サーバーの活動を知ることが出来る */
/* contact お問い合わせページ。メールアドレスだけを置くか、フォームを介して送ってもらうかは未定。後者なら、問い合わせ用のサービスを使って時間削減したい  */


export default TopBar;