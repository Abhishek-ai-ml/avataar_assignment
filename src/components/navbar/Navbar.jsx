import React, { useEffect, useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import {FaChevronDown} from 'react-icons/fa'
import './navbar.css'
import Logo from '../../assets/Intersect.png'

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
        },
        {
            name: "Electronics",
        },
        {
            name: "Books",
        },
        {
            name: "Music",
        },
        {
            name: "Movies",
        },
        {
            name: "Clothing",
        },
        {
            name: "Games",
        },
        {
            name: "Furniture",
        },
        {
            name: "Electronics",
        },
        {
            name: "Travel",
        },
        {
            name: "Botanical",
        },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleItems, setVisibleItems] = useState([]);
    const [moreItems, setMoreItems] = useState([]);
    const [toggleMore, setToggleMore] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    useEffect(() => {
        if (windowWidth <= 420) {
            setVisibleItems(navItems.slice(0, 1));
            setMoreItems(navItems.slice(1, navItems.length));
        } 
        else if(windowWidth <= 540 && windowWidth >= 400) {
            setVisibleItems(navItems.slice(0, 2));
            setMoreItems(navItems.slice(2, navItems.length));
        }
        else if(windowWidth <= 768 && windowWidth >= 540) {
            setVisibleItems(navItems.slice(0, 4));
            setMoreItems(navItems.slice(4, navItems.length));
        }
        else if(windowWidth < 850 && windowWidth >= 768) {
            setVisibleItems(navItems.slice(0, 4));
            setMoreItems(navItems.slice(4, navItems.length));
        }
        else if(windowWidth <= 960 && windowWidth >= 850) {
            setVisibleItems(navItems.slice(0, 2));
            setMoreItems(navItems.slice(2, navItems.length));
        }
        else if(windowWidth <= 1080 && windowWidth >= 961) {
            setVisibleItems(navItems.slice(0, 3));
            setMoreItems(navItems.slice(3, navItems.length));
        }
        else if(windowWidth <= 1270 && windowWidth >= 1081) {
            setVisibleItems(navItems.slice(0, 5));
            setMoreItems(navItems.slice(5, navItems.length));
        } 
        else {
            setVisibleItems(navItems.slice(0, 7));
            setMoreItems(navItems.slice(7, navItems.length));
        }
    }, [windowWidth])
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='navbar-logo-section'>
                <div>
                    <img src={Logo}/>
                </div>
                <div className='navbar-logo-section-text'>E-COMM</div>
            </div>

            <div className='navbar-items-section'>
                <ul className='navbar-items-section-list'>
                    {
                        visibleItems.map((i) => (
                            <li className='navbar-items-section-list-item'>
                                {i.name}
                            </li>
                        ))
                    }
                </ul>

                <div id='moreSection' className='more-section' onClick={() => {setToggleMore(!toggleMore)}}>
                    <div>More</div>
                    <div className='more-section-icon'><FaChevronDown/></div>

                    {toggleMore && <div className='more-section-list'>
                        {
                            moreItems.map((i) => (
                                <div className='more-section-list-item'>{i.name}</div>
                            ))
                        }
                    </div>}
                </div>
            </div>

            <div className='navbar-items-search-section'>
                <HiOutlineSearch size={20}/>
                <input type='text' placeholder='Search Something'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar