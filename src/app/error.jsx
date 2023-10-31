"use client"

import { useEffect } from 'react'
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/">Back to homepage.</Link>
    </div>
  )
}
