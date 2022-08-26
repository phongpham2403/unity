import React from 'react'
import classNames from 'classnames/bind'
import styles from './Playlist.module.scss'
import Image from '../../../components/Image'
import Button from '../../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const PlaylistCard = ({ src, game, category }) => {
    return (
        <div className={cx('content')}>
            <div className={cx('img')}>
                <Image src={src} />
            </div>
            <div className={cx('info')}>
                <span className={cx('game')}>{game}</span>
                <span className={cx('category')}>{category}</span>
                <Button
                    leftIcon={<FontAwesomeIcon icon={faCircle} />}
                    text={'4.2K watching'}
                    noBgr
                />
            </div>
        </div>
    )
}

export default PlaylistCard