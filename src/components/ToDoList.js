import React from "react";

export default function ToDoList(props){


        return (
            <ul>
                {props.items.map((list) =>(

                    <div key = {list.id}>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                id="isFriendly" 
                                checked={ list.complete }
                                onChange={ () => props.handleChange( list.id ) }
                            />
                            <label className="form-check-label" htmlFor="isFriendly">{list.title}</label>
                        </div>
                    </div>

                ))}
            </ul>
            
        )

}