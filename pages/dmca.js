import Link from "next/link";

export default function contact() {
    return <>
        <div className="dmcapage">

            <h1>Dmca :</h1>
            <p> It is our policy to respond to clear notices of alleged copyright infringement. If you believe that your intellectual property rights have been infringed upon by one of our users, we need you to send us a proper notification. All notices should comply with the notification requirements of the DMCA. You MUST provide the following information:</p>
            <div className="para1">
            <h3>1. Identify yourself as either: </h3>
            <p>– The owner of a copyrighted work(s), or<br/>
            – A person “authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.”</p>

            </div>
            <div className="para2">
            <h3>2. Identify the copyrighted work claimed to have been infringed.</h3>
            </div>
            <div className="para2">
            <h3>3. Identify the material that is claimed to be infringing or to be the subject of the infringing activity and that is to be removed or access to which is to be disabled by providing us the exact location of the infringing file with the exact interupload.com link</h3>
            </div>
            <div className="para2">
            <h3>4. Provide us the web address under which the link has been published.</h3>
            </div>
            <div className="para2">
            <h3>5. Provide your contact information which includes, your full name, address and telephone number.</h3>
            <p>(For more details on the information required for valid notification, see 17 U.S.C. 512(c)(3).)</p>
            <p >You should be aware that, under the DMCA, claimants who make misrepresentations concerning copyright infringement may be liable for damages incurred as a result of the removal or blocking of the material, court costs, and attorneys fees.</p>
            <p>A proper notification MUST contain the information above, or it may be IGNORED.</p>
            
            <p>Send notifications to: <Link href='/contact'>Contact Us</Link> Page </p>
           
            <p>Please allow 2-3 business days for an email response. Note that emailing your complaint to other parties such as our Internet Service Provider will not expedite your request and may result in a delayed response due the complaint not properly being filed.</p>
            </div>

            <div className="para1">
                <h1>Disclaimer</h1>
                <p>MegaWatch.in does not host any files on it’s servers. All point to content hosted on third party websites. MegaWatch.in does not accept responsibility for content hosted on third party websites and does not have any involvement in the same.</p>
            </div>
        </div>



    </>

}