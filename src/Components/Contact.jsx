import React, { useState } from "react";
import { set, ref } from "firebase/database";
// import Firebase from '../Databases/Firebase'
import { CurrentDate, CurrentTime } from "../Databases/DateTime";
export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const submit = () => {
  //   set(ref(Firebase, `ContactForm /${CurrentDate} ${firstname} ${lastname} `),
  //     {
  //       FullName: firstname + lastname,
  //       Phone: phone,
  //       Email: email,
  //       Message: message,
  //       Date: CurrentDate,
  //       Time: CurrentTime,
  //     }
  //   )
  // }
  return (
    <>
      <div>Contact</div>
      <input
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        placeholder="First Name"
      ></input>
      <input
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        placeholder="Last Name"
      ></input>
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        placeholder="Phone"
      ></input>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      ></input>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"
      ></input>
      <button onClick={submit}>Submit</button>
    </>
  );
}
