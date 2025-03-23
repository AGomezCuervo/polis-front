import type { Component } from 'solid-js';
import styles from './PostC.module.css';

interface Data {
    data: {
        title: string,
        residence: string,
        hour: string,
        message: string,
        color: string,
    }
}

const PostC: Component<Data> = (props) => {
    return (
        <div class={styles.post}>
            <div class={styles.post_info}>
                <div style="display:flex; align-items:center">
                    <span
                    style={{"text-decoration-color":props.data.color}}
                    class={styles.title}>
                        {props.data.residence}
                        <div class={styles.highlight}></div>
                    </span>
                    {
                        //<span class={styles.residence}>{props.data.residence}</span>
                    }
                    <span class={styles.special}>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.25" cy="1.25" r="1.25" transform="matrix(1 0 0 -1 0 2.5)" fill="#524E4E"/>
                        </svg>
                        {props.data.hour}
                    </span>
                </div>
                <p>{props.data.message}</p>
            </div>
            <div class={styles.img}></div>
        </div>
    )
}

export default PostC;
