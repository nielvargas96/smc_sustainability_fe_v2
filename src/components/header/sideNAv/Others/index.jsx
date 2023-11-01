import Link from "next/link"
import './style.scss'

export default function Others() {
  return (
    <>
      <section className="others">
        <Link className="link" href="#" title="Home">Home</Link>
        <Link className="link" href="#" title="Our Story">Our Story</Link>
        <Link className="link" href="#" title="Corporate">Corporate</Link>
        <Link className="link" href="#" title="Careers">Careers</Link>
      </section>
    </>
  )
}
