import { useState } from 'react';


export function useIndex(){
     const [text, setText] = useState('');
        const maxLength = 125;
        const [tweetList, setTweetList] = useState([])
    
        const tweet = {
            date: new Date(),
            text: text,
            user: {
                name: 'Maryeli Obici',
                username: '@mary_obici',
                picture: 'https://avatars.githubusercontent.com/u/113376173'
            }
        }
    
    
        function onTextChange(event) {
            const text = event.target.value;
    
            if (text.length <= maxLength) {
                setText(text);
            }
        }
        function sendTweet() {
            setTweetList([...tweetList, tweet])
        }

        return {
            text,
            onTextChange,
            maxLength, 
            sendTweet,
            tweetList
        }
}