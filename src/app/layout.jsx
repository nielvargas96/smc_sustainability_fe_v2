
import './globals.scss';
import { SmoothScrollProvider } from '@/components/common/SmoothScroll';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import Loading from './loading';
import { ModalProvider } from '@/components/modal/modalContext';
import Modal from '@/components/modal/modal';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
      <body>
        <div className='app'>
          <ModalProvider>
            <Header />
            <SmoothScrollProvider>
              <main className='main'>
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </main>
            </SmoothScrollProvider>
            <Footer />
            <Modal />
          </ModalProvider>
        </div>
      </body>
    </html >
  )
}
