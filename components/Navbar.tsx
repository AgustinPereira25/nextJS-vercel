import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

export const Navbar = () => {

  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    }
  ];

  return (
    // <nav className={styles['menu-container']}>
    //     <ActiveLink text="Home" href="/" />
    //     <ActiveLink text="About" href="/about"/>
    //     <ActiveLink text="Contact" href="/contact"/>
    //     <ActiveLink text="Pricing" href="/pricing"/>
    // </nav>    
    <nav className={styles['menu-container']}>
        {
          menuItems.map( (item, index) => (
            <ActiveLink key= {index} text={item.text} href={item.href} />    
          ))
        }
    </nav>        
  );
};
