import React from 'react'
import Head from 'next/head'
import Genrecard from '@/components/Genrecard'
import { FaClapperboard } from 'react-icons/fa6'



const category = (props) => {
    return (
        <>
        <Head>
            <title>Genre - Category | MegaMovies</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/3d-movie.ico"/>
        </Head>

        <section className="genrenamesec">
            <div className="genrename">
                <h1><FaClapperboard/> Explore by Genre</h1>
                <p>Movie genres are categories that define films based on narrative or stylistic elements. The genre of a film can help determine the characters, setting, plot structure, and tone. Action films, for example, typically include fight scenes and slow-motion camera shots.</p>
            </div>
        </section>
       <section className="genremoviesec genremovie">
        <Genrecard link={'/genre/action'} img={'/img/action.jpg'} title={"Action Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/adventure'} img={'/img/adventure.jpg'} title={"Adventure Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/animation'} img={'/img/animation.jpg'} title={"Animation Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/cheinese_drama'} img={'/img/chienes_drama.jpg'} title={"Chienese Drama's"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/comedy'} img={'/img/comedy.jpg'} title={"Comedy Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/crime'} img={'/img/crime.jpg'} title={"Crime Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/drama'} img={'/img/drama.jpg'} title={"Drama Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/fantasy'} img={'/img/fantasy.jpg'} title={"Fantasy Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/horror'} img={'/img/horror.jpg'} title={"Horror Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/korean_drama'} img={'/img/korean_drama.jpg'} title={"Korean Drama's"} description={"K-dramas have a multitude of different genre such as action dramas, historical dramas, school dramas, medical dramas, legal dramas, or even horror comedies. While most dramas contain romantic elements and deep emotional themes, some may also contain a tragedy or slice of life theme. There are various styles and tones. "}/>
        <Genrecard link={'/genre/mystery'} img={'/img/mystery.jpg'} title={"Mystery Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/romance'} img={'/img/romantic.jpg'} title={"Romance Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/science_fiction'} img={'/img/scifi.jpg'} title={"Sci-fi Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
        <Genrecard link={'/genre/thriller'} img={'/img/thriller.jpg'} title={"Thriller Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis exercitationem"}/>
       </section>
           
        </>

    )
}

export default category