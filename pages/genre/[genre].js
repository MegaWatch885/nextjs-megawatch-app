import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';



export default function genres() {

    const router = useRouter();

    const { genre } = router.query;

    // use hook

    const { alldata, loading } = useFetchData(`/api/getmovies?genre=${genre}`)

    // filter for published movies requires

    const filteredMovies = alldata.filter(ab => ab.genre === ab.genre).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt) );

    const genremovies = [...filteredMovies];

    const capitalizeTitle = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // for head titile
    const pegetitle = `${router.query.genre} - Genre | MegaWatch`;

    const capitalizedTitle = capitalizeTitle(pegetitle)



    return (

        <>
            <Head>
                <title>{capitalizedTitle}</title>
                <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Genre : {router.query.genre}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque. Fugit quos quibusdam libero tempore ut? Nemo dignissimos incidunt accusamus adipisci placeat sapiente fugiat voluptatum.</p>
                </div>
            </section>
            <section className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {genremovies.length === 0 ? <p className='nodatafound'>No Movie Found</p> : <>
                            {genremovies.map((movie) => {
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

                    </>}

                </div>
            </section>

        </>
    )
}


