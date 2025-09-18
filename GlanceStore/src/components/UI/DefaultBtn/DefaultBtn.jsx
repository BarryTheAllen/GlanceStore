import styles from "./DefaultBtn.module.css"

const DefaultBtn = ({text, width, height}) => {
  return (
    <button className={styles.btn} style={{width: width, height: height}}>{text}</button>
  )
}

export default DefaultBtn