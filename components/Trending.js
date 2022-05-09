import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import TitleLogo from '../assets/TitleLogo4.jpg'
import Image from 'next/image'
import Rate from './cmc-table/rate'
import TrendingCard from './TrendingCard'

const styles = {
  trendingWrapper: `mx-auto mr-5 max-w-screen-2xl`,
  h1: `text-3xl text-white flex items-center relative ml-12 pl-12 left-12 justify-center`,
  flexCenter: `flex items-center`,
  TitleLogo: `flex items-center justify-center`,
}

const trendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
  {
    number: 2,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: false,
    rate: '9.23%',
  },
  {
    number: 3,
    symbol: 'USDT',
    name: 'Tether',
    icon: usdt,
    isIncrement: true,
    rate: '2.34%',
  },
]

const Trending = () => {
  const [checked, setchecked] = useState(false)

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className={styles.TitleLogo}>
          <Image
            src={TitleLogo}
            alt={TitleLogo}
            className="TitleLogo"
            height={80}
          />
        </div>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Arceus Finance Is Where You Unravel The Mysteries of Blockchain And
            Insurance. <br />{' '}
          </h1>
          <div className="flex">
            <p className="text-gray-400">Highlights
            {" "} &nbsp; </p>
            <ReactSwitch className={styles.Switch}
              checked={checked}
              onChange={() => {
                setchecked(!checked)
              }}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            Arceus Cyrpto-Insurance Market Cap is 1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day.{' '}
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard
            title="Trending insurance contracts"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Insurance Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently Added Contracts"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  )
}

export default Trending
