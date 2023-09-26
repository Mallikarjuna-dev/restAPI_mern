import Dashboard from '@/Components/Dashboard'
import Header from '@/Components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='items-center'>
      <Header />
      <Dashboard />
    </div>
  )
}
