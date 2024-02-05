import React from "react"
// import Navbar from "./components/Navbar"
import List from "./components/List"

const DUMMY_LIST = [
  {
    id: 'e1',
    title: 'React.js',
    complete: false,
  },
  {
    id: 'e2',
    title: 'Java Script',
    complete: false,
  },
  {
    id: 'e3',
    title: 'Html',
    complete: false,
  },
  {
    id: 'e4',
    title: 'Css',
    complete: false,
  },
];

function App() {

  // const [lists, setList] = React.useState(DUMMY_LIST)

  // const addListHandler = (list) => {
  //   setList((prevList) => {
  //     return [list, ...prevList];
  //   });
    
  // };



  // const handleChange = (listId) => {
  //   setList(prevData => {
  //     const newArray = []
  //     for (let i = 0; i < prevData.length; i++) {
  //       if (prevData[i].id === listId) {

  //         newArray.unshift({ ...prevData[i], isFriendly: !prevData[i].isFriendly })

  //       }
  //       else {
  //         newArray.push(prevData[i])
  //       }
  //     }

  //     return newArray
  //   }

  //   )
  // }

  return (
    <div className='container'>
      <div className='inside--container'>
        <h1>Things to do</h1>
        <List
          items={DUMMY_LIST}
          // handleChange={handleChange}
          // addListHandler={addListHandler}
        />
      </div>
    </div>

  )
}

export default App
