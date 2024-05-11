
import Link from 'next/link';
import styles from './page.module.css';

const RESUME_LINK = "https://drive.google.com/file/d/1o91Ac3gCZ6N9oC-3Gk1CcOEy3gC011jH/view?usp=sharing"

const LINKS = [
  {
    displayName : "About me",
    path : "/about-me"
  },
  {
    displayName : "Resume",
    path : "/resume"
  },
  {
    displayName : "Contact",
    path : "/contact"
  }
]

export default function Home() {
  return (
    <div className={styles.root}>
      <h1>Hemant Yadav</h1>
      <p className={styles.tech}>
      <span>#react-native, </span>
        <span>#android, </span>
        <span>#fullstack, </span>
        <span>#web, </span>
      </p>
        <div className={styles.navwrapper}>
          <ul>
          {
            LINKS.map((link) =>{
              return <li>
                <Link 
                className={styles.navlink}
                href={link.path}>{link.displayName}</Link>
              </li>
            })
          }
          </ul>
        </div>
        <div className={styles.buttonwrapper}>
          <a href={RESUME_LINK} 
          target='_blank' rel='noreferrer noopener'
          className={styles.downloadcv}>Download CV</a>
        </div>
      </div>
  );
}
