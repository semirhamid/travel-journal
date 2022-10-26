import React from "react"
import Navigation from './Navigation';
import Main from './Main';
import data from './data';
console.log(data)


export default function App() {
  let maindata = data.map(item => <Main {...item} />)
  return (
    <div className="wholecontainer">
      <Navigation />
      <div className="container">
        
        {maindata}
      </div>

    </div>
  )


}

