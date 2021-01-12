import React,{useEffect} from 'react'
import {BiBookReader, AiOutlineFileDone, AiOutlineFileSearch,SiGoogleanalytics,GiTeacher,GiBookmark,FaFilePowerpoint,IoAnalytics} from 'react-icons/all'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './serviceinfo.css'
import Button from "../Button/Button"

function Serviceinfo(){
    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])
return(
    <div className="service-container">
        <div className="online-info">
            <header  data-aos="fade-up" >Online class help and Exam help</header>
            <section  data-aos="fade-up">Essayzig the leading US-based provider of Do My Homework and Take My Online Class services with servers in UK and canada. Founded in 2010, we’ve completed over 17,000 assignments for our clients. We complete quizzes, tests, exams, projects, reports, essays, modules, and even entire courses in nearly every subject. We’d be delighted to serve you on your next online course or assignment.</section>
            <section  data-aos="fade-up">Amazing offer for all classes (all prices quoted are per week): One week- 99$, Online exam -$99 Quiz and texts -$69</section>
            <p  data-aos="fade-up">Place your order for class or exam, prices for online class are per week, It’s an A or B or a refund.</p>
            <Button  >Place your online class help order now</Button>
        </div>
        <div className="service-info">
        <header data-aos="fade-up">Our Services</header>
         <div className="service-item-holder">
         <div data-aos="zoom-in"  className="service-item">
        <BiBookReader style={{height:80,width:80}}/>
        <p>ASSIGNMENT</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <AiOutlineFileDone style={{height:80,width:80}}/>
        <p>ESSAY</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <GiTeacher style={{height:80,width:80}}/>
        <p>ONLINE TUTORING</p>
        <p>ONLINE TUTORING ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <SiGoogleanalytics style={{height:80,width:80}}/>
        <p>ANALYSIS</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <AiOutlineFileSearch style={{height:80,width:80}}/>
        <p>RESEARCH WORK</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <GiBookmark style={{height:80,width:80}}/>
        <p>THESIS</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <FaFilePowerpoint style={{height:80,width:80}}/>
        <p>POWERPOINT</p>
        <p>POWERPOINT PRESENTATIONS</p>
        </div>
        <div data-aos="zoom-in"  className="service-item">
        <IoAnalytics style={{height:80,width:80}}/>
        <p>QUANTITATIVE ANALYSIS</p>
        <p>HELP & GUIDANCE (EXCEL ANALYSIS)</p>
        </div>
         </div>
        </div>
    </div>
);

}


export default Serviceinfo;