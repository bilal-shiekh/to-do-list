import React from "react";

export default function Button(props) {

  const dropdownChangeHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter();
  };

  const AllListChangeHandler = (event) => {
    event.preventDefault();
    props.onChangeAll();
  };

  const saveListDataHandler = (event) => {
    event.preventDefault();
    let b = prompt("Enter a new To Do list")
    const ListData = {
      id: Math.random().toString(),
      title: b,
      complete: false,
    };
    props.onAddList(ListData);
  };

  const [searchData, setSearchData] = React.useState(
    {titleName: ""}
)

const searchHandler= (event) => {
    setSearchData(prevSearchData => {
        return {
            ...prevSearchData,
            [event.target.name]: event.target.value
        }
    })
}

const keyHandler= (e) => {
  if (e.key === 'Enter'){
    for (let i=0 ; i<props.items.length; i++){
      if(searchData.titleName===props.items[i].title){
        props.onChangeTitle(props.items[i].title)
      }
    }
  }
}

  return (

   <div>
      <input
        type="text"
        placeholder="Search your task"
        onChange={searchHandler}
        value={searchData.titleName}
        name="titleName"
        onKeyDown={keyHandler}
      >
      </input>
    <button className="new-list" onClick={saveListDataHandler}>+</button>
    <button onClick={AllListChangeHandler} className="all">All</button>
    <button onClick={dropdownChangeHandler} className="completed">Completed</button>
    </div>
      
  )
}