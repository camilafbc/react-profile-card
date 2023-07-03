import styles from './styles.module.css';

function Image({ imgprofile}){
    return (
        <>
            <img className={styles.img} src={imgprofile} alt="profile-img" />
        </>
    )
}

export default Image