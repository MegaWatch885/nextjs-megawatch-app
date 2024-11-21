import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader";



export default function watchmovieonline() {

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
                <title>{alldata && alldata[0]?.title}-Online-Watch-links</title>
                <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading="lazy" />
                </div>
            </>}

            <div className="mainmoviebx flex-center" id="flex">

                <div className="watchonlinemovie">

                    <h2 id="movietrailer" className='movietrailer'> {alldata && alldata[0]?.title} Movie Watch Online Here</h2>
                    <p className="uppercase">Genre : {alldata && alldata[0]?.genre.join(', ')}</p>

                    <center>
                        <iframe width="80%" height="420"
                            src={alldata && alldata[0]?.watchonline} frameBorder="0" allowFullScreen="allowFullScreen">
                        </iframe>

                    </center>
                </div>


            </div>


        </>

    </>
}
