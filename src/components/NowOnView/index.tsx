import styles from "./NowOnView.module.scss"
import bannerImage from "./assets/bannerImage.webp"
const NowOnView = () => {

    return (
        <div className={styles.onViewContainer}>
            <a className={styles.banner}>
                <div className={styles.bannerImageContainer}>
                    <img src={bannerImage} alt="Now In View Image" />
                </div>
                <div className={styles.bannerText}>
                    <span className={styles.exhibitionInfo}>
                        <div className={styles.tag}>exhibition</div>
                        <div className={styles.date}>until 14 Jun</div>
                    </span>
                    <div className={styles.artist}>
                        Yulia Matvienko
                    </div>
                    <div className={styles.title}>
                        HAVE SOME CAT
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NowOnView