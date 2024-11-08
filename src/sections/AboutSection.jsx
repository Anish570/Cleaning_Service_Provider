import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const AboutSection = () => {
    const [startCount, setStartCount] = useState(false);
    const aboutSectionRef = useRef(null);

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartCount(true);
                        observer.unobserve(entry.target); // Stop observing once counted
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
        if (aboutSectionRef.current) {
            observer.observe(aboutSectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const datas = [
        {
            number: 45,
            firsttitle: "Years of",
            lasttitle: "Experience",
        },
        {
            number: 2342,
            firsttitle: "Happy",
            lasttitle: " Customers",
        },
        {
            number: 30,
            firsttitle: "Buildings",
            lasttitle: "Cleaned",
        }
    ]
    return (
        <>
            <div ref={aboutSectionRef} className="w-full h-[93vh] space-y-5  md:grid grid-cols-2 grid-rows-3">
                {/* Image div takes the whole first column */}
                <div className="w-full h-auto md:h-full bg-[rgba(0,0,0,0.3)] object-cover row-start-1 row-end-3">
                    <img src="/images/about.jpg" alt="about image" />
                </div>

                {/* Welcome div takes the second column, first two rows */}
                <div className="px-5 flex flex-col space-y-3 justify-center col-start-2 row-start-1 row-end-3">
                    <h1 className="text-[13px] font-medium text-[#2b98f0]">Welcome to WaveSolution Cleaning Company</h1>
                    <h2 className="text-[44px] font-light leading-10">Let&apos;s make you fresher than ever</h2>
                    <p className="text-[#808080]">WaveSolution offers professional cleaning services in Sydney, Australia. Contact us for house cleaning, office cleaning, and more.</p>
                </div>

                {/* Data div takes the second column, last row */}
                <div className="flex justify-around flex-wrap shrink-0 items-center row-start-3 row-end-3 col-start-2 bg-[#f3e53d] p-4">
                    {
                        datas.map((item) => (
                            <div key={item.number} className="text-left">
                                <h3 className="text-[32px] font-bold">
                                    {startCount ? <CountUp end={item.number} duration={2} /> : "0"}
                                </h3>
                                <p className="text-[#808080] uppercase font-semibold">{item.firsttitle} <br /> {item.lasttitle} </p>
                            </div>
                        ))
                    }
                    {/* <div className="text-center">
                        <h3 className="text-[32px] font-bold">
                            {startCount ? <CountUp end={2342} duration={2} /> : "0"}
                        </h3>
                        <p>Happy <br />Customers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[32px] font-bold">
                            {startCount ? <CountUp end={30} duration={2} /> : "0"}
                        </h3>
                        <p>Buildings <br />Cleaned</p>
                    </div> */}
                </div>
            </div>
            <div className="businesshour bg-red-500"> </div>
        </>
    );
};

export default AboutSection;
