import { useEffect, useState } from "react";
import ScrollOut from "scroll-out";

function Section(props){
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    })
    useEffect(()=>{
        ScrollOut({targets:".sectionContainer", once:true, threshold:0.30});
    },[mounted])
    return(
        <section onMouseLeave={async(e)=>{await e.target.querySelector(".titleContainer div")?.classList.remove("active")}} onMouseEnter={async(e)=>{await e.target.querySelector(".titleContainer div")?.classList.add("active")}} className="sectionContainer">
            <div className="titleContainer">
                <h2 className="title">{props.title}</h2>
                <div className="underline"></div>
            </div>
            <div className="text">
                {props.children}
            </div>
        </section>
        );
}

export default Section;