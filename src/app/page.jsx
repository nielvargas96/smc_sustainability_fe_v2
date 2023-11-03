import Blueprint from '@/components/blueprint'
import './page.scss'
import Hero from '@/components/hero'
import Rsa from '@/components/rsa'
import Sustainability from '@/components/sustainbility'
import Targets from '@/components/targets'
import Glance from '@/components/glance'

export const metadata = {
  title: 'SMC Sustainability',
  description: 'A world of good.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Rsa />
      <Blueprint />
      <Sustainability />
      <Targets />
      <Glance />
    </>
  )
}
