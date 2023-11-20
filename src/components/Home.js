import React from 'react'
import Product from '../Product'
import '../Home.css'
import Header from '../Header'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12123123"
            title={
              'S*MAX Gaming Recliner Chairs for Adults Ergonomic High Back Swivel PU Leather Gamer Chairs with Adjustable Backrest and Footrest Cup Holder Side Pouch Pedestal Gaming Chair Black White'
            }
            price={22.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/61XvfmY+B6S._AC_SY300_SX300_.jpg"
          />
          <Product
            id="12123123"
            title={`UPERFECT True 4K Portable Monitor, [New Version] 15.6'' UHD IPS 3840x2160 USB C , Unique Arch Metal Frame,100% Adobe RGB 600 Nits Brightness, HDR FreeSync Speaker HDMI Type-C OTG w/Smart Case`}
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71cWPw6TxnL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12123123"
            title={
              'Sound Bars for TV 16-inch, Cinematic TV Sound Bar with Impactful Bass, Bluetooth Soundbar for TV with Remote Control, Wall Mountable TV Speakers Sound Bar Work with Traditional or Smart TV, Computer'
            }
            price={62.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/61rLJZvuKZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12123123"
            title={
              'OKIMO Wireless Mouse for Laptop Computer Mouse with USB Receiver 2.4GHz Optical Tracking Computer Cordless Mouse Ergonomic Portable Mouse for PC Mac Laptop Chromebook (Black)'
            }
            price={7.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/61tii0r3+1L._AC_SY300_SX300_.jpg"
          />
          <Product
            id="12123123"
            title={
              'BISSELL 2252 CleanView Swivel Upright Bagless Vacuum with Swivel Steering, Powerful Pet Hair Pick Up, Specialized Pet Tools, Large Capacity Dirt Tank, Easy Empty, Green'
            }
            price={106.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pzkmU3PuL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12123123"
            title={
              'Anova Culinary ANVS01-US00 Anova Precision Vacuum Sealer, Includes 10 Precut Bags, For Sous Vide and Food Storage'
            }
            price={56.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Y-mjjzIgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </>
  )
}

export default Home
