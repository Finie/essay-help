import React from 'react'
import {BiBookReader, AiOutlineFileDone, AiOutlineFileSearch,SiGoogleanalytics,GiTeacher,GiBookmark,FaFilePowerpoint,IoAnalytics} from 'react-icons/all'

import './serviceinfo.css'
import Button from "../Button/Button"

function Serviceinfo(){
return(
    <div className="service-container">

        <div className="online-info">
            <header>Online class help and Exam help</header>
            <section>Essayzig the leading US-based provider of Do My Homework and Take My Online Class services with servers in UK and canada. Founded in 2010, we’ve completed over 17,000 assignments for our clients. We complete quizzes, tests, exams, projects, reports, essays, modules, and even entire courses in nearly every subject. We’d be delighted to serve you on your next online course or assignment.</section>

            <section>Amazing offer for all classes (all prices quoted are per week): One week- 99$, Online exam -$99 Quiz and texts -$69</section>
            <p>Place your order for class or exam, prices for online class are per week, It’s an A or B or a refund.</p>

            <Button>Place your online class help order now</Button>
        </div>

        <div className="service-info">
        <header>Our Services</header>
         <div className="service-item-holder">

         <div className="service-item">
        <BiBookReader style={{height:80,width:80}}/>
        <p>ASSIGNMENT</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>



        <div className="service-item">
        <AiOutlineFileDone style={{height:80,width:80}}/>
        <p>ESSAY</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>



        <div className="service-item">
        <GiTeacher style={{height:80,width:80}}/>
        <p>ONLINE TUTORING</p>
        <p>ONLINE TUTORING ALL SUBJECTS</p>
        </div>



        <div className="service-item">
        <SiGoogleanalytics style={{height:80,width:80}}/>
        <p>ANALYSIS</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>


        <div className="service-item">
        <AiOutlineFileSearch style={{height:80,width:80}}/>
        <p>RESEARCH WORK</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>


        <div className="service-item">
        <GiBookmark style={{height:80,width:80}}/>
        <p>THESIS</p>
        <p>HELP & GUIDANCE ALL SUBJECTS</p>
        </div>



        <div className="service-item">
        <FaFilePowerpoint style={{height:80,width:80}}/>
        <p>POWERPOINT</p>
        <p>POWERPOINT PRESENTATIONS</p>
        </div>



        <div className="service-item">
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