import classNames from 'classnames/bind'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './Slider.module.scss'

import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import { slider1, slider2, slider3, slider4 } from '../../common/images'
import Button from '../Button'
import Image from '../Image'
const banners = [
    {
        id: 0,
        src: slider1,
    },
    {
        id: 1,
        src: slider2,
    },
    {
        id: 2,
        src: slider3,
    },
    {
        id: 3,
        src: slider4,
    },
]
const cx = classNames.bind(styles)
const SliderComponent = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        useCSS: true,
        speed: 1000,
        slickGoTo: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToScroll: 3,
                },
            },
        ],

        customPaging: (i) => (
            <div style={{ width: '96px', height: '56px' }}>
                {banners
                    .filter((banner) => banner.id === i)
                    .map((banner, index) => {
                        return <Image className={cx('image')} key={index} alt="banner" src={banner.src} />
                    })}
            </div>
        ),
    }

    return (
        <div>
            <div className={cx('wrapper')}>
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <Image className={cx('slider_img')} key={index} src={banner.src} alt="slider" />
                    ))}
                </Slider>
                <div className={cx('info')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faWifi} />} text={'Live'} small />
                    <h6>Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs</h6>
                    <Button text="Watch" large_pri />
                </div>
            </div>
        </div>
    )
}

export default SliderComponent
