"use client"

import Link from "next/link";
import { FaArrowDown, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { Metadata } from 'next';

export const metadata = {
    title: 'MegaWatch - Contact Us',
    description: 'If Any Query Please Connect With Me By Mail',
    }

export default function contact() {
    return <>
        <div className="contactpage">
            <div className="contactcard">
                <div className="contactdesign">
                    <div className="topccard">
                        <div className="tcardsvg">
                            <HiMiniBars3BottomLeft />
                            <AiFillSetting />
                        </div>
                        <div className="usercoderimg">
                            <img src="/img/loginimg_rk.jpg" alt="Rk" />
                        </div>
                        <div className="usercoderinfo">
                            <h1>Rk </h1>
                            <h3>Mega Watch For Entairtainment </h3>
                            
                            <div className="usercodesvg">
                                <Link href='/'><IoLogoInstagram /></Link>
                                <Link href='/'><RiTelegramLine /></Link>
                                <Link href='/'><FaYoutube /></Link>
                            </div>
                            <h4>megawatchhelpline@gmail.com</h4>
                            
                        </div>
                    </div>
                </div>
                <div className="bottomcard">
                    <Link href='/' className="followbtn">Follow</Link>
                    <div className="bcardtext">
                        <p>Learn More About My Profile</p>
                        <FaArrowDown />
                    </div>
                </div>
            </div>
        </div>

    </>
}