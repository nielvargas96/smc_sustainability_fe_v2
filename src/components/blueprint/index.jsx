import './style.scss'
import Image from 'next/image'
import Magnetic from '@/components/common/Magnetic'
import Link from 'next/link'

export default function Blueprint() {
  return (
    <section className='section-3'>
      <div className='block-content '>
        <div className='tab-section'>
          <div className='two-col'>
            <div className='description-container'>
              <div className='description'>
                <h3 className='heading-1'>A Blueprint for
                  San Miguel
                </h3>
                <p className='sub-title'>Sustainable Agenda </p>
                <p>
                  We envision a world of good, where our business fosters a sustainable future that is good for the planet, good for people, and good for progress, benefiting present and future generations of Filipinos.
                </p>
                <div className='action'>
                  <Magnetic>
                    <Link className="btn btn-pri" href="#"> <span>Read more</span> </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
            <div className='img-container'>
              <Image priority src='/images/smc_blueprint.png' alt="A Blueprint for San Miguel" width={540} height={610} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}