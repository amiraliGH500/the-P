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
            <a href="#home"><HeaderItems title='خانه' Icon={HomeIcon}/></a>
            <a href="#About-Me"><HeaderItems title='درباره من' Icon={UserIcon}/></a>
            <a href="#clients"><HeaderItems title='مراجع' Icon={CollectionIcon}/></a>
            <a href="#hire-me"><HeaderItems title='استخدام' Icon={LightningBoltIcon}/></a>
            <a href="https://www.google.com" className="flex-grow-1 ml-auto"><HeaderItems title='راز' Icon={ShieldExclamationIcon} /></a>
          </div>
        <header/>
    </div>
  );
}

export default Header