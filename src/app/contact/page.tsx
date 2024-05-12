import React from "react";
import styles from "./page.module.css";
export default function ContactPage() {

    const INFO_LIST = [
        {
            displayName : "Email",
            type : 'email',
            value : "hemantyadav25121999@gmail.com",
            iconURl :'https://cdn-icons-png.freepik.com/512/7005/7005340.png?ga=GA1.1.1022157571.1715510926'
        },
        {
            displayName : "Contact No.",
            type : 'phoneNo',
            value : "9057332947",
            iconURl :'https://cdn-icons-png.freepik.com/512/7783/7783431.png?ga=GA1.1.1022157571.1715510926'
        },
        {
            displayName : "Github",
            type : 'github',
            value : "github.com/hy-25",
            iconURl :'https://cdn-icons-png.freepik.com/512/7084/7084068.png?ga=GA1.1.1022157571.1715510926'
        },
        {
            displayName : "LinkedIn",
            type : 'linkdin',
            value : "www.linkedin.com/in/121y",
            iconURl :'https://cdn-icons-png.freepik.com/512/7098/7098561.png?ga=GA1.1.1022157571.1715510926'
        }
    ]


    const getHref = (infoList : any) => {
        switch(infoList.type){
            case 'email':
                return `mailto:${infoList.value}`;
            case 'phoneNo':
                return `tel:${infoList.value}`;
            case 'github':
                return `https://${infoList.value}`;
            case 'linkdin':
                return `https://${infoList.value}`;
            default:
                return '';
        }
        
    }

    return (
        <div className={styles.wrapper}>
        <div className={styles.contactwrapper}>
           <ul>
           {INFO_LIST.map((item,index) =>{
            return <div className={styles.contactstrip}
            key={index}
            >
            <img className={styles.image} src={item.iconURl} alt="Github" />
            <a 
            target="_blank"
            rel="noreferrer"
            href={getHref(item)} key={index}>{` ${item.value}`}</a></div>
           })}
           </ul>
        </div>
        </div>
    );
}