import React from 'react'
import Image from 'next/image'

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container img-table'>
            <h1>Our Approach To Sustainability</h1>
            <h3 className='blue'>Materiality Process</h3>

            <p>We are guided by the concept of materiality
              in our sustainability strategic planning and
              reporting processes. We define materiality as
              those topics and disclosures that embody SMC’s
              significant economic, environmental, social, and
              governance impacts that would substantially
              influence the decision-making activities of our
              stakeholders. Our approach to materiality is in
              line with the principles of the GRI Standards,
              SASB Standards, and other ESG frameworks.
            </p>

            <p>We conducted the materiality assessment
              exercise according to the following steps: </p>

            <p>We developed a long list of possible material
              topics applicable to SMC through peer analysis
              and a review of globally recognized ESG standards
              and frameworks. We identified and
              selected peer companies based on similarity
              in size, operations, and portfolio with SMC’s.
              This provided us with a perspective of the ESG
              issues deemed relevant by our global and local
              peers. We then triangulated the results with
              materiality guidelines from ESG standards and
              frameworks. </p>

            <p>Afterwards, we brought the long list of material
              issues to our stakeholders through a series
              of engagement sessions to determine which
              ESG issues were most significant to them. This
              produced a shortlist of material topics, which
              we further prioritized through a Materiality
              Validation Workshop attended by SMC
              management.</p>

            <h3 className='blue'>Topics Material to Our Business</h3>
            <Image src="material_topics.png" width={1060} height={800} alt='Material Topics' />

            <p>The following ESG topics were identified
              as being the most material to SMC and our
              stakeholders in 2022. The relative significance
              of each of these issues were determined
              based on stakeholder survey feedback and the
              business units’ responses during the validation
              workshop.
            </p>

            <p>The 8 high priority material topics are large
              focus areas of the Company for the next one
              to two years. We endeavor to create and
              launch sustainability strategies, programs, and
              initiatives around these high priority topics
              to be able to address the risks and priorities
              they present to the Group. The remaining 8
              topics were identified as moderate priority
              issues. These topics are already embedded in
              the company’s practices or are specific only to
              certain subsidiaries, rather than across all. We
              continue to track and monitor data related to
              these moderate priority issues.</p>



            <Image src="material_topics_issues.png" width={1060} height={1131} alt='Material Topics Issues Table' />

            <Image src="material_topics_issues_2.png" width={1060} height={1458} alt='Material Topics Issues Table' />


            <p>As we advance in our sustainability endeavor, we will engage our external stakeholders in more
              extensive materiality discussions. </p>

            <h3 className='blue'>Our ESG Data Collection and Validation Process</h3>

            <p>We commit to complete transparency and
              accountability for our ESG actions and
              disclosures to our many stakeholders. We
              adhere to global standards and ensure that
              the data disclosed in this Report are accurate,
              balanced, and complete.
            </p>

            <p>With the support of our external adviser, PwC,
              we developed a comprehensive, standardized
              data template to capture pertinent data
              and disclosures on our material ESG topics
              from our various subsidiaries. The data
              template integrates standards, principles, and
              requirements from various frameworks, such
              as the SEC requirements, GRI Standards, SASB
              Standards, the Task Force for Carbon Related
              Disclosure (TCFD) Framework, and the Carbon
              Disclosure Project Framework. We also created
              a supporting template to focus more on and
              capture detailed data on our environmental
              performance.</p>

            <p>We also conducted workshops with the
              sustainability teams of the different
              subsidiaries included in this Report to facilitate
              a collaborative approach in the data template
              development process. This allowed us to fully
              capture nuances in various industries where
              SMC is present and adjust the templates
              accordingly.</p>

            <h4>Data Collection Process </h4>

            <p>The sustainability teams of our subsidiaries
              were responsible for distributing the data
              templates to their respective business units,
              as well as for collecting, verifying, and
              consolidating the data before submission to the
              SMC parent company.</p>

            <p>The Corporate Sustainability Office of the
              parent company was responsible for collecting,
              reviewing, analyzing, and consolidating the
              data submitted by the various business
              units. Working alongside the Corporate
              Sustainability Office were key representatives
              from the Corporate Affairs Office, Corporate
              Human Resources, Corporate Finance, Office
              of the General Counsel, and the San Miguel
              Foundation, together forming the SMC
              Sustainability Core Team. With a more extensive
              knowledge and understanding of the Group’s
              activities, the Core Team ensured that the
              submitted data were complete and of sufficient
              quality before the final consolidated data were
              utilized as the basis of our core communications
              in this Report.</p>

            <h2 className='green'>We commit to complete
              transparency and
              accountability for
              our ESG actions and
              disclosures to our many
              stakeholders.
            </h2>

            <p>With the insights gained from writing this
              Report, we have plans to make improvements
              to our future Sustainability Reports. Plans
              are in place to enhance and automate our
              data collection and validation processes and
              to utilize data analytics to identify risks and
              opportunities more effectively. By the end of
              2025, we look forward to obtaining external
              assurance on our ESG data and other nonfinancial metrics.</p>

          </section>

        </article>
      </div>
    </section>
  )
}
