import React from 'react';
import swal from 'sweetalert';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


function Footer() {

  const launchWhiskeyWheel = () => {
    swal({
        title: "Flavor and Aroma Wheel",
        icon:"http://1.bp.blogspot.com/-L3M-Y4_8FnQ/ThXqY6jYOiI/AAAAAAAAAS0/Jl4vCgrl9gI/s1600/swri.jpg",
        className:".swal-modal",
        buttons: false,
        closeOnEsc: true
      }
    )
  }

  return(
  <div>
  <button onClick={launchWhiskeyWheel} className="wheel">Need help? Click to open the Flavor and Aroma Wheel</button>
  <footer>&copy; Whisk&#40;e&#41;y Notes</footer>
  </div>

  )
}

export default Footer;
