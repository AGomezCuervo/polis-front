import type { Component } from 'solid-js';
import {A} from '@solidjs/router'
import styles from './TopBar.module.css';
import polis_logo from "@/assets/polis-log.svg";

const TopBar: Component = () => {
        return (
                <header class={styles.header}>
                    <div class={styles.navigation}>
                        <div class={styles.active}>
                            <A href="/" style="padding-right:1rem">
                                <h2>Posts</h2>
                                <div class={styles.bottom_line}></div>
                            </A>
                        </div>

                        <div>
                            <A href="/">
                                <h2>Notifications</h2>
                                <div class={styles.bottom_line}></div>
                            </A>
                        </div>
                    </div>
                </header>
        )
}
export default TopBar;
