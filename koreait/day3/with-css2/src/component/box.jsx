import React from 'react';
import styles from './box.module.css';

function Box(){
    //styles.Box찍어 보면 'box_Box__2fGUx' 이처럼 다른 클래스명과 겹치지 않는 클래스명을 생성
    return <div className={styles.Box}>{styles.Box}</div>
}

export default Box;
