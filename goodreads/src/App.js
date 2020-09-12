import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const key = process.env.REACT_APP_KEY
  console.log("key", key)
  const [bookState, setBookState] = useState()
  useEffect(() => {
   axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/review_counts.json?key={${key}}&isbns=0596009208,0596517742
   `)
   .then(res => {
     console.log("res", res)
   })
  }, [])
  return (
   <div>
     GoodReads API
   </div>
  );
}

export default App;
