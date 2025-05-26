import logo from '../assets/logo.png'
import ChangeButton from './ChangeButton'

const Header = () => {
  return ( 
  <header className='flex text-xl sticky top-0 shadow-xl shadow-slat-400 bg-stone-200 px-8 py-4 items-end justify-between'>
    <a href="/">
        <img className='h-16 px-2' src={logo} alt="Logo do site" />
    </a>
    <ChangeButton/>
  </header>
  )
}

export default Header