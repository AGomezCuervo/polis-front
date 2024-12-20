import type { Component } from 'solid-js';
import {A} from '@solidjs/router'
import styles from './NavBar.module.css';
import home_logo from "@/assets/home-icon.svg"
import people_logo from "@/assets/people-icon.svg"
import config_logo from "@/assets/config-icon.svg"

const NavBar: Component = () => {
        return (
                <nav class={styles.nav}>
                    <A href="/">
                        <img src={home_logo} alt="guests"/>
                    </A>
                    <A href="/guests">
                        <img src={people_logo} alt="people"/>
                    </A>
                    <A href="/config">
                        <img src={config_logo} alt="config"/>
                    </A>
                </nav>
        )
}
export default NavBar;
