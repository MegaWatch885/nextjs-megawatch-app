import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiCameraMovie } from "react-icons/bi";
import { FaEye, FaHeart, FaPhotoVideo, FaStar } from "react-icons/fa";

export default function bollywood() {


   // fetch data with usehook
   const { alldata, loading } = useFetchData('/api/getmovies');

   // filter for published movies required
   const publishedData = alldata.filter(ab => ab.status === "publish");

   // now filter data by movies
   const southData = publishedData.filter(ab => ab.category === 'south');



   return <>
   <Head>
       <title>All South Movies | MegaWatch</title>
       <meta name="description" content="All the Web Series" />
       <link rel="icon" href="/3d-movie.ico"/>
   </Head>

   <section className="genrenamesec">
       <div className="genrename">
           <h1><BiCameraMovie /> South</h1>
           <p>Cinema of South India, refers to the cinema of the four major film industries in South India; primarily engaged in making feature films in the four major languages of the region, namely — Telugu, Tamil, Malayalam and Kannada.</p>
       </div>
   </section>
   <section>
       <div className="genremoviesec">
           <div className="genremovie">
               {loading ? <Spinner /> : <>
                   {southData.map((movie) => {
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