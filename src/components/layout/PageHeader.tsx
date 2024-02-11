import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu, IoMdCamera } from "react-icons/io";
import { PiBellRingingFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import Button from '../Button';
import { FaMicrophone } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const PageHeader: FC = () => {
    const [showFullWidhtSearch, setShowFullWidhtSearch] = useState<boolean>(false)

    return (
        <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4  items-center'>
            <div className='flex gap-4 items-center flex-shrink-0'>
                <Button variant="ghost" size='icon' className=''>
                    <IoMdMenu size={30} />
                </Button>
                <Link to='/'>
                    <img src='./assets/logo.svg' alt="" className='w-14' />
                </Link>
            </div>
            <form className='md:flex hidden gap-4 flex-grow justify-center'>
                <div className='flex flex-grow max-w-[600px]'>
                    <input
                        type="search"
                        placeholder='Search'
                        className='rounded-l-full border border-secondary-border border-1.5 py-1 px-4 text-lg w-full outline-none focus:border-blue-400'
                    />
                    <Button type='button' className='py-2 px-4 rounded-r-full border-l-0 border border-secondary-border flex-shrink-0'>
                        <SlMagnifier size={16} />
                    </Button>
                </div>
                <Button type='button' size='icon' className='flex-shrink-0'>
                    <FaMicrophone size={16} />
                </Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidhtSearch ? 'hidden' : 'flex'}`}>
                <Button onClick={() => setShowFullWidhtSearch(true)} variant='ghost' size='icon' className='md:hidden'>
                    <SlMagnifier size={16} />
                </Button>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <FaMicrophone size={16} />
                </Button>
                <Button variant='ghost' size='icon'>
                    <IoMdCamera size={16} />
                </Button>
                <Button variant='ghost' size='icon'>
                    <PiBellRingingFill size={16} />
                </Button>
                <Button variant='ghost' size='icon'>
                    <FaUserAlt size={16} />
                </Button>
            </div>
        </div>
    )
}

export default PageHeader