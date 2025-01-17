/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from 'react'
import '../../src/index.css';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Chills, Musics} from '../mp3/Music/Music';
import { Images, ImgBackGround } from '../images/images';
import { zingchartList } from '../images/imgZingchart/zingchart';
import { imgPartner } from '../images/imgPartnerJS';

import Content from './../components/Content';
import ItemMusic from './../components/ItemMusic';
import Button from './../components/Button';
import Title from './../components/Title';
import SlideImage from './../components/SlideImage';
import Description from './../components/Description';
import ItemImage from './../components/ItemImage';
import ContainerMain from './../components/ContainerMain';

import { GoChevronRight } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonSwiper from '../components/Skeleton/SkeletonSwiper';
import SkeletonListenNear from '../components/Skeleton/SkeletonListenNear';
import SkeletonHomeMusic from '../components/Skeleton/SkeletonHomeMusic';
import _ from 'lodash';
import axios from 'axios';
import instance from '../service/config';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { actions } from '../redux/actions';

function Home() {
  const state = useSelector((state) => state.backgroundReducer.backgroundBody)
  const stateSidebar = useSelector((state) => state.openSidebarRightReducer)
  const [activeTab, setActiveTab] = useState('all')
  const [itemSlideScreen, setItemSlideScreen] = useState(3)
  // const [data, setData] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [songs, setSongs] = useState([])
  const [listSong, setListSong] = useState([])
  const [images, setImages] = useState([])
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  // Handle active tab
  const tabTitles = [
    {
      tabTitle: 'all',
    },
    {
      tabTitle: 'v-pop',
    },
    {
      tabTitle: 'k-pop',
    },
    {
      tabTitle: 'us-uk',
    },
  ]
  
  const handleBtnActive = (tabTitle) => {
    setActiveTab(tabTitle)
  }

  // Cấu hình Swipper slider
  const swiperProps = {
    spaceBetween: 30,
    slidesPerView: itemSlideScreen,
    loop: true,
    speed: 1000,
    modules: [Autoplay, Navigation, Pagination],
    navigation: true,
    pagination: { clickable: true },
    autoplay: {delay: 3000, disableOnInteraction: false },
    className: 'w-full md:h-fit sm:h-52 xs:h-44 select-none',
  }

  // Cấu hình react-slick
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  }
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  }
  
  const debouceFetchImages = useCallback(async () => {
    try {
      const res = await instance.get('/images/image-slide')
      setImages(res.dt)
    } catch(e) {
      console.log(e)
    } 
  }, [])
    
  useEffect(() => {
    debouceFetchImages()
  },[debouceFetchImages])

  const debouceFetchSongs = useCallback(_.debounce(async () => {
    setIsFetching(true)
    try {
      const res = await instance.post('/music/songs', { genre: activeTab })
      setSongs(res.dt)
      setIsFetching(false)
    } catch(e) {
      console.log(e)
    } 
  }, 500), [activeTab])
  
  const getListSong = async () => {
    try {
      const res = await instance.get('/music/list')
      return res.dt
    } catch(e) {
      console.log(e)
    }
  }
  
  const { data, isLoading, error } = useQuery({ 
        queryKey: ['list-song'],
        queryFn: getListSong,
      })

  useEffect(() => {
    dispatch(actions.getListSongAction(data))
  }, [data])    

  useEffect(() => {
    debouceFetchSongs()
    return () => debouceFetchSongs.cancel()
  }, [activeTab])

  

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
    }, 800)
  }, [])

  // Tính toán break-point để hiển thị số lượng slide
  useEffect(() => {
    const handleToShowSlide = () => {
      const windowWidth = window.innerWidth
        if(windowWidth >= 1340) {
          setItemSlideScreen(3)
        } else if(windowWidth >= 1024) {
          setItemSlideScreen(3)
        } else if(windowWidth >= 768) {
          setItemSlideScreen(2)
        } else {
          setItemSlideScreen(1)
        }
      }
    window.addEventListener('resize', handleToShowSlide)
    handleToShowSlide()
    return () => window.removeEventListener('resize', handleToShowSlide)
  },[])

  return (
    <ContainerMain>    
        {/* <Particle />  */}
        <div className={`${state ? '' : 'bg-primary'}`}>  
                <Swiper {...swiperProps}>
                    {
                      images.length > 0 && images.map((image, index) => (
                        <SwiperSlide key={index} className='md:!h-fit sm:!h-fit xs:!h-fit' >
                          {
                            isLoad 
                            ? (<SkeletonSwiper />)
                            : (<SlideImage image={image}/>)
                          }
                          {/* (<SlideImage image={image}/>) */}
                        </SwiperSlide>
                      ))
                    }
                </Swiper>
                
              <Title title='Gần đây' classNameMore='lg:mt-12 md:mt-8 xs:mt-4 xs:mb-3 sm:mb-5 mt-10 sm:text-xl xs:text-md capitalize'/>   
              <div className='flex sm:overscroll-x-none xs:overflow-x-auto scroll-home md:gap-x-6 xs:gap-x-2 ' >
                  {
                    isLoad 
                    ? (<SkeletonListenNear />)
                    : (Chills.map((item, index) => (
                        <Content key={index} description={item.card[0].desc} dataThumb={item.card[0].thumb} classNameChild='lazy-load ' classNameParent='lg:w-[199px] lg:h-[250px] xs:w-20 xs:h-20 shrink-0' classNameMore='line-clamp-2' classWrapImg='lg:px-3 xs:px-1 xs:first:pl-0 xs:last:pr-0 ' classOurImg='lg:max-h-[199px]'/>                
                      )))    
                  }
          
              </div>  
              <Title title='Mới Phát Hành' classNameMore='capitalize' classNameParent='mt-11 mb-5 mt-10 text-xl'/>       
              <Content>
                <div className='flex flex-wrap gap-3 '> 
                    {
                      tabTitles.map((tab, index) => (
                        <Button key={index} title={tab.tabTitle} onClick={() => handleBtnActive(tab.tabTitle)} className={`rounded-2xl select-none ${activeTab === tab.tabTitle ? 'bg-violet border-b-violet text-white border-none' : ''} text-sm min-w-107 h-6 border `} />                  
                      ))
                    }
                </div>
                <section className='m-h-[340px] grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 grid-rows-4 mt-4'>
                  {
                    isLoad || isFetching
                    ? (<SkeletonHomeMusic listData={12}/>)
                    : (songs.length > 0 && songs.slice(0, 12).map((song, index) => (
                        <ItemMusic key={index} song={song} isDate className='w-full rounded-md hover:bg-searchRose' classWrap='flex justify-between' classSinger='text-sm' classNameMore='w-16 h-16' />
                      )))
                  }
                </section>
              </Content>
              <Content classNameParent='md:block xs:hidden'>
                {
                  Chills.map((item, index) => (
                    <div key={index}>
                      <Title title={item.title} classNameMore='text-xl mb-5 mt-10 capitalize'/>
                      <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 -mx-3'>   
                          {
                            item.card.map((cardItem, index) => (                 
                              <Content key={index} description={cardItem.desc} thumb='' dataThumb={cardItem.thumb && cardItem.thumb} classTitle='line-clamp-2' classNameChild='lazy-load' classNameParent='lg:min-h-[224px] mt-0' classWrapImg='px-3'/>
                            ))          
                          }
                      </div>
                    </div>
                  ))
                }
              </Content>
              <div className='flex justify-between mb-5 mt-10'>
                <Title title="BXH Nhạc Mới" classNameMore='capitalize' classNameParent='text-xl'/>
                <div className='flex items-center'>
                  <Title title="TẤT CẢ" classNameParent='text-sm'/>
                  <GoChevronRight className='text-white text-md ml-1'/>
                </div>   
              </div>

              {/* Slider show */}
              <div className="lg:block xs:hidden slider-container mr-[-10px]">
                <Slider {...settings1} className='new-song snap-x mt-3'>
                  {
                    ImgBackGround.map((img, index) => (
                      <div key={index} className='w-[calc((100%_/_3)_-_11px)] flex items-center snap-center flex-shrink-0 h-150 bg-sidebarRose rounded-md p-4'>
                        <Content classNameParent="flex w-full">
                          <a href='#!' className='block'>
                            <img src={img.src} alt={img.title} className='w-120 h-120 object-cover rounded-md' />
                          </a>    
                          <div className='ml-3 flex flex-col flex-1 justify-between'>
                            <div>
                              <Title title={img.desc} classNameMore='capitalize'/>
                              <Description desc={img.desc.repeat(3)} />
                            </div>  
                            <div className='flex justify-between items-end'>
                              <Title title='#1' classNameMore='capitalize' classNameParent='text-40px leading-none opacity-95' />
                              <Description desc="29.2.2024" classNameMore='text-sm text-white' className='text-4 ' />
                            </div>
                          </div>
                        </Content>
                      </div>
                    ))
                  }
                </Slider>
              </div>

              {/* ZingChart img */}
              <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-7 mt-7'>
                {
                  zingchartList.map((item,index) => (
                    <ItemImage key={index} >
                      <img src={`../images/imgZingchart/${item}`} alt='zingchart' className='w-full rounded-md' />
                    </ItemImage>
                  ))
                }
              </section>

              <Content classNameParent='lg:block xs:hidden mt-10'>
                {
                  Chills.slice(0, 2).map((item, index) => (
                    <div key={index}>
                      <Title title={item.title} classNameMore='text-xl mb-5 capitalize'/>
                      <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 -mx-3'>   
                          {
                            item.card.map((cardItem, index) => (                 
                              <Content key={index} description={cardItem.desc} thumb='' dataThumb={cardItem.thumb && cardItem.thumb} classTitle='line-clamp-2' classNameChild='lazy-load' classNameParent='mt-0' classWrapImg='px-3'/>
                            ))          
                          }
                      </div>
                    </div>
                  ))
                }
              </Content>

              <div className=''>
                <Title title='Radio Nổi Bật' classNameMore='text-xl mb-5 mt-14 capitalize ' />
                <Content classNameParent='slider-container '>
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={18}
                      pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 8,
                        },
                        400: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        639: {
                          slidesPerView: 3,
                          spaceBetween: 14,
                        },
                        865: {
                          slidesPerView: 4,
                          spaceBetween: 18,
                        },
                        1000: {
                          slidesPerView: 5,
                          spaceBetween: 22,
                        },
                        1500: {
                          slidesPerView: 6,
                          spaceBetween: 24,
                        },
                        1700: {
                          slidesPerView: 7,
                          spaceBetween: 24,
                        },
                      }}
                      modules={[Pagination]}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                       {Musics.slice(0, 14).map((music, index) => (
                            <SwiperSlide>
                                  <div className={`${stateSidebar.isOpen ? 'h-[167px]' : 'h-full'} flex-shrink-0 relative transition-all duration-300 rounded-full`}>
                                    <img src={`../../mp3/${music.thumb}`} alt={music.name} className='xl:min-w-[200px] xl:min-h-[200px] lg:min-w-[180px] lg:min-h-[180px] md:min-w-[160px] md:min-h-[160px] sm:min-w-[150px] sm:min-h-[150px] rounded-full object-cover border-4 border-red-600'/>
                                    <img src={`../../mp3/${music.thumb}`} alt={music.name} className='absolute bottom-0 right-0 w-16 h-16 rounded-full border-black object-cover border-2' />
                                    <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-6 text-center rounded-md text-white bg-red-500 capitalize '>Live</span>
                                  </div>
                                  <h2 className='mt-4 text-center font-semibold'>{music.singer}</h2>
                                  <p className='text-center text-xs text-gray-400 font-medium'>
                                    {music.listening}
                                    <span className='ml-1 '>đang nghe</span>
                                  </p>
                            </SwiperSlide>
                          ))}
                    </Swiper>
                </Content>
              </div>

              <Content classNameParent='mt-14'>
                <Title title='Đối tác âm nhạc' classNameMore='mb-5 uppercase tracking-widest text-xs md:font-semibold' classNameParent='text-center ' className='' />
                <ul className='flex items-center justify-evenly flex-wrap gap-x-4 gap-y-6'>
                  {
                    imgPartner.map((item, index) => (
                      <li key={index} className='flex w-[169px] h-[95px] p-3 overflow-hidden rounded-xl bg-white'>
                        <img src={item} alt='img-partner' className='m-auto max-w-[90%] max-h-[90%]'/>
                      </li>
                    ))
                  }
                </ul>
              </Content>
        </div> 
    </ContainerMain>
  )
}

export default memo(Home)