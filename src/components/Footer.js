import React from 'react';
import Typed from 'react-typed';

const Footer = () => (
  <footer>
    <div className="footer">
    <center>
    <Typed
    strings={[
        'Face_Mask © 2018 ',
        'Created with love by ID8',
        'Visit us on Github @ https://github.com/reggieroby/face_mask']}
        typeSpeed={50}
        backSpeed={70}
        loop >
    </Typed>
    </center>
    <br />
    </div>
  </footer>
);

export default Footer;
