
import './globals.scss';
import { SmoothScrollProvider } from '@/components/common/SmoothScroll';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import Loading from './loading';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
      <SmoothScrollProvider>
        <body>
          <div className='app'>
            <Header />
            <main className='main'>

              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </main>

            <Footer />
          </div>
        </body>
      </SmoothScrollProvider>
    </html >
  )
}
