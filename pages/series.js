

import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";


export default function series() {
      // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');

    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by movies
    const seriesData = publishedData.filter(ab => ab.titlecategory === 'series');
   

    return <>
        <Head>
            <title>All Web Series | MegaWatch</title>
            <meta name="description" content="All the Web Series" />
            <link rel="icon" href="/3d-movie.ico"/>
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1><RiMovieFill/> Series</h1>
                <p>A group or a number of related or similar things, events, etc., arranged or occurring in temporal, spatial, or other order or succession; sequence. a number of games, contests, or sporting events, with the same participants, considered as a unit: The two baseball clubs played a five-game series.</p>
            </div>
        </section>
        <section>
            <div className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {seriesData.map((movie) => {
                            return <div className="mcard">
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
                        })}

                    </>}

                </div>
            </div>
        </section>
       
    </>
}
