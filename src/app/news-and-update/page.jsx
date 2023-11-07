import React from 'react'
import './style.scss'
import Magnetic from '@/components/common/Magnetic'
import Description from '@/components/common/Description'
import NewsBanner from './banner'
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'News and Updates',
  description: 'News and Updates | SMC Sustainability',
}

export default function page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>News & updates</h1>
        </div>

        <NewsBanner />

        <div className="news-tabs-container">
          <div className="tabs">
            <Magnetic><div className="btn-tab active"><span>All news & updates</span></div></Magnetic>
            <Magnetic><div className="btn-tab"><span>Economic</span></div></Magnetic>
            <Magnetic><div className="btn-tab"><span>Environment</span></div></Magnetic>
            <Magnetic><div className="btn-tab"><span>Governance</span></div></Magnetic>
            <Magnetic><div className="btn-tab"><span>Socials</span></div></Magnetic>
          </div>
        </div>

        <div className="tabs-content">
          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>


          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>


          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>


          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>


          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>


          <div className="tab-item">
            <div className="image-container">
              <Image src="news_item.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>Economic  |  Sept. 20, 2023</p>
              <h5>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
              <Link href="#" title="Link">Read More</Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
