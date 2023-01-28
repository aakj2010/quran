import React from 'react'
import search from '../../Assets/search.svg'
import downArrow from '../../Assets/down_arrow.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RecentSearch from './RecentSearch';

function Header() {

    const recentSearch = [
        {id: 1,value: 'Item 1'},
        {id: 2,value: 'Item 2'},
        {id: 3,value: 'Item 3'}
      ];

    return (
        <>
            <div className='header-wrapper'>
                <div className='search-wrapper'>
                    <div className='search-by-verse'>
                        <div>
                            <input type="text" placeholder='Chapter' />
                        </div>
                        <div>
                            <input type="text" placeholder='Verse' />
                        </div>
                        <div className='search-icon'>
                            <button><img src={search} alt="" /></button>
                        </div>
                    </div>
                    <div className='search-by-words'>
                        <div>
                            <input type="text" placeholder='Search a word in chapters' />
                        </div>
                        <div className='search-icon'>
                            <button><img src={search} alt="" /></button>
                        </div>
                    </div>
                    <div className='recent-search'>
                        <Popup trigger={<button>Recent search &nbsp;<img src={downArrow} alt="" /></button>} position="bottom left">
                            <div>
                                <ul className=''>
                                    {recentSearch.map((car) => <RecentSearch key={car.id}value={car.value} />)}
                                </ul>
                            </div>
                        </Popup>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header