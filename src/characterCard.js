import React, { useState, useEffect, useRef } from 'react';
export default function CharacterCard(props) {
   const attemptRef = useRef(props.attempt);
   const [active, setActive] = useState(false);
   useEffect(() => {
      if (attemptRef.current !== props.attempt) {
         setActive(false)
         attemptRef.current = props.attempt
      }
   })

   const activate = () => {
      if (!active) {
         setActive(true)
         props.activationHandler(props.value)
      }
   }
   const className = `card ${active ? 'activeCard' : ''}`
   return (
      <div className={className} onClick={activate}>{props.value}</div>
   )

}
