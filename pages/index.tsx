// import Head from 'next/head'
import Link from 'next/link'
// import { Navbar } from '../components/Navbar'
import { MainLayout } from '../components/Layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home page</h1>

      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
