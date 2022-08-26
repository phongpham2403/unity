import config from "../config";
import Analytic from "../page/Analytic";
import Chat from "../page/Chat";
import Following from "../page/Following";
import NewFeeds from "../page/NewFeeds";
import NotFound from "../page/NotFound";
import Playlist from "../page/Playlist";
import Settings from "../page/Settings";
import Trending from "../page/Trending";
import YourVideos from "../page/YourVideos";


const publicRoutes = [
    { path: config.routes.home, component: NewFeeds },
    { path: config.routes.newsfeed, component: NewFeeds },
    { path: config.routes.trending, component: Trending },
    { path: config.routes.following, component: Following },
    { path: config.routes.yourvideos, component: YourVideos },
    { path: config.routes.playlist, component: Playlist },
    { path: config.routes.chat, component: Chat },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.analytics, component: Analytic },
    { path: config.routes.all, component: NotFound },
]

export { publicRoutes }