import React, { useContext, useState } from 'react'
import { HideContext } from '../context/HideContext'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import classNames from 'classnames/bind'
import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

const Layout = ({ children }) => {
    const hideContext = useContext(HideContext)
    const { hide, setHide } = hideContext

    return (
        <>
            <Sidebar hide={hide} setHide={setHide}></Sidebar>
            <div
                className={cx('wrapper')}
                style={{
                    position: 'absolute',
                    top: 96,
                    left: hide ? 90 : 256,
                    right: 0,
                    transition: 'all linear 0.25s',
                }}
            >
                <Header hide={hide} setHide={setHide} />
                {children}
            </div>
        </>
    )
}

export default Layout
