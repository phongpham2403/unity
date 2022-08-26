import React from 'react'
import styles from './YourVideos.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faUpload } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const YourVideos = () => {
    return (
        <div className={cx('wrapper')}>
            <p>Hi Dash, Welcome back</p>
            <p className={cx('title')}>Your Videos</p>
            <div className={cx('file')}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-8 m-12 c-12">
                            <div className={cx('choose')}>
                                <p>Drag files here to upload</p>
                                <div className={cx('submit')}>
                                    <FontAwesomeIcon icon={faUpload} style={{ marginRight: 10 }} />
                                    <p>Or choose file</p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-0 c-0">
                            <div className={cx('drop')}>
                                <p>Other ways to upload</p>
                                <div className={cx('box')}>
                                    <FontAwesomeIcon icon={faBox} style={{ marginRight: 20 }} />
                                    <p>Drop Box</p>
                                </div>
                                <p>Upgrade for up to 7TB with no weekly limits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourVideos
