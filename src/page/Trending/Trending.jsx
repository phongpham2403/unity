import classNames from 'classnames/bind'
import React from 'react'
import Slider from 'react-slick'
import Collection from '../../components/Collection'
import User from './components/User'
import styles from './Trending.module.scss'
import { Trending as TrendingCard } from '../../components/Card'
import {
    cardPic1,
    cardPic2,
    cardPic3,
    cardPic4,
    cardPic5,
    cardPic6,
    trendingGame1,
    trendingGame2,
    trendingGame3,
    trendingGame4,
} from '../../common/images'
import Button from '../../components/Button'
import GameCard from './components/Game'

const cx = classNames.bind(styles)

const Trending = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        mobileFirst: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        mobileFirst: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className={cx('content')}>
            <Collection header="Top Trending Now" options={['Now', 'Yesterday']}>
                <TrendingCard
                    name="Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE"
                    src={cardPic1}
                    number="1"
                />
                <TrendingCard
                    name="Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE"
                    src={cardPic2}
                    number="2"
                />
                <TrendingCard name="New Sub Emotes And Badges! Lets goooo" src={cardPic1} number="1" />
                <TrendingCard
                    name="Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE"
                    src={cardPic3}
                    number="3"
                />
                <TrendingCard name="New Sub Emotes And Badges! Lets goooo" src={cardPic4} number="4" />
                <TrendingCard
                    name="Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE"
                    src={cardPic5}
                    number="5"
                />
                <TrendingCard
                    name="Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE"
                    src={cardPic6}
                    number="6"
                />
                <div className={cx('loadmore')}>
                    <Button text="Load more" large_sub />
                </div>
            </Collection>

            <div className={cx('streamer')}>
                <p>Trending Streamers</p>
                <Slider {...settings}>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </Slider>
            </div>
            <div className={cx('games')}>
                <p>Trending Games</p>
                <Slider {...settings2}>
                    <GameCard game="Call of Duty" src={trendingGame1} />
                    <GameCard game="Counter Strike" src={trendingGame2} />
                    <GameCard game="Fortnite" src={trendingGame3} />
                    <GameCard game="League of Legends" src={trendingGame4} />
                </Slider>
            </div>
        </div>
    )
}

export default Trending
