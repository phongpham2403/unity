import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './SideBarGroup.module.scss'
import classNames from 'classnames/bind'
import { NavLink, useLocation, useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

const SidebarItem = ({ item, hide }) => {
    return (
        <li
            to={`/${item.text.toLowerCase().replace(' ', '')}`}
            style={
                hide
                    ? {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          padding: 0,
                      }
                    : {}
            }
            key={item.text}
            className={cx('item')}
        >
            <div>
                {item.iconLeft && (
                    <span className={cx('left')}>{item.iconLeft}</span>
                )}
                {!hide ? (
                    <>
                        <span className={cx('text')}>{item.text}</span>
                        {item.iconRight && (
                            <span className={cx('right')}>
                                {item.iconRight}
                            </span>
                        )}
                    </>
                ) : null}
            </div>
        </li>
    )
}

const SidebarGroup = ({ header, sidebarList, hide }) => {
    return (
        <div className={cx('wrapper')}>
            <div
                style={hide ? { paddingLeft: '180px' } : {}}
                className={cx('header')}
            >
                <span>{header}</span>
            </div>
            <ul className={cx('list')}>
                {sidebarList.map((sidebarItem, index) => (
                    <NavLink
                        key={index}
                        to={`/${sidebarItem.text
                            .toLowerCase()
                            .replace(' ', '')}`}
                    >
                        <SidebarItem item={sidebarItem} hide={hide} />
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

SidebarGroup.propTypes = {}

export default SidebarGroup
