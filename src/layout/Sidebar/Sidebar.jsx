import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
    faArrowTrendUp,
    faBars,
    faChartLine,
    faCircle,
    faCircleChevronDown,
    faCirclePlus,
    faCircleXmark,
    faClose,
    faCommentDots,
    faDownload,
    faGamepad,
    faGear,
    faList,
    faMoon,
    faSun,
    faVideo,
    faWifi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { av1, logo, sidebarBanner } from '../../common/images'
import Button from '../../components/Button'
import Image from '../../components/Image'
import { HideContext } from '../../context/HideContext'
import { ShowContext } from '../../context/ShowNaBar'
import styles from './Sidebar.module.scss'
import SidebarGroup from './SidebarGroup'

const cx = classNames.bind(styles)

const sidebarListNewFeeds = [
    {
        iconLeft: <FontAwesomeIcon icon={faGamepad} />,
        text: 'News Feed',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faArrowTrendUp} />,
        text: 'Trending',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faUser} />,
        text: 'Following',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faVideo} />,
        text: 'Your Videos',
        iconRight: <FontAwesomeIcon icon={faCirclePlus} />,
    },
    {
        iconLeft: <FontAwesomeIcon icon={faList} />,
        text: 'Playlist',
    },
]
const sidebarListFollowing = [
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Richard',
        iconRight: <FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={faWifi} />,
    },
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Vincent',
        iconRight: (
            <FontAwesomeIcon style={{ fontSize: '0.8rem', color: '#7fba7a', marginLeft: '4px' }} icon={faCircle} />
        ),
    },
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Richar',
        iconRight: <FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={faWifi} />,
    },
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Rihard',
        iconRight: (
            <FontAwesomeIcon style={{ fontSize: '0.8rem', color: '#7fba7a', marginLeft: '4px' }} icon={faCircle} />
        ),
    },
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Vinent',
        iconRight: <FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={faWifi} />,
    },
    {
        iconLeft: <Image src={av1} className={cx('avatar')} />,
        text: 'Vincen',
        iconRight: (
            <FontAwesomeIcon style={{ fontSize: '0.8rem', color: '#7fba7a', marginLeft: '4px' }} icon={faCircle} />
        ),
    },
    {
        iconLeft: <FontAwesomeIcon style={{ color: '#000' }} icon={faCircleChevronDown} />,
        text: 'Load more',
    },
]
const sidebarListGame = [
    {
        iconLeft: <FontAwesomeIcon icon={faCommentDots} />,
        text: 'Chat',
        iconRight: (
            <span
                style={{
                    backgroundColor: '#FF754C',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    color: '#fff',
                    padding: '3px',
                }}
            >
                20
            </span>
        ),
    },
    {
        iconLeft: <FontAwesomeIcon icon={faGear} />,
        text: 'Settings',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faChartLine} />,
        text: 'Analytics',
    },
]

const Sidebar = () => {
    const hideContext = useContext(HideContext)
    const showContext = useContext(ShowContext)
    const { hide, setHide } = hideContext
    const { show, setShow } = showContext
    const [theme, setTheme] = useState(false)
    const inputRef = useRef()
    const handleChangeTheme = () => {
        setTheme(!theme)
    }

    return (
        <>
            <input hidden type="checkbox" name="" id="bars" className={cx('bars')} />
            <div className={cx('wrapper', show ? 'show' : '')}>
                <div className={cx('sidebar__header')}>
                    <Link to="/">
                        <Image alt="logo" src={logo} className={cx('logo')} />
                    </Link>
                    {/* <label htmlFor="bars"> */}
                    <div className={cx('nav')}>
                        <FontAwesomeIcon
                            className={cx('close_icon')}
                            icon={faClose}
                            style={{ fontSize: '2.6rem', paddingLeft: 38 }}
                            onClick={() => setShow(false)}
                        />
                    </div>
                    {/* </label> */}
                    <label onClick={() => setHide(!hide)} htmlFor="bars" className={cx('icon')}>
                        <FontAwesomeIcon className={cx('bars_icon')} icon={faBars} />
                    </label>
                </div>
                <div className={cx('sidebar_content')}>
                    <SidebarGroup hide={hide} header="New Feeds" sidebarList={sidebarListNewFeeds} />
                    <SidebarGroup hide={hide} header="Following" sidebarList={sidebarListFollowing} />
                    <SidebarGroup hide={hide} header="Unity Gaming" sidebarList={sidebarListGame} />
                    {!hide && (
                        <div className={cx('banner')}>
                            <Image src={sidebarBanner} className={cx('img')} />
                            <Button className={cx('join')} large_pri text="Join Now" />
                            <div className={cx('banner__intro')}>
                                <h1>Join the Unity Gaming</h1>
                                <p>Discover the best livestreams anywhere.</p>
                            </div>
                            <div className={cx('close')}>
                                <FontAwesomeIcon className={cx('icon__close')} icon={faCircleXmark} />
                            </div>
                            <div className={cx('overlay')}></div>
                        </div>
                    )}
                </div>
                <div className={cx('footer')}>
                    <input hidden type="checkbox" className={cx('theme__input')} name="" id="theme" />
                    {theme ? (
                        <span>
                            <FontAwesomeIcon icon={faMoon} />
                        </span>
                    ) : (
                        <label onClick={handleChangeTheme} htmlFor="theme">
                            <FontAwesomeIcon icon={faSun} />
                        </label>
                    )}
                    <label onClick={handleChangeTheme} htmlFor="theme" ref={inputRef} className={cx('theme')}></label>
                    <span>
                        <FontAwesomeIcon icon={faDownload} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Sidebar
