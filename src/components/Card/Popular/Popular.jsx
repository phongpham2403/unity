import React from 'react'
import styles from './Popular.module.scss'
import classNames from 'classnames/bind'
import Image from '../../Image'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const Popular = ({ src }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <Image src={src} alt="category" />
            </div>
            <div className={cx('content')}>
                <Button text="Shooter" tag />
                <h6>Call of Duty</h6>
                <div style={{ margin: '10px 10px 10px -17px' }}>
                    <Button leftIcon={<FontAwesomeIcon icon={faCircle} />} text={'4.2K watching'} noBgr />
                </div>
                <Button text="Follow" large_pri />
            </div>
        </div>
    )
}

export default Popular
