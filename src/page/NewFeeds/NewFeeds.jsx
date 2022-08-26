import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../layout/Layout'
import Slider from '../../components/Slider'
import classNames from 'classnames/bind'
import styles from './NewFeeds.module.scss'
import Collection from '../../components/Collection'
import { LiveChannel, Popular } from '../../components/Card'
import { cate2, cate3, cate4, cardPic1, cardPic2, cardPic3 } from '../../common/images'

const cx = classNames.bind(styles)

const NewFeeds = (props) => {
    return (
        <>
            <Slider />
            <div className={cx('content')}>
                <Collection header="Live channels" options={['Popular', 'New', 'Free']}>
                    <div className="grid">
                        <div className="row">
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic1} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic2} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Collection>
                <Collection header="Popular Categories">
                    <div className="grid">
                        <div className="row">
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <Popular src={cate2} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <Popular src={cate3} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <Popular src={cate4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Collection>
                <Collection header="Recommended Videos" options={['Most Recent', 'New', 'Free']}>
                    <div className="grid">
                        <div className="row">
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic1} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic2} />
                                </div>
                            </div>
                            <div className="col l-4 m-6 c-12">
                                <div className="mt-32">
                                    <LiveChannel src={cardPic3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Collection>
            </div>
        </>
    )
}

NewFeeds.propTypes = {}

export default NewFeeds
