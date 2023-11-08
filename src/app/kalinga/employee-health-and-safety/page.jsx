import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Employee Health and Safety',
  description: 'Employee Health and Safety | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Employee Health and Safety</h1>

            <p>San Miguel has one of the most comprehensive medical benefits programs for employees. Both major and minor illnesses are covered through Health Maintenance Organization (HMO) packages, up to a pre-determined maximum limit depending on the business unit. Medical consultation, medicines and required medical devices may be availed of through the clinics located in each major facility of the Group.</p>

            <p>During the pandemic, we made significant investments in deliberate steps to mitigate any possible spread of COVID- 19 in the workplace, including the following:
            </p>

            <ul>
              <li>
                <p>Opening of an SMC COVID-19 testing laboratory and engagement of external partners to conduct RT-PCR and rapid antigen testing of employees and third-party providers working in SMC facilities and offices for free;</p>
              </li>
              <li>
                <p>
                  Providing sanitation points and disinfection facilities (i.e., handwashing stations, alcohol dispensers, tire and foot baths), as standard fixtures in all SMC offices, plants, and other installations;
                </p>
              </li>
              <li>
                <p>
                  Developing an online application for health and safety declarations of employees; and
                </p>
              </li>
              <li>
                <p>
                  Having Safety Officers stationed at each business unit to consistently monitor and facilitate employee adherence and compliance with minimum health protocols.
                </p>
              </li>
            </ul>

            <Image style={{ borderRadius: '0' }} src="active_cba.png" width={401} height={161} alt='Active CBA' />

            <p>
              All Philippine-based employees, including regular, project-based and consultants, are covered by the Company’s OSH programs. We strive to maintain high standards for safety and health, and consistently work to strengthen a culture of safety in the workplace. Integral to this is the provision of safety and health training for our employees. In full compliance with Republic Act No. 11058 (“An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”), all our employees undergo a DOLE-prescribed eight-hour OSH seminar upon employment.
            </p>

            <p>Furthermore, we actively seek to go beyond standards prescribed by the government’s OSH Administration and the DOLE in relation to general safety and health provisions, drug-free workplace, mental health, and communicable disease prevention, among others. Manuals on Worker Safety Procedures are maintained in each facility. Safety Councils and Safety and Health committees in our business units are tasked to immediately address issues in their respective facilities, including concerns raised by employees. In relation to this, 31 facilities of the Company in Petron, Power, Infrastructure and Cement are accredited under ISO 45001:2018 for their Occupational Health and Safety Management Systems.
            </p>

            <p>We also conduct regular disaster and emergency drills in coordination with the local fire departments, police departments, and the Philippine Red Cross to prepare employees to properly respond in case of emergency situations.
            </p>

            <p>Additionally, our facilities undergo yearly multi-functional audits by our Corporate Technical Audit unit. This group is tasked to provide independent and objective assurance services to improve the operation of the Company’s plants and facilities. The scope of the technical audit includes verification of adherence to government regulations and engineering codes, reporting of significant risk exposures and control issues, and communication of scientific and technical information that would help to improve operations and workplace conditions. Findings from these audits are used to address deficiencies, upgrade facilities, and strengthen existing controls and procedures.
            </p>

          </section>
        </article>
      </div>
    </section>
  )
}
