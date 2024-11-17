

import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { MdOutlineMovieFilter } from "react-icons/md";


export default function all() {


  const { alldata, loading } = useFetchData('/api/getmovies');



  // filter for published bollywood series
  const publishedData = alldata.filter(ab => ab.status === "publish");
  
  return (
    <>
      <Head>
        <title>All Movies & Web Series Download | Makmovies</title>
        <link rel="icon" href="/3d-movie.ico"/>
      </Head>

      <section className="genrenamesec">
            <div className="genrename">
                <h1><MdOutlineMovieFilter/> All Movies & Series</h1>
                <p>A film series or movie series (which is also referred to as a film franchise or movie franchise) is a collection of related films in succession that share the same fictional universe, or are marketed as a series.</p>
            </div>
        </section>
        <section>
            <div className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {publishedData.map((movie) => {
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
  )
}

