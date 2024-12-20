import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import { FaArrowRight, FaBookmark, FaCheck, FaEye, FaFacebookSquare, FaHeart, FaImdb, FaInstagram, FaStar, FaThumbsDown, FaThumbsUp, FaWhatsappSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import Spinner from "@/components/Spinner";
import Loader from "@/components/Loader";

export default function moviesPost() {

    const router = useRouter();

    const { slug } = router.query;
    const { titlecategory } = router.query;

    // use hook

    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie, } = useFetchData('/api/getmovies')

    // filter for published movies requires

    const publishedData = allMovie.filter(ab => ab.status === "publish");


    // scroll left & right data
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft -= 300;
    }

    const scrollRight = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollRight += 500;
    }

    //  Share in whatsapp app
    const [showShareLinks, setShowShareLinks] = useState(false);
    const sharelinkref = useRef(null);

    const handleButtonClick = () => {
        setShowShareLinks(!showShareLinks);
    }
    const handlePageClick = (event) => {
        if (sharelinkref.current && !sharelinkref.current.contains(event.target)) {
            setShowShareLinks(false);
        }
    }

    useEffect(() => {
        // attach the click event listner to the document
        document.addEventListener("click", handlePageClick);

        return () => {
            // cleanup the event listner
            document.removeEventListener("click", handlePageClick);
        }

    }, []);

    return <>
        <>

            <Head>
                <title> {alldata && alldata[0]?.title} - Movie Download & Streaming </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading="lazy" />
                </div>
            </>}


            <div className="mainmoviebx" id="flex" ref={sharelinkref}>

                {/* Left Data */}
                <div className="leftdata">
                    <div className="leftimgbx">
                        <img src={alldata && alldata[0]?.smposter} alt="movie" loading="lazy" />
                        <div className="seenonly">
                            <div className="seenwatch">
                                <button><FaBookmark className="setbtn" />Watchlist </button>
                                <button><FaCheck className="setbtn" />Seen </button>
                                <button><FaThumbsUp className="setbtn" />Like </button>
                                <button><FaThumbsDown className="setbtn" />Dislike </button>
                            </div>

                        </div>
                    </div>

                    <div className="rating">
                        <h3>Title</h3>
                        <h4 >{alldata && alldata[0]?.title}</h4>
                    </div>
                    <div className="rating">
                        <h3>RATING</h3>
                        <div className="rate">
                            <FaImdb className='faImdb' />
                            <h4>{alldata && alldata[0]?.rating} <span>IMDB</span></h4>
                        </div>
                    </div>
                    <div className="rating">
                        <h3>GENRE</h3>
                        <h4 className="uppercase">{alldata && alldata[0]?.genre.join(', ')}</h4>
                    </div>
                    <div className="rating">
                        <h3>DURATION</h3>
                        <h4 >{alldata && alldata[0]?.duration}</h4>
                    </div>
                    <div className="rating">
                        <h3>YEAR</h3>
                        <h4 >{alldata && alldata[0]?.year}</h4>
                    </div>
                    <div className="rating">
                        <h3>LANGAUAGE</h3>
                        <h4 >{alldata && alldata[0]?.language}</h4>
                    </div>
                    <div className="rating">
                        <h3>QUALITY</h3>
                        <h4 >{alldata && alldata[0]?.quaility}</h4>
                    </div>
                    <div className="rating">
                        <h3>SIZE</h3>
                        <h4 >{alldata && alldata[0]?.size}</h4>
                    </div>


                    <div className="screenshots">

                        <h3>SCREENSHOTS :-</h3>
                        <center>

                            <section>
                                <img src={alldata && alldata[0]?.sshot1} alt="no" ></img>
                                <img src={alldata && alldata[0]?.sshot2} alt="no"></img>
                                <img src={alldata && alldata[0]?.sshot3} alt="no"></img>
                                <img src={alldata && alldata[0]?.sshot4} alt="no"></img>
                            </section>

                        </center>

                    </div>


                </div>

                {/* Right Data */}
                <div className="rightdata">

                    <div className="movietitle">
                        <h1>{alldata && alldata[0]?.slug.replaceAll('-', ' ')}</h1>
                        <button onClick={handleButtonClick} className='faShareFromSquare'><FaShareFromSquare /></button>
                    </div>

                    <div>

                        <p className="dpera">DOWNLOAD FREE NOW</p>
                        <div className="moviedescription">
                            <div className="hidedataformobile">
                                <article className='movieinfo'>
                                    <h3 className='uppercase'>{alldata && alldata[0]?.titlecategory} info :-</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='uppercase'>&#9642; {alldata && alldata[0]?.titlecategory} Name :</td>
                                                <td>{alldata && alldata[0]?.title}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Release Year</td>
                                                <td>{alldata && alldata[0]?.year}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Genre</td>
                                                <td>{alldata && alldata[0]?.genre.join(', ')}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Language</td>
                                                <td>{alldata && alldata[0]?.language}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Subtitle</td>
                                                <td>{alldata && alldata[0]?.subtitle}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Size</td>
                                                <td>{alldata && alldata[0]?.size}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Quality</td>
                                                <td>{alldata && alldata[0]?.quaility}</td>
                                            </tr>
                                            <tr>
                                                <td>&#9642; Format</td>
                                                <td>MKV</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </article>
                                <article>
                                    <div className="storyline">
                                        <h3>Sunopsis / Story Line :-</h3>
                                        <p>{alldata && alldata[0]?.description}</p>
                                    </div>
                                </article>
                            </div>

                            <div className="youtubeiframe">
                                <h3 id="movietrailer" className='uppercase'>{alldata && alldata[0]?.titlecategory} Trailer :-</h3>
                                <iframe width="100%" height="370" src={alldata && alldata[0]?.youtubelink} frameBorder="0"></iframe>
                            </div>

                            <section className="downloadsec">
                                <h2>G-Drive [GDToT] Download Links</h2>
                                <div className="downloadlinks">

                                    <a href={`/downloadpage/downloadpage480p/${slug}`}>Download(480p) - ({alldata && alldata[0]?.size480p})</a>
                                    <a href={`/downloadpage/downloadpage720p/${slug}`}>Download(720p) - ({alldata && alldata[0]?.size720p})</a>
                                    <a href={`/downloadpage/downloadpage1080p/${slug}`}>Download(1080p) - ({alldata && alldata[0]?.size1080p})</a>
                                    <a href={`/downloadpage/downloadpage4k/${slug}`}>Download(4k) - ({alldata && alldata[0]?.size4k})</a>



                                </div>
                            </section>

                        </div>

                        <section className="downloadsec">
                            <h2>Streaming / Watch Online</h2>
                            <div className="downloadlinks">

                                <a href={`/watchonilne/watchmovie/${slug}`}> <CiPlay1 />If This Is A Movie Click Here</a>
                                <a href={`/watchonilne/watchep1/${slug}`}> <CiPlay1 /> If This Is A Series / Shows Click Here</a>

                            </div>
                        </section>

                    </div>
                </div>

                {/* Latest Movies */}
                <div className="latest">
                    <h3>Latest Uploads :- </h3>
                </div>

                <div className="moviescontainer">
                    {loading ? <div className="scrollcardssec flex flex-center h-15v"><Loader /></div> : <>
                        {publishedData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                            {publishedData.slice(0, 8).map((movie) => (
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
                        <button className="cssbuttons_io_button">All Latest Uploads
                            <div className="icon">
                                <FaArrowRight />
                            </div>
                        </button>
                    </Link>
                </div>


                <div className="sharelinks" style={{ display: showShareLinks ? 'flex' : 'none' }}>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://megawatch.in/movies/${router.query.slug}`}`} target="_blank"><FaInstagram /></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://megawatch.in/movies/${router.query.slug}`}`} target="_blank"><FaFacebookSquare /></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://megawatch.in/movies/${router.query.slug}`}`} target="_blank"><FaWhatsappSquare /></Link></div>
                </div>
            </div>




        </>

    </>


}
