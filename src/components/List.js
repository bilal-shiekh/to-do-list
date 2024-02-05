import { render } from "@testing-library/react"
import React from "react"
import Actions from './Actions'
import ToDoList from './ToDoList'

export default function Lists(props) {

    const [lists, setList] = React.useState(props.items)

    const addListHandler = (list) => {
        setList((prevList) => {
            return [list, ...prevList];
        });

    };

    const handleChange = (listId) => {
        setList(prevData => {
            const newArray = []
            for (let i = 0; i < prevData.length; i++) {
                if (prevData[i].id === listId) {

                    newArray.unshift({ ...prevData[i], complete: !prevData[i].complete })

                }
                else {
                    newArray.push(prevData[i])
                }
            }

            return newArray
        }

        )
    }

    const [filteredList, setFilteredList] = React.useState(false)

    const filterChangeHandler = () => {
        setFilteredList(true);
        setEdit(false)
    };

    const allChangeHandler = () => {
        setFilteredList(false);
        setEdit(false)
    };

    

    const filteredLists = lists.filter((list) => {
        if (list.complete === filteredList) {
            return ({
                id: list.id,
                title: list.title,
                complete: list.complete
            }
            )
        }
    });

    const [isEditing, setEdit] = React.useState(false)
    const [isSearch, setSearch] = React.useState("")

    const titleChangeHandler = (title) => {
        setSearch(title)
        setEdit(true)

    }

    const filteredTitle = lists.filter((list) => {
        if (list.title === isSearch) {
            return ({
                id: list.id,
                title: list.title,
                complete: list.complete
            }
            )
        }
    });

    return (
        <section>
            <Actions
                onChangeFilter={filterChangeHandler}
                onAddList={addListHandler}
                onChangeAll={allChangeHandler}
                onChangeTitle={titleChangeHandler}
                items={lists}
            />

            {isEditing ?
                <ToDoList
                items={filteredTitle}
                handleChange={handleChange}
                /> :
                <ToDoList
                items={filteredList ? filteredLists : lists}
                handleChange={handleChange}
                />
            }
            
        </section>
    )
}