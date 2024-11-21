import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import { FaBookmark, FaCheck, FaEye, FaFacebookSquare, FaHeart, FaImdb, FaInstagram, FaStar, FaThumbsDown, FaThumbsUp, FaWhatsappSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";

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
            <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            {loading ? <div className="slideimagebx flex flex-center"><Loader /> </div> : <>
                <div className="slideimagebx">
                    <img src={alldata && alldata[0]?.bgposter} alt="movie" loading="lazy" />
                </div>
            </>}

            <div className="mainmoviebx flex-center" >
              

                <section className="downloadsec">
                    <h3>Download Links For (480p) Quality</h3>
                    <div className="downloadlinks1">
                        <a target='_blank'  href={`${alldata && alldata[0]?.dlinkDropgalaxy480p}`}  >Dropgalaxy </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUpload4ever480p}`}>Upload4ever </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploadrar480p}`}>Uploadrar </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkMega4up480p }`}  >Mega4up </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploady480p}`}>Uploady </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkGdrive480p}`}>G-Drive </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkPhotojin480p}`}>Photo Jin </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkHdcloud480p}`}>HD Cloud </a>



                    </div>

                </section>
            </div>



        </>

    </>
}
