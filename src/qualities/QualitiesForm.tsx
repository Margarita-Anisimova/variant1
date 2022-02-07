import { useEffect } from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import Professional_Skills from "./professional_skills.tsx";
import PersonalQualities from "./personal_qualities.tsx";

function QualitiesForm(props) {
  return (
    <div>
      <section>
        <Professional_Skills></Professional_Skills>
      </section>
      <section>
        <PersonalQualities></PersonalQualities>
      </section>

      <NavLink tag={Link} className="text-dark" to="/">
        Назад
      </NavLink>
      <NavLink tag={Link} className="text-dark" to="/work">
        Далее
      </NavLink>
    </div>
  );
}

export default QualitiesForm;
