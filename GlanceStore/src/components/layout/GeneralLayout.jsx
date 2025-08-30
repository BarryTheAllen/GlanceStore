import { Outlet } from 'react-router'
import Header from '../pages/HomeSection/header/Header'
import MobileNav from "../UI/mobileNav/MobileNav"



const GeneralLayout = () => {
  return (
    <>
    <Header/>
    <main className='main'>
    <Outlet/>
    <MobileNav/>
    </main>
    </>
  )
}

export default GeneralLayout