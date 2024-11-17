import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";



export default function watchep25() {

    const router = useRouter();

    const { slug } = router.query;

    // use hook

    const { alldata, Loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie, loading } = useFetchData('/api/getmovies')

    // filter for published movies requires

    const publishedData = allMovie.filter(ab => ab.status === "publish");

    // Filtered Data


    // scroll left & right data




    return <>
        <>

            <Head>
                <title>{alldata && alldata[0]?.title}-Online-Watch-links</title>
                <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            <div className="slideimagebx">
                <img src={alldata && alldata[0]?.bgposter} alt="no image" loading="lazy" />
            </div>
            <div className="mainmoviebx flex-center" id="flex">

                <div className="watchonlinemovie">

                    <h2 className="movietrailer" id="movietrailer"> {alldata && alldata[0]?.title} - (Ep - 25) Watch Online Here</h2>
                    <p className="uppercase">Genre : {alldata && alldata[0]?.genre.join(', ')}</p>
                    <p className="uppercase">Total Episode's :- {alldata && alldata[0]?.duration}</p>


                    <center>
                        <div className="epstreaming">
                            <iframe width="80%" height="420"
                                src={alldata && alldata[0]?.watchEp25} frameBorder="0" allowFullScreen="allowFullScreen">
                            </iframe>
                        </div>
                    </center>
                </div>

                <div className="epwatch">
                    <center>
                        <div className="watchonlinemovie">
                            <h3 className="uppercase"> Note:- Its Series Have {alldata && alldata[0]?.duration} So Other EP Buttons Didn't Work</h3>
                        </div>
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
                            <a href={`/watchonilne/watchep9/${slug}`}><button >Ep - 09</button></a>
                            <a href={`/watchonilne/watchep10/${slug}`}><button >Ep - 10</button></a>
                            <a href={`/watchonilne/watchep11/${slug}`}><button >Ep - 11</button></a>
                            <a href={`/watchonilne/watchep12/${slug}`}><button >Ep - 12</button></a>
                        </div>

                        <div className="btngroup">
                            <a href={`/watchonilne/watchep13/${slug}`}><button >Ep - 13</button></a>
                            <a href={`/watchonilne/watchep14/${slug}`}><button >Ep - 14</button></a>
                            <a href={`/watchonilne/watchep15/${slug}`}><button >Ep - 15</button></a>
                            <a href={`/watchonilne/watchep16/${slug}`}><button >Ep - 16</button></a>
                        </div>

                        <div className="btngroup-1">

                            <a href={`/watchonilne/watchep17/${slug}`}><button >Ep - 17</button></a>
                            <a href={`/watchonilne/watchep18/${slug}`}><button >Ep - 18</button></a>
                            <a href={`/watchonilne/watchep19/${slug}`}><button >Ep - 19</button></a>
                            <a href={`/watchonilne/watchep20/${slug}`}><button >Ep - 20</button></a>
                        </div>

                        <div className="btngroup-2">

                            <a href={`/watchonilne/watchep21/${slug}`}><button >Ep - 21</button></a>
                            <a href={`/watchonilne/watchep22/${slug}`}><button >Ep - 22</button></a>
                            <a href={`/watchonilne/watchep23/${slug}`}><button >Ep - 23</button></a>
                            <a href={`/watchonilne/watchep24/${slug}`}><button >Ep - 24</button></a>
                        </div>

                

                </div>


            </div>


        </>

    </>
}
