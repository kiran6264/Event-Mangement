import { Banner, Marathons, PhotoGallery, UpcomingMarathons, UserFeedback } from '../App'
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>RunRoute | Your Partner in Every Marathon Adventure</title>
            </Helmet>
            <Banner />
            <Marathons />
            <UserFeedback />
            <PhotoGallery />
            <UpcomingMarathons />
        </>
    )
}

export default Home
