import Link from 'next/link'

import { DarkLayout } from '../../components/Layouts/DarkLayout'
import { MainLayout } from '../../components/Layouts/MainLayout'

export default function PricingPage() {
  return ( 
    <>
      <h1>Pricing page</h1>

      <h1 className={'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.js</code>
      </p>
    </>
  )
}



PricingPage.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>

  )
}