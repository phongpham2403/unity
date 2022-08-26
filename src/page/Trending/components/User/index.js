import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { av1 } from '../../../../common/images'
import Button from '../../../../components/Button'
import Image from '../../../../components/Image'
import styles from './User.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const User = () => {
    return (
        <div className={cx('user')}>
            <div className={cx('avatar')}>
                <Image src={av1} alt="avatar" />
            </div>
            <div className={cx('info')}>
                <h4>Daniel Brothers</h4>
                <span>Call of Duty</span>
                <span style={{ marginLeft: '-14px', display: 'inline-block' }}>
                    <Button leftIcon={<FontAwesomeIcon icon={faCircle} />} text={'4.2K watching'} noBgr />
                </span>
            </div>
        </div>
    )
}

export default User