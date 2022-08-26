import { faCheckCircle, faCircle, faHeart, faPlay, faReply, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React from 'react'
import { av1 } from '../../../common/images'
import Button from '../../Button'
import Image from '../../Image'
import styles from './Trending.module.scss'

const cx = classNames.bind(styles)

const Trending = ({ name, number, src }) => {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className={cx('inner')}>
                    <div className="row">
                        <div className="col l-4 m-5 c-12">
                            <div className={cx('img')}>
                                <Image src={src} alt="image" />
                                <div className={cx('number')}>{number}</div>
                            </div>
                        </div>
                        <div className="col l-8 m-7 c-12">
                            <div className={cx('info')}>
                                <div className={cx('status')}>
                                    <Button leftIcon={<FontAwesomeIcon icon={faWifi} />} text={'Live'} small />
                                    <Button text="Shooter" tag />
                                </div>
                                <div className={cx('name')}>
                                    <h4>{name}</h4>
                                </div>
                                <div className={cx('view')}>
                                    <Button
                                        leftIcon={<FontAwesomeIcon icon={faCircle} style={{ color: '#0049c6' }} />}
                                        text={'4.2K watching'}
                                        noBgr
                                    />
                                    <Button leftIcon={<FontAwesomeIcon icon={faCircle} />} text={'1 week ago'} noBgr />
                                </div>
                                <div className={cx('user')}>
                                    <Image src={av1} alt="avatar" />
                                    <div className={cx('user_info')}>
                                        <div className={cx('user_name')}>
                                            <span>Gabriel Erickson</span>
                                            <FontAwesomeIcon
                                                style={{ color: '#7fba7a', fontSize: '1.6rem' }}
                                                icon={faCheckCircle}
                                            />
                                        </div>
                                        <span className={cx('game')}>Call of Duty</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('action')}>
                <div className={cx('reply')}>
                    <FontAwesomeIcon icon={faReply} />
                </div>
                <div className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
                <div className={cx('heart')}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        </div>
    )
}

export default Trending
