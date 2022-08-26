import classNames from 'classnames'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={src} alt={alt} {...props} />
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

export default Image
