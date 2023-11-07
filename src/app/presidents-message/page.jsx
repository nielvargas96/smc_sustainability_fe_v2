import React from 'react'
import Image from 'next/image'

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Message from our president and CEO</h1>

            <p>Every day, we endeavor to serve our country and communities guided by the vision of a brighter and more inclusive future. This has always been at the heart of what we do as a company and this Report is an affirmation of the role our company plays in wider society and in the lives of many Filipinos. It will also hold us to greater account.</p>

            <p>Together with PricewaterhouseCoopers (PwC), our external advisor, we have developed a series of bold sustainability goals and specific targets that offer a common starting point and language to help us focus our efforts and resources. These targets draw on new and existing social and environmental models to deliver economic value for SMC while upholding our responsibilities as good corporate citizens.</p>

            <p>In 2022, we mapped out areas of impact and material topics most important to our stakeholders, customers, our local communities, and our business. We have also made an inventory of internal processes; a good number of which are already best practice in sustainability, but many can still be improved.</p>

            <p>Categorizing our operations alongside ESG issues is crucial to responsibly harness San Miguel’s size and influence for good.</p>

            <b>The following are our four main targets:</b>
            <ol type='a'>
              <li> Establish a circular economy approach by 2040;</li>
              <li>Net zero by 2050;</li>
              <li>At least 15 million people uplifted by 2030; and</li>
              <li>A fully sustainable and ethical supply chain by 2040</li>
            </ol>

            <p>
              Not only will these targets and activities help us collectively deliver change, but they will also help measure the impact of our initiatives.
            </p>

            <p>
              On the one hand, we recognize that this is about optimizing business to be more successful in the long run. But more importantly, it is about understanding and articulating a purpose beyond profit.
            </p>

            <p>As one of the nation’s largest, most diversified conglomerates with revenues equivalent to more than 7% of the Philippines’ GDP (Gross Domestic Product), San Miguel has an enormous impact on the national economy and its host communities—from the people it employs, and the downstream business it generates. We play a critical role in regional and local economies across the country, supporting thousands of jobs in every region. For every peso in profit created by San Miguel, that peso generates at least an additional 2.50 PhP for the larger economy. And for every billion pesos we invest, San Miguel creates at least 1,000 additional jobs</p>

            <h4 className='green'>As a company, we have always taken an active role in solving societal issues. Our 14 billion PhP pandemic response, for instance, is just one of the many ways we put our purpose into practice.
            </h4>

            <p>When you combine the impact of our more than 100 facilities throughout the Asia-Pacific, with the contribution from our supply chain and hundreds of business partners in the Philippines alone, and some 200 billion PhP spent in domestic procurement costs, it is staggering to
              think of our reach.</p>
            <p>As a company, we have always taken an active role in solving societal issues. Our 14 billion PhP pandemic response, for instance, is just one of the many ways we put our purpose into practice. Certainly, our social responsibility model goes beyond simply aligning our philanthropy with business objectives or creating flagship Corporate Social Responsibility (CSR) programs in relevant stakeholder areas. Over 110,700 have benefited from our outreach efforts in 2022, with at least 7,150 members of our Better World communities receiving almost daily support regarding access to food, healthcare, or training and learning programs.
            </p>

            <p>Our very businesses are the best examples of corporate citizenry and civic responsibility in action. If you look at the roads and expressways we have built, the power plants, and the facilities we have put up across the country, you will see that San Miguel is an enabler of prosperity. Where we have led the way—in various parts of the country—we have opened opportunities and stimulated local economies.
            </p>

            <p>We have always put our shoulder to the wheel in improving our operations, directing our efforts towards energy and water efficiency, rethinking supply chains, and transforming business models. While we have always known that these kinds of improvements have the potential to drive competitive advantage, innovation, and revenue growth, sustainability will demand we merge our core values and financial goals into a single corporate strategy.</p>

            <p>We need to anticipate how the climate crisis will directly affect our business. We will need to build more climate-resilient business operations, adopt more aggressive energy transition strategies, and find effective solutions that can—among others—help reduce our carbon footprint.
            </p>

            <p>While we have a long way to go, our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.
            </p>

            <p>This Report sets out the different ways San Miguel’s economic and social impacts are helping businesses and communities across the Philippines and how we are pushing the envelope in areas where our company can create the most meaningful difference. For all of our San Miguel employees, it offers us a framework for understanding our weaknesses and strengths as a company, providing a guide for relevant, urgent action.
            </p>

            <h4 className='green'>Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.</h4>
          </section>

          <section className='image-container'>
            <figure>
              <Image src="ceo_rsa.png" q={100} width={557} height={709} alt='Ramon S. Ang' />
            </figure>
          </section>
        </article>

      </div>
    </section>
  )
}
