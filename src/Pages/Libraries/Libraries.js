import React, { useEffect, useState } from 'react'
import ContainerMain from '../../Component/ContainerMain'
import { IoPlayCircleSharp } from "react-icons/io5";
import { HiPlusSmall } from "react-icons/hi2";
import axios from 'axios';
import { LuMusic } from 'react-icons/lu';
import BtnRadius from '../../Component/BtnRadius';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/actions';
import Account from '../../Component/Account';

function Libraries() {
  const [dataMusic, setDataMusic] = useState([])
  const [activeHeart, setActiveHeart] = useState(false)
  const [activeTab, setActiveTab] = useState('Yêu thích')
  const [activeId, setActiveId] = useState()
  const [activeTab2, setActiveTab2] = useState('Bài hát')
  const dispatch = useDispatch()

  const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://zing-mp3-had.vercel.app/mp3' 
  : 'http://localhost:3333/mp3';
  const buttons1 = [
    'Bài hát',
    'Album',
    'MV',
  ]
  const buttons2 = [
    'Yêu thích',
    'Đã tải lên'
  ]

  const handleHeart = (e, id) => {
    e.stopPropagation()
    setActiveHeart(!activeHeart)
    setActiveId(id)
  }
  const handleClick = e => {
    e.preventDefault()
  }
  const handleGetInfoMusic = (item) => {
    dispatch(actions.getInfoSongAction({ 
      song: item, 
      activeAudio: true, 
      autoPlay: true,
      prevSong: false,
      nextSong: false
    }))
  }
  const handleActive = (btn) => {
    setActiveTab(btn)
  }
  const handleActive2 = (btn) => {
    setActiveTab2(btn)
  }
  useEffect(() => {
    const fetching = () => {
      axios.get('https://json-server-mp3.onrender.com/mp3')
        .then(response => setDataMusic(response.data))
        
        .catch(function (error) {
          console.log(error);
        })
        
    }
    fetching()
  },[API_URL])

  return (
    <ContainerMain className='flex justify-center w-full text-white'>
      <h1 className='flex items-center gap-2 text-[40px] font-bold text-white'>
        Thư viện
        <IoPlayCircleSharp className='text-xxl' />
      </h1>
      <section className=' mt-[40px]'>
        <h2 className='flex items-center gap-1 font-bold uppercase text-white'>
          Playlist
          <BtnRadius>
            <HiPlusSmall className=''/>
          </BtnRadius>
        </h2>
        <ul className='flex items-center justify-between text-white mt-5'>
          {
            dataMusic.slice(0,5).map((item, index) => (
              <li key={index} className='w-[290px] h-[290px] flex-shrink-0'>
                <a href='/' className='block h-full'>
                  <img src={`/mp3/imgMusic/${item.information.thumb}`} alt='img' className='w-full h-full object-cover rounded-md' />
                  <h3 className='text-sm font-medium mt-2'>{item.name.song}</h3>
                  <p className='text-xs text-[#ffffff80] mt-1'>{item.name.singer}</p>
                </a>
              </li>
            ))
          }
        </ul>
        <div className='flex items-center gap-7 uppercase text-sm font-medium text-white mt-[96px]'>
          {
            buttons1.map((btn, index) => (
              <button key={index} className={`${activeTab2 === btn ? 'text-[#3560f5]' : ''} min-w-10`} onClick={() => handleActive2(btn)}>{btn}</button>
            ))
          }
          
        </div>
        <div className='flex items-center gap-4 uppercase text-white mt-7'>
          {
            buttons2.map((btn, index) => (
              <button  
                key={index} 
                onClick={() => handleActive(btn)}
                className={`${activeTab === btn ? 'bg-[#3560f5] border-[#3560f5]' : ''} min-w-[87px] h-[25px] px-3 rounded-full text-xs border`}>{btn}</button>
            ))

          }
          
        </div>
        <div>
          <div className='flex items-center uppercase text-[#ffffff80] mt-9'>
            <div className='w-1/2 text-xs font-medium '>
              <h3 className='ml-6'>Bài hát</h3>
            </div>
            <div className='flex-1 text-xs font-medium '>
              <h3>Album</h3>
            </div>
            <div className='ml-3 text-xs font-medium '>
              <h3>Thời gian</h3>
            </div>
          </div>
          <ul className='text-white mt-4 -mx-3'>
            {
              dataMusic.map(song => (
                  <li key={song.id} className='px-2 py-2 hover:bg-sidebarRose hover:border-transparent rounded-sm border-t-1 border-b-1 border-[#ffffff0d]' onClick={() => handleGetInfoMusic(song)}>
                    <a href='/' className='flex items-center' onClick={handleClick}>
                      <div className='flex items-center gap-3 w-1/2'>
                        <LuMusic />
                        <div className='w-10 h-10 overflow-hidden rounded-md'>
                          <img src={`/mp3/imgMusic/${song.information.thumb}`} alt='img' className='w-full h-full object-cover' />
                        </div>
                        <div className='capitalize'>
                          <h3 className='text-sm font-medium'>{song.name.song}</h3>
                          <p className='text-xs text-[#ffffff80]'>{song.name.singer}</p>
                        </div>
                      </div>
                      <div className='flex-1 capitalize text-xs text-[#ffffff80]'>
                        <p>{song.information.album}</p>
                      </div>
                      <div className='flex items-center gap-4 text-xs text-[#ffffff80]'>
                        <div onClick={(e) => handleHeart(e, song.id)}> 
                          {
                            activeHeart && activeId === song.id ? (<GoHeartFill />) : (<GoHeart />)
                          }
                        </div>
                        <span>05:02</span>
                      </div>
                    </a>
                  </li>
              ))
            }
          </ul>
        </div>
      </section>
      <Account />
    </ContainerMain>
  )
}

export default Libraries