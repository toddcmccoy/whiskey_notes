import React from 'react';


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
        
            <h4>I would like to thank</h4>
            <p>
            Everyone here at Prime, especially Liz and Dane<br />
            Jemisin cohort<br />
            My partner for their support<br />
            My parents and family<br />
            Stave and Thief Society<br />
            Concil of Whisky Masters<br />
            </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;