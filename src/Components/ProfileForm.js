import "./ProfileForm.css";

import { useRef } from "react";

function ProfileForm(props) {
  const avatarInput = useRef();
  const nameInput = useRef();
  const occupationInput = useRef();
  const socialFbInput = useRef();
  const socialInstaInput = useRef();
  const socialLiInput = useRef();

  const profileDataLift = function (e) {
    e.preventDefault();

    const avatarInputValue = avatarInput.current.value;
    const nameInputValue = nameInput.current.value;
    const occupationInputValue = occupationInput.current.value;
    const socialFbInputValue = socialFbInput.current.value;
    const socialInstaInputValue = socialInstaInput.current.value;
    const socialLiInputValue = socialLiInput.current.value;

    console.log(
      avatarInputValue,
      nameInputValue,
      occupationInputValue,
      socialFbInputValue,
      socialInstaInputValue,
      socialLiInputValue
    );

    fetch(
      `https://react-1bbaa-default-rtdb.europe-west1.firebasedatabase.app/users/${props.data.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...props.data,
          avatar: avatarInputValue,
          name: nameInputValue,
          // email: userEmail,
          // password: "ggggggn",
          occupation: occupationInputValue,
          // bio: "not set",
          fb: socialFbInputValue,
          insta: socialInstaInputValue,
          li: socialLiInputValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("User data updated");
        return res.json().then((data) => {
          console.log(data.name);
          console.log(data);
          console.log("***********");
          // console.log(occupationInput.current.value);
        });
      } else {
        return res.json().then((data) => console.log("error" + data));
      }
    });
    props.dataUpdater(
      {
        avatar: avatarInputValue,
        name: nameInputValue,
        occupation: occupationInputValue,
        fb: socialFbInputValue,
        insta: socialInstaInputValue,
        li: socialLiInputValue,
      },
      props.data.id
    );
    props.onSubmit();
  };

  return (
    <form className="prof-form" onSubmit={profileDataLift}>
      <span className="prof-form-field">
        <label htmlFor="avatar">Profile picture URL</label>
        <input
          id="avatar"
          ref={avatarInput}
          defaultValue={props.data.avatar}
        ></input>
      </span>

      <span className="prof-form-field">
        <label htmlFor="name">Full name</label>
        <input id="name" ref={nameInput} defaultValue={props.data.name}></input>
      </span>

      <span className="prof-form-field">
        <label htmlFor="occupation">Position</label>
        <input
          id="occupation"
          ref={occupationInput}
          defaultValue={props.data.occupation}
        ></input>
      </span>

      <span className="prof-form-field">
        <label htmlFor="social-fb">Facebook</label>
        <input
          id="social-fb"
          ref={socialFbInput}
          defaultValue={props.data.fb}
        ></input>
      </span>

      <span className="prof-form-field">
        <label htmlFor="social-insta">Instagram</label>
        <input
          id="social-insta"
          ref={socialInstaInput}
          defaultValue={props.data.insta}
        ></input>
      </span>

      <span className="prof-form-field">
        <label htmlFor="social-li">LinkedIn</label>
        <input
          id="social-li"
          ref={socialLiInput}
          defaultValue={props.data.li}
        ></input>
      </span>

      <button className="prof-form-submit-btn" type="submit">
        Confirm
      </button>
    </form>
  );
}

export default ProfileForm;
