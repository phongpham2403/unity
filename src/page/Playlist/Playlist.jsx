import React from 'react'
import styles from './Playlist.module.scss'
import classNames from 'classnames/bind'
import Collection from '../../components/Collection'
import Image from '../../components/Image'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import PlaylistCard from './component'
import { game1, game2, game3, game4 } from '../../common/images'

const cx = classNames.bind(styles)

const Playlist = () => {
    return (
        <div className={cx('wrapper')}>
            <Collection header="All Playlist" options={['Added Time', 'New', 'Free']}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game1} game="Call of Duty" category="Shooting" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game2} game="The Dota 2" category="eSport" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game3} game="League of Legends" category="Online game" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game4} game="Fortnite" category="Shooting" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game1} game="Call of Duty" category="Shooting" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game2} game="The Dota 2" category="eSport" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game3} game="League of Legends" category="Online game" />
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <PlaylistCard src={game4} game="Fortnite" category="Shooting" />
                        </div>
                    </div>
                </div>
            </Collection>
        </div>
    )
}

export default Playlist
