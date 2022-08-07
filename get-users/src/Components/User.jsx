import React from "react";
import '../App.css'

export default function User(props) {
  console.log(props.user);
  return (
    <div className="user__card" key={props.user.id}>
      <img
        src={props.user.avatar}
        alt={props.user.first_name + " " + props.user.last_name}
        className="user__image"
      />
      <p className="user__name">
        Name : {props.user.first_name + " " + props.user.last_name}
      </p>
      <p className="user__email">Email: {props.user.email}</p>
    </div>
  );
}
