import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader";
import Link from "next/link";
import { FaArrowRight, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useState } from "react";
import Script from "next/script";



export default function watchmovieonline() {

    const router = useRouter();

    const { slug } = router.query;

    // use hook

    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie } = useFetchData('/api/getmovies')

    // filter for published movies requires

    const publishedData = allMovie.filter(ab => ab.status === "publish");

    const moviesData = publishedData.filter(ab => ab.titlecategory === 'movies');




    // Filtered Data


    // scroll left & right data




    return <>
        <>

            <Head>
                <title>{alldata && alldata[0]?.title}-Online-Watch-links</title>
                <link rel="icon" href="/3d-movie.ico" />
            </Head>

            {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading="lazy" />
                </div>
            </>}

            <div className="mainmoviebx flex-center" id="flex">

                <div className="watchonlinemovie">

                    <h2 id="movietrailer" className='movietrailer'> {alldata && alldata[0]?.title} Movie Streaming Here</h2>
                    <p className="uppercase">Genre : {alldata && alldata[0]?.genre.join(', ')}</p>
                    <p className="uppercase">Language : {alldata && alldata[0]?.language}</p>
                    <p className="uppercase">Duration : {alldata && alldata[0]?.duration}</p>

                    <center>
                        <iframe width="80%" height="420"
                            src={alldata && alldata[0]?.watchonline} frameBorder="0" allowFullScreen="allowFullScreen" name="player">
                        </iframe>

                    </center>
                </div>

                <div className="btngroup">

                    <a href={alldata && alldata[0]?.watchonline} target="player"><button>Server 1</button></a>
                    <a href={alldata && alldata[0]?.watchonline2} target="player"><button>Server 2</button></a>

                </div>

                
            </div>

    



        {/* Latest Movies */}
        <div>

            <div className="latest">
                <h3>Latest Movies :- </h3>
            </div>

            <div className="moviescontainer">
                {loading ? <div className="scrollcardssec flex flex-center h-15v"><Loader /></div> : <>
                    {moviesData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                        {moviesData.slice(0, 8).map((movie) => (
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
                <Link href='/movies'>
                    <button className="cssbuttons_io_button">All Latest Movies
                        <div className="icon">
                            <FaArrowRight />
                        </div>
                    </button>
                </Link>
            </div>

        </div>

    </>

    </>
}
