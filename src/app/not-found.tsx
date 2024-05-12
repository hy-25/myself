import React from 'react';
import styles from './not-found.module.css';
import Link from 'next/link';
const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.header}>Oops! you ran out of oxygen</h1>
            <p className={styles.subheader}>The page you are looking for is now neyond your reach.</p>
            <Link href={'/'} className={styles.backhome}>Back Home</Link>
        </div>
    )
}

export default NotFound