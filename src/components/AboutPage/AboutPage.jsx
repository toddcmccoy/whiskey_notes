import React from 'react';
import CSP from '../../images/CSP.png'
import STSlogo from '../../images/STSlogo.png'



// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="question-card">
        <div className="aboutpage">
        <img src = "https://media-exp1.licdn.com/dms/image/C4E03AQE7gMoF-dQ1AQ/profile-displayphoto-shrink_800_800/0/1660229802166?e=1665619200&v=beta&t=aLQxfNFBSKcIMXP7-S3x8V6pbFTDjmhb622bj1Sz6j8" height={300} width={300}/>
        <h2>Todd C McCoy</h2>
        <h4>Executive Bourbon Steward</h4>
        <h4>Certified Scotch Professional</h4>
        
        <a href="https://www.linkedin.com/in/toddcmccoy/">linkedin.com/in/toddcmccoy/</a>
        
            <h4>I would like to thank</h4>
            <p>
            Everyone here at Prime, especially Liz and Dane<br />
            Jemisin cohort<br />
            My partner for their support<br />
            My parents and family<br /><br />
            <img src={STSlogo} width="100px" /><br />  Stave and Thief Society<br /><br />
            <img src={CSP} width="100px"/>  <br />Council of Whisky Masters<br />
            </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;