import React from 'react'
import HeaderItems from './HeaderItems'
import{
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
  CollectionIcon,
  ShieldExclamationIcon
} from "@heroicons/react/outline";
function Header() {
  return (
    <div>
        <header className='flex flex-col sm:flex-row justify-between m-5 items-center'/>
        <div className='flex flex-grow border-b-4'>
            <a href="#home"><HeaderItems title='home' Icon={HomeIcon}/></a>
            <a href="#About Me"><HeaderItems title='about' Icon={UserIcon}/></a>
            <a href="#projects"><HeaderItems title='my job' Icon={CollectionIcon}/></a>
            <a href="#hire me"><HeaderItems title='hire me' Icon={LightningBoltIcon}/></a>
            <a href="https://www.google.com" className="flex-grow-1 ml-auto"><HeaderItems title='secret' Icon={ShieldExclamationIcon} /></a>
          </div>
        <header/>
    </div>
  );
}

export default Header