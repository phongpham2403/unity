import React from 'react'
import styles from './Collection.module.scss'
import classNames from 'classnames/bind'
import Select from '../Select'

const cx = classNames.bind(styles)

const Collection = ({ header, options, children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>{header}</p>
                {options ? <Select className={cx('select')} options={options} /> : ''}
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    )
}

export default Collection
