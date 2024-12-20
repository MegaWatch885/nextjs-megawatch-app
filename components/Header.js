
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaStar } from "react-icons/fa";
import useFetchData from "@/hooks/useFetchData";

export default function Header() {

    // navbar haeder component
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('nav');
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // functions for navList item page routing active status
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [searchbar, setSearchbar] = useState(false);

    const [activeLink, setActiveLink] = useState('/');

    // search function by title of the  movie
    const [movieshortname, setMovieshortName] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    // fetch data from api

    const { alldata, loading } = useFetchData(`/api/getmovies`);

    // filter for published movie required

    const publishedData = alldata.filter(ab => ab.status === "publish");

    //function to handle search
    useEffect(() => {
        if (!movieshortname.trim()) {
            setSearchResult([]);
            return;

        }

        const filteredMovies = publishedData.filter(movie => movie.title.toLowerCase().includes(movieshortname.toLowerCase()));


        setSearchResult(filteredMovies);
    }, [movieshortname]);

    const handleMovieClick = () => {
        setMovieshortName('');
    }

    const searchRef = useRef(null);

    // function for when click out of the search bar will be close

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setMovieshortName('');

        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })



    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLinkcClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    }

    useEffect(() => {
        // update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);

    // navbar
    const handleNabarOpen = () => {
        setNavbar(!navbar);
    }

    const handleNavbarClose = () => {
        setNavbar(false);
    }

    // searchbar

    const handleSearchbarOpen = () => {
        setSearchbar(!searchbar);
    }

    const handleSearchbarClose = () => {
        setSearchbar(false);
    }

    return <>
        <nav className="header">
            <h1 className="logo" data-text="&nbsp;MegaWatch&nbsp;">
                <a href="/">&nbsp;MegaWatch&nbsp;</a>
            </h1>
            <form className={searchbar ? "search_bar active" : "search_bar"}>
                <input type="text"
                    placeholder="Search Movies..."
                    value={movieshortname}
                    onChange={(e) => setMovieshortName(e.target.value)}
                />
                <div className="searchclose" onClick={handleSearchbarClose}><IoClose /></div>

                {movieshortname && (
                    <div className="search_results">
                        <h2>---:Search Result:---</h2>
                        <ul>
                            {searchResult.length > 0 ? (
                                // Showing 20 serach result by matching words
                                searchResult.slice(0, 50).map((movie) => (
                                    <Link onClick={handleMovieClick} key={movie._id} href={`/movies/${movie.slug}`}>
                                        <div className="moviesearchlist">
                                            <div>
                                                <img src={movie.smposter} width={80}
                                                    height={110} alt="image" />
                                            </div>
                                            <div className="searchbarinfo">
                                                <h5>{movie.title}</h5>
                                                <h4>Rating: <FaStar /><span>{movie.rating}</span></h4>
                                                <h4>Release Year: {movie.year}</h4>
                                            </div>

                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No Movie Found</p>

                            )}
                        </ul>
                    </div>


                )}

            </form>

            <div id={navbar ? "navbaractive" : "navbar"}>
                <div className="navlogomovie">
                    <h1 className="logo" data-text="&nbsp;MegaWatch&nbsp;">
                        <a href="/">&nbsp;MegaWatch&nbsp;</a>
                    </h1>
                    <div className="navclosesvg" onClick={handleNavbarClose}><IoClose /></div>
                </div>
                <ul className={clicked ? "navbar active" : "navbar"} onClick={handleNavbarClose}>
                    <li>
                        <Link href='/'
                            className={activeLink === '/' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/')}
                        >Home</Link>
                    </li>
                    <li>
                        <Link href='/movies'
                            className={activeLink === '/movies' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/movies')}
                        >Movies</Link>
                    </li>
                    <li>
                        <Link href='/series'
                            className={activeLink === '/series' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/series')}
                        >Series</Link>
                    </li>
                    <li>
                        <Link href='/bollywood'
                            className={activeLink === '/bollywood' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/bollywood')}
                        >Bollywood</Link>
                    </li>
                    <li>
                        <Link href='/hollywood'
                            className={activeLink === '/hollywood' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/hollywood')}
                        >Hollywood</Link>
                    </li>
                    <li>
                        <Link href={'/genre/animation'}
                            className={activeLink === '/animation' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/animation')}
                        >Animation</Link>
                    </li>
                    <li>
                        <Link href='/contact'
                            className={activeLink === '/contact' ? 'active' : ''}
                            onClick={() => handleLinkcClick('/contact')}
                        >Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile">
                <BiSearch className="opensearchsvg" onClick={handleSearchbarOpen} />
                <FaBars onClick={handleNabarOpen} />
            </div>
        </nav>

    </>
}