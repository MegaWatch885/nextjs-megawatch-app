import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader";
import Link from "next/link";
import { FaArrowRight, FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function download480p() {

    const router = useRouter();

    const { slug } = router.query;

    // use hook

    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie } = useFetchData('/api/getmovies')

    // filter for published movies requires

    const publishedData = allMovie.filter(ab => ab.status === "publish");

    // Filtered Data


    // scroll left & right data



    return <>
        <>

            <Head>
                <title>{alldata && alldata[0]?.title}-Download(480p)-Quality-Links</title>
                <link rel="icon" href="/3d-movie.ico" />
            </Head>

            {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading="lazy" />
                </div>
            </>}

            <div className="mainmoviebx flex-center" >


                <section className="downloadsec">
                    <h3>Download(480p) Links - ({alldata && alldata[0]?.size480p})</h3>
                    <div className="downloadlinks1">
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkDropgalaxy480p}`}  >Dropgalaxy </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUpload4ever480p}`}>Upload4ever </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploadrar480p}`}>Uploadrar </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkMega4up480p}`}  >Mega4up </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploady480p}`}>Uploady </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkGdrive480p}`}>G-Drive </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkPhotojin480p}`}>Hub Drive </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkHdcloud480p}`}>HD Cloud </a>



                    </div>

                </section>
            </div>

            {/* Latest Movies */}
            <div>

                <div className="latest">
                    <h3>Latest Movies :- </h3>
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
