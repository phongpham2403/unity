import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Button = ({ className, text, leftIcon, small, large_pri, large_sub, tag, noBgr }) => {
    const classes = cx('wrapper', {
        [className]: className,
        small,
        large_pri,
        large_sub,
        tag,
        noBgr,
    })
    return (
        <>
            <div className={classes}>
                {leftIcon && <span className={cx('left__icon')}>{leftIcon}</span>}
                <span>{text}</span>
            </div>
        </>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
}

export default Button
