import React from 'react';
import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://images.penguinrandomhouse.com/cover/9780399590948";
   let book2 = "https://jeroenthoughts.files.wordpress.com/2023/03/tress-of-the-emerald-sea.jpg";
   let book3 = "https://www.novellives.com/wp-content/uploads/2023/03/London-Seance-Society.jpg";

   return (
      <div>
         <h1 className = {classes.bookHeading}>{pageTitle}</h1>
         <img className = {classes.bookLink} src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
         <img className = {classes.bookLink} src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img className = {classes.bookLink} src={book3} alt="The London Seance Society by Sarah Penner" />
      </div>      
   );
}