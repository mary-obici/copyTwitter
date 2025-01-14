import TextInput from "../components/TextInput";
import styles from "./Index.module.css";
import Tweet from '../components/Tweet';
import { useIndex } from '../hooks/useIndex.page';

export default function Index() {
   const {
    text,
    onTextChange,
    maxLength, 
    sendTweet,
    tweetList
} = useIndex();

    return (
        <div>
            <h1 className={styles.pageTitle}>TreinaTweet</h1>
            <div className={styles.tweetContainer}>
                <img src={'https://avatars.githubusercontent.com/u/113376173'} className={styles.avatar} />
                <TextInput
                    placeholder={'O que você está pensando?'}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button onClick={sendTweet} className={styles.postButton}
                disabled={text.length === 0}>Tweetar</button>

            </div>

            <ul className={styles.tweetList}>
                {tweetList.map(tweet => {
                    return (
                        <li className={styles.tweetListItem}>
                            <Tweet tweet={tweet} />
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}