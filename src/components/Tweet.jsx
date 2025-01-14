import { formatDistanceToNow } from 'date-fns'
import styles from './Tweet.module.css'
import { ptBR } from 'date-fns/locale';

export default function Tweet({tweet}){
const publishToNew = formatDistanceToNow(tweet.date, {
    locale: ptBR,
    addSuffix: true,
});
    return (
        <div className={styles.tweetContainer}>
            <img className={styles.avatar} src={tweet.user.picture}  />
            <div className={styles.user}>
                <span className={styles.userName}>{tweet.user.name}</span>
                <span className={styles.userUserName}>{tweet.user.username}</span>
                <span className={styles.date}>- {publishToNew}</span>
            </div>
            <div  className={styles.tweetText}>
            {tweet.text}
            </div>
    </div>


    )
}