import LandingNav from "./landingNav";
import "../../css/landing.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LandingPage=()=>{
    const words=["Partner","Friend's","Family","Anyone"]
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
      const timerId = setInterval(() => {
        const currentIndex = words.indexOf(currentWord);
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentWord(words[nextIndex]);   
  
      }, 3000);
  
      return () => clearInterval(timerId);
    });

    return(
        <div className="landingpage">
            <LandingNav/>
            <div class="landing_banner text-center">
                <div class="lb_con">
                    <div class="mb-5">
                        <h1 class>Relief from stress when splitting costs</h1>
                        <h1 class="text-danger">
                            with {currentWord}.
                        </h1>
                    </div>
                    <div class="m-auto w-75">
                        <h5 class>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</h5>
                        <Link to={`/signup`} class="mt-4 btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </div>

            <div className="p-lg-5 landingwhy">
                 <h1 class="text-center text-dark">Why choose splity?</h1>
                    
                <div classname="">
                    <div class="d-lg-flex flex-wrap justify-content-around align-items-center">
                    <div class="col-lg-5 pt-0 p-lg-4 text-center">
                        <img width="135" src="/image/wp_01.avif" alt=""/>
                        <h4 classname="text-wrap" >Asking a friend to return your money can be awkward 🫠</h4>
                        <p>Receive your money on time with priority settlements.</p>
                    
                    </div>
                    <div class="col-lg-5 pt-0 p-lg-4 text-center">
                        <img width="135" src="/image/wp_02.avif" alt=""/>
                        <h4 classname="text-wrap" >Worried about your share when you eat with your friends? 😰</h4>
                        <p>Now split bills item-wise for any order you make, online or offline.</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-lg-4 text-center">
                        <img width="135" src="/image/wp_03.avif" alt=""/>
                        <h4 classname="text-wrap" >Can't keep track of expenses with flatmates? 👬🏻</h4>
                        <p>Pay all your home bills on a single platform.</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-lg-4 text-center">
                        <img width="135" src="/image/wp_04.avif" alt=""/>
                        <h4 classname="text-wrap">Planning a trip? 🌴</h4>
                        <p>Leave the hassle of managing all your expenses to us!</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-lg-5 text-center">
                        <img width="200" src="/image/wp_05.svg" alt=""/>
                        <h4 classname="text-wrap">Don't know how much you are spending? 💸</h4>
                        <p>Analyse your personal expenditure over a period on the app.</p>
                    </div>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default LandingPage;