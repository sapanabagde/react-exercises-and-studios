import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList() {
   let choresTitle = "Today's Chores";
   return (
      <div>
         <h1 className={classes.choresHeading}>{choresTitle}</h1>
         <ul>
            <li className={classes.choresText}>Empty dishwasher</li>
            <li className={classes.choresText}>Complete prep work</li>
            <li className={classes.choresText}>Buy groceries</li>

         </ul>
      </div>

   );

}