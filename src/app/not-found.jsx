import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='not-found'>
      <div>
        <h1>Page Not Found!</h1> <br />
        <p>Could not find requested resource</p> <br />
        <Link className='btn subsidiary' href="/">Return Home</Link>
      </div>
    </section>
  )
}