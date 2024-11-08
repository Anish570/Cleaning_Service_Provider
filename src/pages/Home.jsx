import AppointmentFrom from "../components/AppointmentFrom";
import Button from "../components/Button";
import AboutSection from "../sections/AboutSection";

const Home = () => {
    return (
        <>

            <div className="text-center absolute w-full h-[100vh]">
                <img src="/images/tenor.gif" alt="Tensor Animation" className="w-full h-[100vh]" />
            </div>
            <div className="relative top-0 left-0  bg-[rgba(0,0,0,0.3)] w-full h-[100vh]">
                <div className="flex w-full h-full items-center z-99 pl-[10%]">
                    <div className="relative space-y-3 h-[35%]">
                        <h2 className="text-[#ffffffb3] font-semibold text-[18px]">Leave the house cleaning chores to us</h2>
                        <h1 className="text-[42px] leading-[50px] text-white font-medium">
                            Let us do the dirty work, so you <br /> don&apos;t have to.
                        </h1>
                        <div className="space-x-5 absolute bottom-2 left-0">
                            <Button title="Appointment" bgcolor="#2b98f0" textcolor="white" hovertxt="#2b98f0" link="#" />
                            <Button title="call now" bgcolor="#f3e53d" textcolor="black" link="#" hovertxt="#f3e53d" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] absolute left-1/2 translate-x-[-50%] top-[95%]">
                <AppointmentFrom />
                <AboutSection />
            </div>

        </>
    );
}

export default Home;
