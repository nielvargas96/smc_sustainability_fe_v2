import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Human Rights and Labor Practices',
  description: 'Human Rights and Labor Practices | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Human Rights and Labor Practices</h1>


            <Image style={{ borderRadius: '0' }} src="active_cba.png" width={401} height={161} alt='Active CBA' />

            <p>We respect our workers’ rights to freedom of association and collective bargaining. In consonance with our values, we have consistently taken steps to maintain a harmonious relationship between labor and management. By the end of 2022, 34 labor unions were active in the SMC Group and approximately 14.8% of the Company’s rank and file employees were parties to collective bargaining agreements (CBA).</p>

            <p>Each of our subsidiaries has its own Labor
              Relations unit, which closely coordinates with
              the Corporate Human Resources - Labor
              Relations (CHR-LR) department. In line with our
              commitment to comply with labor and other
              related laws, we are committed to undertake the
              following actions:
            </p>

            <ul>
              <li>
                <p>Educating employees about and providing
                  copies of the Company’s Code of Ethics
                  manual and Employee Handbook, which
                  contain the policies and guidelines governing
                  the duties and responsibilities of every SMC
                  employee;</p>
              </li>
              <li>
                <p>Utilizing established communication
                  channels (i.e., labor-management councils,
                  tool-box meetings, townhall assemblies,
                  one-on-one coaching/counseling) in
                  resolving organizational issues, and in
                  case of unresolved matters, activating the
                  escalation protocol to higher management for
                  appropriate decision</p>
              </li>

              <li><p>Promoting active engagement and
                participation of legitimate labor organizations
                and their members in all the activities of the
                San Miguel family; and,</p>
              </li>

              <li>
                <p>Ensuring good faith in the exercise of our
                  prerogatives related to employee discipline
                  by adhering to rules-based and fair
                  administrative investigation procedures, due
                  process requirements, and reasonableness in
                  the imposition of disciplinary actions.</p>
              </li>
            </ul>

            <p>To promote a strong culture of compliance,
              we provide orientation and training for new
              supervisors on relevant labor laws, rules,
              and administrative issuances of the DOLE.
              CHR facilitates seminars and training for new
              supervisors on the proper interpretation and
              modeling of SMC’s Code of Ethics and values.
              Additionally, we continue to champion workers’
              welfare by improving programs to orient new
              employees on their growth opportunities,
              improve their quality of life through industrycompetitive remuneration, and provide
              initiatives that will improve their integration into
              the SMC Group.</p>


            <p>With the challenges brought about by the
              pandemic to workplaces worldwide, we came
              up with ways to effectively address the issues
              of our employees through creative means of
              communication. We utilized virtual meetings
              and conversations to ensure that no employee
              was left behind during the global health crisis.
              Our employees were also given the option to
              seek redress of any grievances through internal
              platforms such as email, Viber, and Facebook
              communities.</p>

            <p>In full compliance with the Constitution and
              other relevant and applicable laws, we have
              instituted clear policies on protecting human
              rights and condemning child and forced
              labor. Likewise, we denounce all acts that
              encourage violation of human rights and other
              related laws.</p>

            <h3 className='orange'>An exemplary  Filipino   company</h3>

            <p>San Miguel Corporation was given special
              recognition for being an exemplary
              Filipino company by the Department
              of Labor and Employment (DOLE) for
              its continuous and sincere efforts to
              help Filipino employees and workers.
              The Company was able to support its
              workforce by hiring and regularizing
              about 25,000 former workers of its thirdparty providers, strictly complying with
              labor laws, and helping over 70,000 in
              its nationwide network throughout the
              pandemic. This was done even as the
              economy and SMC’s businesses have yet
              to fully recover.</p>

            <p>In particular, DOLE extolled SMC’s successful
              completion of its Business Reintegration
              program—where SMC ended its service
              agreements with third-party providers of noncore, auxiliary operations. It enabled some 25,000
              workers to become regular employees with full
              benefits. The employees are under its newly
              established Operations and Maintenance (O&M)
              companies.</p>

            <p>SMC’s Business Reintegration program, which
              had been ongoing even before the pandemic, is
              a clear manifestation of SMC’s sincere effort and
              determination to use its businesses as platforms
              for positive change and to bring about progress for
              many Filipinos.</p>

            <p>DOLE also cited SMC for institutionalizing its
              Group-wide Labor Laws Compliance System to
              ensure and strengthen labor compliance among
              its businesses and contractors, sub-contractors,
              suppliers, and business partners. SMC’s strict
              adherence to labor laws and continuous efforts
              to ensure compliance, not only among its own
              companies but also from those in its network, is
              also a manifestation of the company’s respect
              for the rights of all workers and its core value of
              malasakit.</p>




            <p>SMC’s numerous pandemic response efforts,
              aimed at helping its employees all over the
              country cope with the many impacts of COVID-19,
              also got the Labor Department’s nod. Apart
              from extending various economic assistance
              programs and implementing adequate health and
              safety protocols at all its facilities and offices,
              SMC also invested in putting up its own RT-PCR
              testing laboratory to ensure continuous COVID-19
              surveillance testing of its employees. It also
              successfully implemented a nationwide “Ligtas
              Lahat” employee vaccination program, which saw
              the company hire over 100 medical professionals
              who were deployed to SMC employee vaccination
              sites nationwide and to vaccination centers
              of various LGUs to help with the nationwide
              vaccination drive. By January 2022, over 97%
              of SMC’s target, 70,000 individuals, were fully
              vaccinated, with booster administration beginning
              as early as December 2021.</p>


            <p>SMC’s DOLE recognition is a testament to the
              Group’s unremitting efforts to help and support
              its employees, especially amid challenging times.
              It highlights SMC’s respect for the rights of all
              workers and its core value of malasakit.</p>

            <Image src="RCA.png" width={1150} height={766} alt='RCA' />
            <Image src="sama_sama.png" width={1150} height={766} alt='Group Picture 1 ' />
            <Image src="group_picture_2.png" width={1150} height={863} alt='Group Picture 2' />
            <Image src="group_picture_3.png" width={1150} height={740} alt='Group Picture 3' />
            <Image src="group_picture.png" width={1150} height={740} alt='Group 4' />

          </section>
        </article>
      </div>
    </section>
  )
}
