import "./mainInfo.css";
import SocialNetworks from "./socialNetworks.tsx";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newval } from "../app/firstFormReducer.tsx";
import FIO from "./FIO.tsx";
import Avatar from "./avatar.tsx";
import Contact from "./contact.tsx";
import { createTextInputs } from "../commonFunctions.tsx";

function MainInfoForm(props) {
  const dispatch = useDispatch();

  function handleMainInfo(element) {
    if (element.target.name === "uploaded_image") return;
    dispatch(
      newval({ name: element.target.name, value: element.target.value })
    );
  }

  // function checkAll(e) {
  //   let form = document.querySelectorAll("form");
  //   for (let i = 0; i < form.length; i++) {
  //     if (!form[i].checkValidity()) {
  //       // form.reportValidity();
  //       e.preventDefault();

  //       for (let j = 0; j < form[i].elements.length; j++) {
  //         if (
  //           form[i].elements[j].required &&
  //           !form[i].elements[j].validity.valid
  //         ) {
  //         }
  //       }
  //     }
  //   }
  // }

  return (
    <div className="main-container">
      <section className="container">
        <FIO handle={handleMainInfo} createTextInputs={createTextInputs}></FIO>
        <Avatar handle={handleMainInfo}></Avatar>
      </section>
      <section className="container">
        <Contact
          handle={handleMainInfo}
          createTextInputs={createTextInputs}
        ></Contact>
        <SocialNetworks handle={handleMainInfo}></SocialNetworks>
      </section>
      <NavLink
        // onClick={(e) => checkAll(e)}
        tag={Link}
        className="nav"
        to="/education "
      >
        Далее
      </NavLink>
    </div>
  );
}

export default MainInfoForm;
