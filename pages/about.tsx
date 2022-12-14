import Link from 'next/link'

import { DarkLayout } from '../components/Layouts/DarkLayout'
import { MainLayout } from '../components/Layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>

      <h1 className={'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}



AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>

  )
}