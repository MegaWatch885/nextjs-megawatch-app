
import Loader from "@/components/Loader";
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

export default function hollywood() {

         // fetch data with usehook
         const { alldata, loading } = useFetchData('/api/getmovies');

         const [wloading, setWLoading] = useState(true);
     
         // filter for published bollywood series
         const publishedData = alldata.filter(ab => ab.status === "publish");
     
         // now filter data by hollywood
         const hollywoodData = publishedData.filter(ab => ab.category === 'hollywood');
 
    return <>
        <Head>
            <title>Hollywood | MegaWatch</title>
            <meta name="description" content="All the Web Series" />
            <link rel="icon" href="/3d-movie.ico"/>
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1><RiMovie2Line/> Hollywood</h1>
                <p>Hollywood movies refer to films produced in the Hollywood district of Los Angeles, California, which has been the historical center of the American film industry since the early 20th century.</p>
            </div>
        </section>
        <section>
            <div className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {hollywoodData.map((movie) => {
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