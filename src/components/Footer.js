import React from 'react';

const Footer = () =>(
    <div>
        <footer className="bg-black1 p=v4 ph3 ph5-m ph6-l mid-gray ">
            <small className="f6 db tc">Copyright © 2018 OS <b className="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
                <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
                <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>
    </div>
)

export default Footer;