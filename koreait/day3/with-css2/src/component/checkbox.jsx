import React from 'react';
//https://react-icons.github.io/react-icons/#/에서 원하는 아이콘 선택하여 import
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import styles from './checkbox.module.css';

function CheckBox({children, checked, ...rest}) {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                {/* 아이콘 삽입시 태그이용 */}
                <div className={styles.icon}>{checked ? (<MdCheckBox className={styles.checked}/>) : (<MdCheckBoxOutlineBlank/>)}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;