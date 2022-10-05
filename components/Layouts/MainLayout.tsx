import styles from  './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';

//Otra forma de hacer el cabezal
type Props = {
  children: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Agustin</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
                { children }
          </main>
        </div>
      )
}
