import React from 'react'
import classNames from 'classnames/bind'
import styles from './Game.module.scss'
import Image from '../../../../components/Image'

const cx = classNames.bind(styles)

const GameCard = ({ game, src }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <Image src={src} alt='game' />
            </div>
            <div className={cx('content')}>
                <span>{game}</span>
                <span>Live tournaments, match highlights, and your favorite pro players all in one place</span>
            </div>
        </div>
    )
}

export default GameCard