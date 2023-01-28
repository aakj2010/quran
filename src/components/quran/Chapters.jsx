import React from 'react'
import Rectangle from '../../Assets/Rectangle 1.svg'
import share from '../../Assets/share.svg'
import add_link from '../../Assets/add_link.svg'
import bookmark from '../../Assets/bookmark_add.svg'

function Chapters() {
    return (
        <div className='chapter-container'>
            <div className='chapter-list-container'>
                <div className='chapter-title-container'>
                    <h4 className='chapter-title'>
                        <p>1. Victory upon Victory</p>
                    </h4>
                    <h5 className='chapter-list'>Chapter List</h5>
                </div>
                <div className='chapter-verse-container'>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <img src={Rectangle} alt="" />
                                <p className='verse-number'>1.1</p>
                                <p className='verse-words'>All glory be to Allah, the God of the worlds.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.2</p>
                                <p className='verse-words'>Most Benevolent, Merciful.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.3</p>
                                <p className='verse-words'>Master of the day’s Proceedings.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.4</p>
                                <p className='verse-words'>It is You who we obey; and You who we seek help.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.5</p>
                                <p className='verse-words'>Keep us on the right course.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.6</p>
                                <p className='verse-words'>The course of those whom You have blessed;</p>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-verse-list-container'>
                        <div className='chapter-verse-list'>
                            <div>
                                <p className='verse-number'>1.7</p>
                                <p className='verse-words'>And not of those upon who is Your anger and who had gone astray.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='chapter-desc-container'>
                <div className='ch-verse-desc-box'>
                    <div className='ch-vs-title-box'>
                        <div className='ch-vs-title'>Verse 1.1</div>
                        <div className='ch-vs-img-share'>
                            <img src={share} alt="" />
                            <span>Share</span>
                        </div>
                    </div>
                    <div className='ch-vs-para-container'>
                        <p>All glory be to Allah, the God of the worlds who we seek help  </p>
                    </div>
                </div>

                <div className='ch-keywords-desc-box'>
                    <div className='ch-vs-title-box'>
                        <div className='ch-vs-title'>Keywords</div>
                        <div className='ch-vs-img-share'>
                            <img src={share} alt="" />
                            <span>Share</span>
                        </div>
                    </div>
                    <div className='ch-kw-para-container'>
                        <div className='ch-kw-number'>53...</div>
                        <p className='ch-kw-para-description'>
                            All glory be to Allah, the God of the worlds who we seek help All glory be to Allah, the God of the worlds who we seek help All glory be to Allah, the God of the worlds who we seek help All glory be to Allah, the God of the worlds who we seek help
                        </p>
                    </div>
                </div>

                <div className='ch-hyperlink-box'>
                    <div className='ch-vs-title-box'>
                        <div className='ch-vs-title'>Hyperlink</div>
                        <div className='ch-vs-img-share'>
                            <img src={add_link} alt="" />
                            <span>Add</span>
                        </div>
                    </div>
                    <div className='ch-hl-container'>
                        <div className='ch-hl-number'>85.2</div>
                        <div className='ch-hl-number'>21.2</div>
                        <div className='ch-hl-number'>12.8</div>
                        <div className='ch-hl-number'>100.2</div>
                    </div>
                </div>

                <div className='ch-bookmark-box'>
                    <div className='ch-vs-title-box'>
                        <div className='ch-vs-title'>Bookmark</div>
                        <div className='ch-vs-img-share'>
                            <img src={bookmark} alt="" />
                            <span>Add</span>
                        </div>
                    </div>
                    <div className='ch-bm-container'>
                        <div className='ch-bm-name'>Silence</div>
                        <div className='ch-bm-name'>Covid</div>
                        <div className='ch-bm-name'>Patience</div>
                        <div className='ch-bm-name'>Glory</div>
                    </div>
                </div>

                <div className='ch-notes-box'>
                    <div className='ch-vs-title-box'>
                        <div className='ch-vs-title'>Notes</div>
                    </div>
                    <div className='ch-notes-inline-container'>
                        <textarea className='ch-notes-textarea' placeholder='Enter notes'>

                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chapters