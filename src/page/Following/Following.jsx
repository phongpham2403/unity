import React, { useState } from 'react'
import styles from './Following.module.scss'
import classNames from 'classnames/bind'
import Image from '../../components/Image'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faGear, faHome, faPause, faPlay, faVolumeLow, faWifi } from '@fortawesome/free-solid-svg-icons'
import { bg, player1, player2, player3, player4 } from '../../common/images'

const cx = classNames.bind(styles)

const Following = () => {
    const [play, setPlay] = useState(false)
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>Live Matches</p>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-8 m-12">
                            <div className={cx('main')}>
                                <div className={cx('img')}>
                                    <Image src={bg} alt="img" />
                                    <p>24K Watching</p>
                                    <div onClick={() => setPlay(!play)} className={cx('play')}>
                                        {play ? (
                                            <FontAwesomeIcon
                                                className={cx('icon_play')}
                                                icon={faPlay}
                                                style={{
                                                    fontSize: '30px',
                                                    color: '#FF754C',
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                className={cx('icon_pause')}
                                                icon={faPause}
                                                style={{
                                                    fontSize: '40px',
                                                    color: '#FF754C',
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className={cx('control')}>
                                        <div className={cx('quality')}>
                                            <FontAwesomeIcon icon={faPlay} />
                                            <FontAwesomeIcon icon={faVolumeLow} style={{ margin: '0 20px' }} />
                                            <div className={cx('process')}>
                                                <div className={cx('line')}>
                                                    <div className={cx('dot')}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('setting')}>
                                            <FontAwesomeIcon icon={faGear} />
                                            <FontAwesomeIcon icon={faHome} style={{ margin: '0 20px' }} />
                                            <FontAwesomeIcon icon={faExpand} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('footer')}>
                                    <Button
                                        style={{ margin: '10px 0' }}
                                        leftIcon={<FontAwesomeIcon icon={faWifi} />}
                                        text={'Live'}
                                        small
                                    />
                                    <p>Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-0">
                            <div className={cx('list')}>
                                <div className={cx('item')}>
                                    <Image src={player1} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player2} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player3} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player4} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player1} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player2} alt="" />
                                </div>
                                <div className={cx('item')}>
                                    <Image src={player3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Following
