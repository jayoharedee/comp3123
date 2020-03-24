import React from "react";
import axios from "axios";

const DeleteAction = props => {
    const deleteSelected = event => {
      event.preventDefault();
      console.log("ID selected for deletion : " + props.id)
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${props.id}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    return (
      <React.Fragment>
        <button type="submit" onClick={deleteSelected}>
          Delete
        </button>
      </React.Fragment>
    );
  };
export default DeleteAction;