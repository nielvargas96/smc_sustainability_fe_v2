import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Contributions to the UN SDGs',
  description: 'Contributions to the UN SDGs | SMC Sustainability',
}


export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>

          <section className='description-container img-table'>
            <h1>Contributions to the UN SDGs</h1>


            <Image src="SDGs_1.png" width={740} height={657} alt='SDGs Table' />

            <Image src="SDGs_2.png" width={740} height={145} alt='SDGs Table' />

            <Image src="SDGs_3.png" width={740} height={200} alt='SDGs Table' />

            <Image src="SDGs_4.png" width={740} height={355} alt='SDGs Table' />

          </section>

        </article>
      </div>
    </section>
  )
}
