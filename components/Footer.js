import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className="m-auto footersec">
                    <div className="fcontent">
                        <div className="flogo">
                            <h1><Link href="/">MegaWatch</Link></h1>
                        </div>
                        <div className="quicklink">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/bollywood'>Bollywood</Link></li>
                            <li><Link href='/hollywood'>Hollywood</Link></li>
                            <li><Link href='/contact'>Contact Us</Link></li>
                            <li><Link href='/dmca'>DMCA</Link></li>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; 2024 All rights reserved | by&nbsp;<Link href='/'>MegaWach</Link></p>
                    </div>
                    <div className="fperasec">
                        <p>Disclaimer :- We Does not host any file on it's servers. All files or contents hosted o thirt party websites | we does not accept resposibility for contens hosted on third party websites, we just index those link which are already available in internet</p>
                    </div>


                </section>
                
            </footer>
        </>
    )
}

export default Footer