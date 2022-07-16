import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"

export default function Navbar() {
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation></Navigation>
      <Auth></Auth>
    </nav>
  )
}
