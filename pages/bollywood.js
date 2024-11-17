
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaFilm, FaHeart, FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";


export default function bollywood() {

       // fetch data with usehook
       const { alldata, loading } = useFetchData('/api/getmovies');


       // filter for published bollywood series
       const publishedData = alldata.filter(ab => ab.status === "publish");
   
       // now filter data by bollywood
       const bollywoodData = publishedData.filter(ab => ab.category === 'bollywood');


   
    return <>
        <Head>
            <title>Bollywood | MegaWatch</title>
            <meta name="description" content="All the Web Series" />
            <link rel="icon" href="/3d-movie.ico"/>
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1><RiMovie2Fill/> Bollywood</h1>
                <p>Bollywood film's story is centered around lively music and dance. Indian dance is performed in colorful costumes with props. The classical Indian dance incorporates facial expressions, hand gestures (using mudras), body postures and movements. This brings life to the story.</p>
            </div>
        </section>
        <section>
            <div className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {bollywoodData.map((movie) => {
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