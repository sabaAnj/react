import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
      <a href='#'>Home</a>
      <a href='#'>Explore</a>
      <a href='#'>About Us</a>
      <a href='#'>Contact Us</a>
    </div>
  )
}

export default Header
