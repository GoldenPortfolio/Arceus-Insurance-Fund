import React from 'react'
import Logo from '../assets/CoinLogo.jpg'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full  p-[30px]`,
  headerwrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover: opacity-60`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={Logo} alt="logo" width={80} height={220} />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            Buy Arceus Coin
            <div className={styles.badge}></div>
          </div>
          <div className={styles.nav}>
            <div className={styles.navItem}>
              Dashboard
              <div className={styles.badge}></div>
            </div>
            <nav className={styles.nav}>
              <div className={styles.navItem}>
                Crypto Insurance
                <div className={styles.badge}></div>
              </div>
              <div className={styles.nav}>
                <div className={styles.navItem}>CyberSecurity Insurance</div>
              </div>
              <div className={styles.nav}>
                <div className={styles.navItem}>NFT Insurance</div>
                <div className={styles.nav}>
                  <div className={styles.navItem}>
                    Watchlist
                    <div className={styles.badge}></div>
                  </div>
                  <div className={styles.nav}>
                    <div className={styles.navItem}>Learn</div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex-items-center">
              {/* Connect Button */}
              <div className={styles.inputContainer}>
                <Search />
                <input className={styles.input} placeholder="search" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
