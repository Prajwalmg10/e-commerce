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

            <div>
                <div class="p-5 landingwhy">
                    <h1 class="text-center mb-lg-5 text-dark">Why choose splity?</h1>
                    <div class="d-flex flex-wrap  justify-content-around">
                    <div class="col-lg-5 pt-0 p-5 text-center">
                        <img width="120" src="/image/wp_01.avif" alt=""/>
                        <h2>Asking a friend to return your money can be awkward 🫠</h2>
                        <p>Receive your money on time with priority settlements.</p>
                    
                    </div>
                    <div class="col-lg-5 pt-0 p-5 text-center">
                        <img width="120" src="/image/wp_02.avif" alt=""/>
                        <h2>Worried about your share when you eat with your friends? 😰</h2>
                        <p>Now split bills item-wise for any order you make, online or offline.</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-5 text-center">
                        <img width="120" src="/image/wp_03.avif" alt=""/>
                        <h2>Can't keep track of expenses with flatmates? 👬🏻</h2>
                        <p>Pay all your home bills on a single platform.</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-5 text-center">
                        <img width="120" src="/image/wp_04.avif" alt=""/>
                        <h2 class="pb-3">Planning a trip? 🌴</h2>
                        <p>Leave the hassle of managing all your expenses to us!</p>
                    </div>
                    <div class="col-lg-5 pt-0 p-5 text-center">
                        <img width="120" src="/image/wp_05.svg" alt=""/>
                        <h2 class="pb-3">Don't know how much you are spending? 💸</h2>
                        <p>Analyse your personal expenditure over a period on the app.</p>
                    </div>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default LandingPage;