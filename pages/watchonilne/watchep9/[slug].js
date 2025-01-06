import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader";
import Link from "next/link";
import { FaArrowRight, FaEye, FaHeart, FaStar } from "react-icons/fa";




export default function watchep9() {

    const router = useRouter();

    const { slug } = router.query;

    // use hook

    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie } = useFetchData('/api/getmovies')

    // filter for published movies requires

    const publishedData = allMovie.filter(ab => ab.status === "publish");
    const seriesData = publishedData.filter(ab => ab.titlecategory === 'series');

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

                    <h2 id="movietrailer" className='movietrailer'> {alldata && alldata[0]?.title} - (Ep - 09) Streaming Here </h2>
                    <p className="uppercase">Genre : {alldata && alldata[0]?.genre.join(', ')}</p>
                    <p className="uppercase">Language : {alldata && alldata[0]?.language}</p>
                    <p className="uppercase">Total Episode's :- {alldata && alldata[0]?.duration}</p>

                    <center>
                        <iframe width="80%" height="420"
                            src={alldata && alldata[0]?.watchEp09} frameBorder="0" allowFullScreen="allowFullScreen" name="player">
                        </iframe>
                    </center>
                </div>

                <div className="btngroup">

                    <a href={alldata && alldata[0]?.watchEp09} target="player"><button>Server 1</button></a>
                    <a href={alldata && alldata[0]?.watchEp09s2} target="player"><button>Server 2</button></a>
                    <a href={alldata && alldata[0]?.watchEp09s3} target="player"><button>Server 3</button></a>


                </div>



            </div>

            <div className="epwatch">
                <center>
                    <h3 className="uppercase"> Note:- Its Series Have {alldata && alldata[0]?.duration} So Other EP Buttons Didn't Work</h3>
                </center>

                <div className="btngroup">
                    <a href={`/watchonilne/watchep1/${slug}`}><button >Ep - 01</button></a>
                    <a href={`/watchonilne/watchep2/${slug}`}><button >Ep - 02</button></a>
                    <a href={`/watchonilne/watchep3/${slug}`}><button >Ep - 03</button></a>
                    <a href={`/watchonilne/watchep4/${slug}`}><button >Ep - 04</button></a>
                </div>

                <div className="btngroup-1">
                    <a href={`/watchonilne/watchep5/${slug}`}><button >Ep - 05</button></a>
                    <a href={`/watchonilne/watchep6/${slug}`}><button >Ep - 06</button></a>
                    <a href={`/watchonilne/watchep7/${slug}`}><button >Ep - 07</button></a>
                    <a href={`/watchonilne/watchep8/${slug}`}><button >Ep - 08</button></a>
                </div>

                <div className="btngroup-2">
                    <a href={`/watchonilne/watchep10/${slug}`}><button >Ep - 10</button></a>
                    <a href={`/watchonilne/watchep11/${slug}`}><button >Ep - 11</button></a>
                    <a href={`/watchonilne/watchep12/${slug}`}><button >Ep - 12</button></a>
                    <a href={`/watchonilne/watchep12/${slug}`}><button >Ep - 13</button></a>
                </div>

                <div className="btngroup">
                    <a href={`/watchonilne/watchep14/${slug}`}><button >Ep - 14</button></a>
                    <a href={`/watchonilne/watchep15/${slug}`}><button >Ep - 15</button></a>
                    <a href={`/watchonilne/watchep16/${slug}`}><button >Ep - 16</button></a>
                    <a href={`/watchonilne/watchep17/${slug}`}><button >Ep - 17</button></a>
                </div>

                <div className="btngroup-1">
                    <a href={`/watchonilne/watchep18/${slug}`}><button >Ep - 18</button></a>
                    <a href={`/watchonilne/watchep19/${slug}`}><button >Ep - 19</button></a>
                    <a href={`/watchonilne/watchep20/${slug}`}><button >Ep - 20</button></a>
                    <a href={`/watchonilne/watchep21/${slug}`}><button >Ep - 21</button></a>
                </div>

                <div className="btngroup-2">
                    <a href={`/watchonilne/watchep22/${slug}`}><button >Ep - 22</button></a>
                    <a href={`/watchonilne/watchep23/${slug}`}><button >Ep - 23</button></a>
                    <a href={`/watchonilne/watchep24/${slug}`}><button >Ep - 24</button></a>
                    <a href={`/watchonilne/watchep25/${slug}`}><button >Ep - 25</button></a>
                </div>

            </div>


            {/* Latest Movies */}
            <div>

                <div className="latest">
                    <h3>Latest Series :- </h3>
                </div>

                <div className="moviescontainer">
                    {loading ? <div className="scrollcardssec flex flex-center h-15v"><Loader /></div> : <>
                        {seriesData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                            {seriesData.slice(0, 8).map((movie) => (
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
                    <Link href='/series'>
                        <button className="cssbuttons_io_button">All Latest Series
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
