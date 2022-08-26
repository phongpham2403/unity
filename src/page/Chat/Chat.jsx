import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Chat.module.scss'
import Image from '../../components/Image'
import { av1 } from '../../common/images'
import { faGamepad, faStar, faUser } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const Chat = () => {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col l-4 m-4 c-12">
                        <h4 className={cx('header')}>Direct Message</h4>
                        <div className={cx('list')}>
                            <div className={cx('item')}>
                                <div className={cx('avatar')}>
                                    <Image alt="avatar" src={av1} />
                                    <div className={cx('info')}>
                                        <h4>Brown</h4>
                                        <p>3m ago</p>
                                    </div>
                                </div>
                                <div className={cx('number')}>3</div>
                            </div>
                            <div className={cx('item', 'active')}>
                                <div className={cx('avatar')}>
                                    <Image alt="avatar" src={av1} />
                                    <div className={cx('info')}>
                                        <h4>Brown</h4>
                                        <p>3m ago</p>
                                    </div>
                                </div>
                                <div className={cx('number')}>3</div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('avatar')}>
                                    <Image alt="avatar" src={av1} />
                                    <div className={cx('info')}>
                                        <h4>Brown</h4>
                                        <p>3m ago</p>
                                    </div>
                                </div>
                                <div className={cx('number')}>4</div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('avatar')}>
                                    <Image alt="avatar" src={av1} />
                                    <div className={cx('info')}>
                                        <h4>Brown</h4>
                                        <p>3m ago</p>
                                    </div>
                                </div>
                                <div className={cx('number')}>5</div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('avatar')}>
                                    <Image alt="avatar" src={av1} />
                                    <div className={cx('info')}>
                                        <h4>Brown</h4>
                                        <p>3m ago</p>
                                    </div>
                                </div>
                                <div className={cx('number')}>6</div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-8 m-8 c-0">
                        <div className={cx('head')}>
                            <h4 className={cx('mess')}>Message</h4>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFCE73' }} />
                                <FontAwesomeIcon icon={faUser} style={{ margin: '0 20px' }} />
                                <FontAwesomeIcon icon={faGamepad} />
                            </div>
                        </div>
                        <div className={cx('content')}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
