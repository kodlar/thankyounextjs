//React snippets extension yükledim react yazınca otomatik component oluşturuyor
import React from 'react'
import styles from "../styles/Layout.module.css";
import Nav from './Nav';
const Layout = ({children}) => {
  return (
      <>
    <Nav />
    <div className={styles.container}>

        <main className={styles.main}>
            
        <h1>Layout her yerde</h1>
            {children}
        </main>
    </div>
    </>
  )
}

export default Layout