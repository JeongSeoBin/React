import React from 'react';
import styles from './box.module.css';

function Box(){
    //css module을 이용하여 클래스명을 만들면 고유한 클래스명을 만들 수 있다
    return <div className={styles.Box}>{styles.Box}</div>
}

export default Box;