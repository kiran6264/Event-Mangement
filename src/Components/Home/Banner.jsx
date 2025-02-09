import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


const Banner = () => {
  return (
    <div className="max-w-[1380px] mx-auto mb-12">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        Welcome to RunRoute !
      </h1>
      <Swiper className="my-8" spaceBetween={30} slidesPerView={1} centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}>
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/d6GQgBn/11.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Run for Glory</h2>
              <p>"Join us to conquer miles and make memories."</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/2MCYtGQ/12.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Discover Your Strength</h2>
              <p>Challenge yourself with exciting marathon events today.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/T2mHCRM/13.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Miles of Inspiration</h2>
              <p>Step into the world of marathons and achieve greatness.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/4sLvc4t/14.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Chase Your Dreams</h2>
              <p>Run through inspiring routes and reach new goals.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/X8ng4jG/15.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Every Step Counts</h2>
              <p>Join our marathons and make a difference today.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide>
          <div className="text-white text-center h-[65vh] grid place-items-center rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/2t6k0Zn/16.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Pace Your Passion</h2>
              <p>Unite with runners and explore thrilling challenges.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
