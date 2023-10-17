import React,{useState,useEffect} from 'react';
import {ColofulMessage} from './components/ColofulMessage';

const App = () => {
    const [num, setnum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    const onClickCountUP = () => {
        setnum(num + 1)
    };
    const onClickSwithFaceShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true)
            } else {
                faceShowFlag && setFaceShowFlag(false)
            }
        }
    },[num]);

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
            <ColofulMessage color="pink">元気です！</ColofulMessage>
            <button onClick={onClickCountUP}>カウントアップ</button>
            <br />
            <button onClick={onClickSwithFaceShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>🤭</p>}
        </>
    );
};

export default App;