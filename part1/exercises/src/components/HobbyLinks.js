import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
   let hobbyLinks = ["https://www.goodreads.com/", "https://www.ravelry.com/account/login/"];

    return (
        <div>
         <h1 className = {classes.hobbiesHeading}>My Hobbies</h1>
         <a href = {hobbyLinks[0]}>GoodReads</a><br></br>
         <a href = {hobbyLinks[1]}>Ravelry</a>
        </div>      
     );
   }
