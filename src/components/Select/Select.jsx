import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Select = ({ className, options }) => {
    const classes = cx('wrapper', {
        [className]: className,
    })
    return (
        <select className={classes}>
            {options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
}

export default Select
