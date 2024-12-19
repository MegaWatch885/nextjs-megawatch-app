import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autopay, Autoplay } from 'swiper/modules';
import Loader from "@/components/Loader";
import Link from "next/link";
import { FaAngleDoubleUp, FaArrowRight, FaCheck, FaDownload, FaEye, FaFilm, FaHeart, FaPhotoVideo, FaPlug, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard, FaLandMineOn } from "react-icons/fa6";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import { RiMovie2Fill, RiMovieFill } from "react-icons/ri";
import { GiGhost, GiMagicBroom, GiMagickTrick } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { SpeedInsights } from '@vercel/speed-insights/next';



export default function Home() {

  // fetch data with usehook
  const { alldata, loading } = useFetchData('/api/getmovies');

  const [wloading, setWLoading] = useState(true);

  // Video Animation function

  useEffect(() => {
    // check if user visited the home page before
    const visitedbefore = sessionStorage.getItem('visitedHome');
    if (visitedbefore) {

      // if viisited before, don't show animation
      setWLoading(false);
    } else {
      // if its the first time vist show animation welconme
      setTimeout(() => {
        setWLoading(false);
        // set flag to indicates that user has visited the home page
        sessionStorage.setItem('visitedHome', 'false')
      }, 3000); // 3 secconds 
    }

  }, []);

  // filter for published movies required
  const publishedData = alldata.filter(ab => ab.status === "publish");


  //this function for filter by genre

  const [selectedGenre, setSelectedGenre] = useState('all movies');

  const genres = ['all movies', 'action', 'adventure', 'animation', 'comedy', 'drama', 'crime', 'fantasy', 'horror', 'romance', 'thriller', 'science_fiction', 'korean_drama', 'cheinese_drama'];

  const categories = ["bollywood", "hollywood", "south", "gujarati", "marvel_studio", "tv_shows", "web_series"];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  }




  const filteredData = publishedData.filter(movie => {
    if (selectedGenre === 'all movies') return true;
    if (categories.includes(selectedGenre)) {
      return movie.category === selectedGenre;

    } else {
      return movie.genre.includes(selectedGenre);
    }
  })

  return (

    <>
      <Head>
        <title>MegaWatch - Download Latest Movies & Series</title>
        <meta name="description" content="Download & Streaming Latest Movies & Web Series For Free" />
        <meta name="keywords" content="MegaWatch, Megawatch, megawatch, megawatch.in, Megawatch.in, MegaWatch.in latest movies download, bollywood movies download, latest series download " />
        <meta property="og:title" content="MegaWatch | Rk" />
        <meta property="og:description" content="You Can Latest Movies Straeming & Downloading Here" />
        <link rel="icon" href="/3d-movie.ico" />
        <meta name="monetag" content="2ee5866ef88d462738787d3b34732eb7"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        {wloading ? <WelcomeAnimation /> : <div>
          <div className="swiper_top_main">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInterction: false
              }}
              direction="horizontal"
              loop={true}
              speed={1200}
              watchSlidesProgress={true}
              parallax={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              scrollbar={{ draggable: true }}
            >
              {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                {publishedData.slice(0, 6).map((movie) => {
                  return <SwiperSlide key={movie._id}>
                    <div className="slideimagebx">
                      {/* slideshow background image */}
                      <Link href={`/movies/${movie.slug}`}>
                        <img src={movie.bgposter} alt="movie" loading="lazy" />
                      </Link>
                      {/* content */}
                      <div className="content" key={movie._id}>
                        <div className="contentflex">
                          <div className="smalimg">
                            <img src={movie.smposter} alt="movie" loading="lazy" />
                          </div>
                          <div className="movieconte">
                            <h1 id="header_title">{movie.title}</h1>
                            <h6>Duration: <span id="header_dur">{movie.duration}</span></h6>
                            <h3 id="header_gen">
                              <span className="star">&#9733;</span>
                              {movie.rating}
                              <span>{movie.genre.join(', ')}</span>
                            </h3>
                            <div className="btns">
                              <Link href={`/movies/${movie.slug}`}>
                                <button className="btn_download">
                                  <FaDownload className="faDownload" /> DOWNLOAD <span>FREE</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>

                })}

              </>}

              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>

            </Swiper>
          </div>

          <div className="tranding_bx">
            <li><Link href='/all' className="active"><i><FaAngleDoubleUp className="fas" /></i>Latest</Link></li>
            <li><Link href={'/genre/animation'} ><i><FaFilm className="fas" /></i>Animation</Link></li>
            <li><Link href='/shows' ><i><RiMovieFill className="fas" /></i>Tv Shows</Link></li>
            <li><Link href='/genre' ><i><FaClapperboard className="fas" /></i>Genre</Link></li>
          </div>

          <div className="scrollcardssec">
            <Swiper
              slidesPerView={8}
              spaceBetween={10}
              className="myswipe1"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              direction="horizontal"
              loop={true}
              speed={1200}
              watchSlidesProgress={true}
              parallax={true}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                1587: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
                1500: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },

                1200: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },

                1040: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },

                992: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                765: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                650: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                370: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

                344: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
              <div className="scrollcards">
                {loading ? <div className="scrollcardssec flex flex-center h-15vh"><Loader /></div> : <>
                  {publishedData.map((movie) => {
                    return <SwiperSlide key={movie._id}>
                      <div className="card">
                        <Link href={`/movies/${movie.slug}`}>
                          <div className="cardimg">
                            <img src={movie.smposter} alt="movie" loading="lazy" />
                          </div>
                          <div className="contents">
                            <h5>{movie.title}</h5>
                            <h6>
                              <span>{movie.year}</span>
                              <div className="rate">
                                <i className="cardfas">
                                  <FaHeart />
                                </i>
                                <i className="cardfas">
                                  <FaEye />
                                </i>
                                <i className="cardfas">
                                  <FaStar />
                                </i>
                                <h6>{movie.rating}</h6>
                              </div>
                            </h6>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  })}

                </>}
              </div>


            </Swiper>
          </div>

          <div className="tranding_bx" style={{ marginTop: '40px' }}>
            <li><Link href='/south' ><i><BiCameraMovie className="fas" /></i>South</Link></li>
            <li><Link href={'/genre/korean_drama'} ><i><RiMovie2Fill className="fas" /></i>K-Drama</Link></li>
            <li><Link href={'/genre/cheinese_drama'} ><i><RiMovieFill className="fas" /></i>C-Drama</Link></li>
            <li><Link href={'/genre/horror'} ><i><GiGhost className="fas" /></i>Horror</Link></li>

          </div>

          <div className="moviestegs">
            {/* mapping over genre array to genrate button */}
            {genres.slice(0, 16).map(genre => (
              <button key={genre} className={selectedGenre === genre ? 'active' : ''} onClick={() => handleGenreClick
                (genre)}>
                {genre}
              </button>
            ))}
            {categories.map(category => (
              <button key={category} className={selectedGenre === category ? 'active' : ''} onClick={() => handleGenreClick
                (category)}>
                {category}
              </button>
            ))}
          </div>

          <div className="moviescontainer">
            {loading ? <div className="scrollcardssec flex flex-center h-15v"><Loader /></div> : <>
              {filteredData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                {filteredData.slice(0, 50).map((movie) => (
                  <div className="card" key={movie._id}>
                    <Link href={`/movies/${movie.slug}`}>
                      <div className="cardimg">
                        <img src={movie.smposter} alt="movie" loading="lazy" />
                      </div>
                      <div className="contents">
                        <h5>{movie.title}</h5>
                        <h6>
                          <span>{movie.year}</span>
                          <div className="rate">
                            <i className="cardfas">
                              <FaHeart />
                            </i>
                            <i className="cardfas">
                              <FaEye />
                            </i>
                            <i className="cardfas">
                              <FaStar />
                            </i>
                            <h6>{movie.rating}</h6>
                          </div>
                        </h6>
                      </div>
                    </Link>
                  </div>
                ))}

              </>}
            </>}
          </div>

          <div className="nextpagelink">
            <Link href='/all'>
              <button className="cssbuttons_io_button">Next Page
                <div className="icon">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>}


      </div>

      <SpeedInsights />


    </>
  );
}
