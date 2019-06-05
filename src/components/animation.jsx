import React, {Component} from 'react';
import Image from './myphoto.jpg';
import ScriptTag from 'react-script-tag';
import { SocialIcon } from 'react-social-icons';

import {Link,animateScroll as scroll} from 'react-scroll';



export default class Animate extends Component{
render(){
return(
<div className="container_demo">
    <div className="content">
        <div id="large-header" className="large-header">

            <ScriptTag src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></ScriptTag>
            <ScriptTag src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></ScriptTag>
            <ScriptTag src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></ScriptTag>
            {/* <canvas id="demo-canvas">

            </canvas>

            */}
            <div className="details">
                <p id="myname">Aravind Krishnan</p>
                <p id="abtme">Passionate developer and enthusiast learner</p>

                <div className="social_icon">
                    <SocialIcon className="fb" url="https://www.facebook.com/aravindswimmingkrishnan"></SocialIcon>
                    <SocialIcon className="linkedin" url="https://www.linkedin.com/in/aravind-krishnan-808a85152/">
                    </SocialIcon>
                    <SocialIcon className="github" url="https://github.com/aravind289"></SocialIcon>
                    <SocialIcon className="gdrive"
                        url="https://drive.google.com/open?id=1_sb5Wy7er0OKmSe5lJwiwx7F44IB4hfW"></SocialIcon>

                </div>

                <div className="myImage">

                    <img src={Image} className="photo" alt="myphoto"></img>

                </div>








            </div>





        </div>
    </div>

</div>




)



}
}