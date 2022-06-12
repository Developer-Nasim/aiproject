import Header from "./header"
import About from "./about"
import Services from "./services"
import Skills from "./skills"
import Framework from "./framework"
import WhyUs from "./whyus"
import Footer from "./footer" 




function Homepage() {
    return(
        <>
            <Header />
            <About />
            <Services />
            <Framework />
            <Skills />
            <WhyUs />
            <Footer />
        </>
    )
}

export default Homepage;