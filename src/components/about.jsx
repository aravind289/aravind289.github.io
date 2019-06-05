import React , {Component} from 'react';


export default class About extends Component{
render(){



return(
<div className="about" id="abt">
    <div className="header">
        <h1>About Me</h1>
    </div>
    <div className="body">
        <p>I am a college student pursuing B-tech in Computer Science and engineering from VIT University Chennai.I have always been keen to design websites and here I am here with my first personal one.
        Besides designing websites , I love to explore my learning in deep learning. </p>
 <p className="work"><b> Projects </b>
 <ul>
    <li><b>Gesture Controlled Robot</b>
    <p>This project aims at controling the movement of the robot using gesture .Idea is based on my knowledge in Iot.The bot receives the signal 
        by the movement of the hand and response correspondingly.
    </p>
    </li>
    <li><b>Online banking system</b>
    <p>The project is basically a prototype of online banking system with required facilities and minimilistic design with efficient Ui design.Just to test my skills in database management</p>
    
    </li>
    <li>
     <b>Carbon zero</b>
     <p>Developing a gamified approach app to reduce carbon emission by individuals by tracking their transport methods and also making them aware of the importance of reduction in the carbon footprint.Made with minimalist Ui design.</p>   
    </li>

 </ul>
 
 
 </p>

 <p><b>My activities    </b>
 <ul>
    <li>  <p>I am a national swimmer.I love swimming.It has always helped me to relax my mind and helped me in focus in my work</p>


    </li>
    <li>
        Hey do u like to listen music..I am sure yes!!!even me..I love to listen to music .Specially emotional and romantic one.I also play piano and tabla .
    </li>
   


 </ul>
 
 
 
 
 
 </p>


    </div>







</div>
)
}




}