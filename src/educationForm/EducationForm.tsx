import { useEffect } from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newval1, addItem } from "../app/educationslice";
import "./educationForm.css";
import Education from "./education.tsx";
import Courses from "./courses.tsx";
import { createTextInputs, blurTextInput } from "../commonFunctions.tsx";

function EducationForm(props) {
  function checkAll(e) {
    let form = document.querySelectorAll("form");
    for (let i = 0; i < form.length; i++) {
      if (!form[i].checkValidity()) {
        // form.reportValidity();
        e.preventDefault();

        for (let j = 0; j < form[i].elements.length; j++) {
          if (
            form[i].elements[j].required &&
            !form[i].elements[j].validity.valid
          ) {
          }
        }
      }
    }
  }

  return (
    <div>
      <section>
        <Education></Education>
      </section>
      <section>
        <Courses></Courses>
      </section>

      <NavLink
        onClick={(e) => checkAll(e)}
        tag={Link}
        className="text-dark"
        to="/"
      >
        Назад
      </NavLink>
      <NavLink
        onClick={(e) => checkAll(e)}
        tag={Link}
        className="text-dark"
        to="/work"
      >
        Далее
      </NavLink>
    </div>
  );
}

export default EducationForm;
