import {
    faAngleDown,
    faArrowRightFromBracket,
    faBars,
    faBell,
    faGamepad,
    faGear,
    faList,
    faLocationCrosshairs,
    faMagnifyingGlass,
    faSquarePlus,
    faStar,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React, { useContext } from 'react'
import { HideContext } from '../../context/HideContext'
import { ShowContext } from '../../context/ShowNaBar'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
    const hideContext = useContext(HideContext)
    const showContext = useContext(ShowContext)
    const { hide } = hideContext
    const { setShow } = showContext
    return (
        <div style={hide ? { left: '90px' } : {}} className={cx('wrapper')}>
            <div className={cx('nav')}>
                <FontAwesomeIcon
                    className={cx('icon_mobile')}
                    icon={faBars}
                    style={{ fontSize: '2rem', marginRight: '36px' }}
                    onClick={() => setShow(true)}
                />
            </div>
            <div className={cx('browse')}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon style={{ fontSize: '20px', marginRight: '20px' }} icon={faLocationCrosshairs} />
                    <span>Browse</span>
                </span>
                <span>
                    <FontAwesomeIcon className={cx('down')} style={{ marginLeft: '60px' }} icon={faAngleDown} />
                </span>
                <div className={cx('sub')}>
                    <div className={cx('list')}>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Popular Categories</span>
                        </div>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Hot Streamers</span>
                        </div>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Trending Videos</span>
                        </div>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Sign In</span>
                        </div>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Sign Up</span>
                        </div>
                        <div className={cx('item')}>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Stories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('search')}>
                <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input type="text" name="" id="" placeholder="Search Everything" />
            </div>
            <div className={cx('notify')}>
                <span>
                    <FontAwesomeIcon icon={faSquarePlus} />
                </span>
                <span className={cx('bell')}>
                    <span>
                        <FontAwesomeIcon style={{ margin: '0 40px' }} icon={faBell} />
                    </span>
                    <span className={cx('qty')}>2</span>
                </span>
                <span className={cx('user')}>
                    <img src="https://ui8-unity-gaming.herokuapp.com/img/avatar.png" alt="" />
                    <div className={cx('control')}>
                        <div className={cx('control_item')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Profile</span>
                        </div>
                        <div className={cx('control_item')}>
                            <FontAwesomeIcon icon={faList} />
                            <span>My Playlist</span>
                        </div>
                        <div className={cx('control_item')}>
                            <FontAwesomeIcon icon={faGamepad} />
                            <span>My Channel</span>
                        </div>
                        <div className={cx('control_item')}>
                            <FontAwesomeIcon icon={faGear} />
                            <span>Settings</span>
                        </div>
                        <div className={cx('control_item')}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <span>Logout</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

Header.propTypes = {}

export default Header
