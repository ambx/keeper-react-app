import React from 'react';

function Footer(){
     const curdate= new Date();
     const year= curdate.getFullYear();

    return(
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;