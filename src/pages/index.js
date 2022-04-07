import React from 'react'
import Navigationbar from '../components/Navigationbar/navbar'
import Mainsection from '../components/Mainsection/mainsection'
import Services from '../components/Services/services'
import Embassyaddress from '../components/Embassyaddress/embassyadress'
import Gallery from '../components/Gallery/gallery'
import Newsupdates from '../components/Newsupdates/newsupdate'
import Viewnigeria from '../components/Viewnigeria/viewnigeria'
import Footer from '../components/Footer/footer'

const Index = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const click = () => {
    //     setIsOpen(!isOpen)
    // };


    return (
        <>
        <Navigationbar/>
        <Mainsection/>
        <Embassyaddress/>
        <Services/>
        <Gallery/>
        <Newsupdates/>
        <Viewnigeria/>
        <Footer/>
        </>
    );
};

export default Index
