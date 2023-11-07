import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Our Approach',
  description: 'Our Approach | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>

          <section className='description-container'>
            <h1>Our Awards and Recognitions </h1>

            <h3 className='blue'>2022</h3>

            <Image src="awards_2022.png" width={1150} height={700} alt='2022' />
            <p> <b>Special recognition by the Department of Labor
              and Employment (DOLE)</b> <br />
              as an exemplary Filipino
              company, with malasakit for its own people (SMC)
            </p>

            <p>French Government’s Legion of Honor for Ramon S. Ang</p>

            <p><b>Forbes Magazine, World’s Best Employers List</b> (SMC placed 174th out of 800 companies)</p>

            <p><b>ASEAN Corporate Governance Scorecard</b> <br />
              – Three Golden Arrows as a top-performing
              publicly-listed company in the Philippines given by
              the Institute of Corporate Directors (SMFB)</p>

            <p><b>The Asset Triple A Country Awards for Sustainable Finance</b> <br />
              – San Miguel Global Power
            </p>

            <p><b>Alpha Southeast Asia ESG/Green Finance Awards</b> <br />
              – San Miguel Global Power
            </p>

            <p><b>Presidential Mining Environmental Award</b> <br />
              – Titanium Achievement Award for Quarry
              Operator Category, Northern Cement Corporation</p>

            <p>Consistently recognized as a <b>Top Taxpayer in the
              Local Government Units (LGUs)</b>  where we operate
              and by the government’s revenue collection
              agencies, in particular the Bureau of Customs</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel, Inc.</p>

            <p><b>Monde Selection Awards: Gold</b> <br />
              – Ginebra San Miguel Premium Gin, Antonov
              Vodka, Ginebra San Miguel, 1834 Premium
              Distilled Gin, GSM Blue Light Gin, GSM Blue
              Flavors Pomelo, Vino Kulafu
            </p>

            <p><b>Monde Selection Awards: Silver</b>
              – GSM Blue Flavors Mojito, GSM Blue Flavors
              Margarita</p>

            <h3 className='blue'>2021</h3>
            <Image src="awards_2021.png" width={1150} height={700} alt='2021' />

            <p><b>The Asset ESG Corporate Awards</b> <br />
              – San Miguel Corporation</p>

            <p><b>The Asset Gold Award in Excellence in
              Environmental, Social and Governance</b> <br />
              – San Miguel Corporation</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel</p>

            <p><b>Monde Selection Awards: Gold</b> <br />
              – Ginebra San Miguel Premium Gin, Antonov
              Vodka, Ginebra San Miguel, GSMI Blue Light Gin,
              GSM Blue Flavors Pomelo, Vino Kulafu, GSM Blue
              Flavors Mojito</p>

            <p><b>Monde Selection Awards: Silver</b> <br />
              – GSM Blue Flavors Margarita
            </p>


            <h3 className='blue'>2020</h3>
            <Image src="awards_2020.png" width={1150} height={700} alt='2020' />

            <p><b>Corporate Governance Asia</b> <br />
              – San Miguel Corporation</p>

            <p> <b>10th Asian Excellence Award – Asia’s Best in CSR</b> <br />
              – San Miguel Corporation</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel
            </p>

            <p><b>Asia CEO Awards</b> <br />
              – Lifetime Contributor Award given to Ramon S.
              Ang for his leadership, contribution to the country,
              and the pandemic response of SMC
            </p>

            <p><b>Forbes Magazine</b> <br />
              – Ramon S. Ang as one of Asia’s business leaders
              who stepped up efforts to help combat COVID-19
            </p>

          </section>

        </article>
      </div>
    </section>
  )
}
