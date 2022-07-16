import React from 'react'
import { AiOutlineControl, AiOutlineBarChart, AiOutlineSearch } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import { RiMap2Line } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { GiBatwingEmblem } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import Reports from './components/Reports'
import Map from './components/Map'
const App = () => {
  return (
    <>
      <section id='sidebar'>
        <section className='title-container'>
          <div className='top-icon'>
            <GiBatwingEmblem />

          </div>

        </section>
        <section className='links-container'>
          <div className='links'>
            <div className='icon'>
              <AiOutlineControl />
            </div>
            <span>Dashboard</span>
          </div>
          <div className='links'>
            <div className='icon'>
              <AiOutlineBarChart />
            </div>
            <span>Analytics</span>
          </div>
          <div className='links'>
            <div className='icon'>
              <CgNotes />
            </div>
            <span>Logs</span>
          </div>
          <div className='links'>
            <div className='icon'>
              <BiMessageDetail />
            </div>
            <span>Messages</span>
          </div>
          <div className='links'>
            <div className='icon'>
              <RiMap2Line />
            </div>
            <span>Map</span>
          </div>
        </section>
      </section>
      <section id='main-content'>
        <section id='top-section'>
          <div className='input-box'>
            <input placeholder='search...' />
            <div id='search-icon'>
              <FiSearch />
            </div>
          </div>
          <span className='action-icons'>
            <div className='action-icon-one'></div>
            <div className='action-icon-two'></div>
          </span>
        </section>
        <h1 id='welcome-title'>Welcome, Batman.</h1>
        <section id='grid-container'>
          <div className='grid-item one'>
one
          </div>
          <div className='grid-item-two'>
<Reports />
          </div>
          <div className='grid-item three'>
three
          </div>
          <div className='grid-item-four'>
<Map />
          </div>
        </section>
      </section>
    </>
  )
}

export default App

