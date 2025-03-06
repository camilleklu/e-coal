import React from 'react';
import styles from './Footer.module.css'
import 'boxicons';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <h3 className={styles.logo_footer}>K-Music Insider</h3>
            <div className={styles.footer_link_contact}>
                <div className={styles.footer_link}>
                    <h4>Quick Link</h4>
                    <p>Home</p>
                    <p>Articles</p>
                    <p>Search</p>
                    <p>Login</p>
                </div>
                <div className={styles.footer_link}>
                    <h4>Phone</h4>
                    <p>00 00 00 00 00</p>
                    <h4>Mail</h4>
                    <p>k_music_insider@music.com</p>
                </div>
            </div>
            <hr className={styles.line_separation_footer}></hr>
            <p className={styles.copyright}>copyright</p>
        </div>
    );
}

export default Footer;