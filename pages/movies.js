
import Loader from "@/components/Loader";
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaFilm, FaHeart, FaStar } from "react-icons/fa";

export default function movies() {


    // fetch data with usehook
    const { alldata, loading } = useFetchData('/api/getmovies');

    const [wloading, setWLoading] = useState(true);

    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // now filter data by movies
    const moviesData = publishedData.filter(ab => ab.titlecategory === 'movies');





    return <>
        <Head>
            <title>Movies | MegaWatch</title>
            <meta name="description" content="All the movies" />
            <link rel="icon" href="/3d-movie.ico"/>
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1><FaFilm/> Movies</h1>
                <p>A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something. Most people watch movies to entertain themselves or to have fun. Movies can vary significantly in emotional tone both overall as a specific genre type but also within a single work.</p>
            </div>
        </section>
        <section>
            <div className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {moviesData.map((movie) => {
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