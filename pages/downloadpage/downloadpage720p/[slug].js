import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import { FaBookmark, FaCheck, FaEye, FaFacebookSquare, FaHeart, FaImdb, FaInstagram, FaStar, FaThumbsDown, FaThumbsUp, FaWhatsappSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function download720p() {

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
            <title>{alldata && alldata[0]?.title}-Download(720p)-Quality-Links</title>
            <link rel="icon" href="/3d-movie.ico"/>
            </Head>

            <div className="slideimagebx">
                <img src={alldata && alldata[0]?.bgposter} alt="no image" loading="lazy" />
            </div>

            <div className="mainmoviebx flex-center" >

                <section className="downloadsec">
                <h3>Download Links For (720p) Quality</h3>
                    <div className="downloadlinks1">

                    <a target='_blank' href={`${alldata && alldata[0]?.dlinkDropgalaxy720p}`}> Dropgalaxy </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUpload4ever720p}`}>Upload4ever </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploadrar720p}`}>Uploadrar </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkMega4up720p}`}>Mega4up </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkUploady720p}`}>Uploady </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkGdrive720p}`}>G-Drive </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkPhotojin720p}`}>Photo Jin </a>
                        <a target='_blank' href={`${alldata && alldata[0]?.dlinkHdcloud720p}`}>HD Cloud </a>
                        
                       

                    </div>
                </section>

            </div>
            
              



           
        </>

    </>
}
