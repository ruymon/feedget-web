import { ChatTeardropDots } from 'phosphor-react';

import styles from './styles.module.css';

export function Widget() {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <ChatTeardropDots className={styles.icon} /> 

                <span className={styles.text}>
                    <span className={styles.blankSpace}></span>
                    Feedback
                </span> 
            </button>
        </div>
    );
};