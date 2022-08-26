import React from 'react'
import PropTypes from 'prop-types'
import { faCheckCircle, faWifi, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LiveChannel.module.scss'
import classNames from 'classnames/bind'
import { cardPic1 } from '../../../common/images'
import Button from '../../Button'
import Image from '../../Image'
const cx = classNames.bind(styles)

const LiveChannel = ({ src }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card__image')}>
                <Image alt="live chanel" src={src} />
            </div>
            <div className={cx('card__content')}>
                <h6 className={cx('card__header')}>2020 World Champs Gaming Warzone</h6>
                <div className={cx('card__user')}>
                    <Image
                        className={cx('card__user--img')}
                        src="https://ui8-unity-gaming.herokuapp.com/img/ava-1.png"
                        alt=""
                    />
                    <div className={cx('card__user--info')}>
                        <div className={cx('card__user--name')}>
                            <span>Tam Tran</span>
                            <span>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                        </div>
                        <span className={cx('card__user--game')}>Call of Duty</span>
                    </div>
                </div>
            </div>
            <div className={cx('card__footer')}>
                <div className={cx('card__live')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faWifi} />} text={'Live'} small />
                </div>
                <div className={cx('card__view')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faCircle} />} text={'4.2K watching'} noBgr />
                </div>
            </div>
        </div>
    )
}

LiveChannel.propTypes = {}

export default LiveChannel
