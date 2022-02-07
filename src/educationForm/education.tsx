import { useEffect } from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newval1, addItem } from "../app/educationslice";
import "./educationForm.css";
import { createTextInputs, blurTextInput } from "../commonFunctions.tsx";

function Education(props) {
  const educations = useSelector(
    (state) => state.educationState.educationState
  );
  const dispatch = useDispatch();

  function handleMainInfo(element) {
    let a = {
      id: element.target.parentElement.parentElement.id,
      name: element.target.name,
    };
    if (
      element.target.name === "educationform" ||
      element.target.name === "degree"
    ) {
      a.value = element.target.selectedIndex;
    } else {
      a.value = element.target.value;
    }
    dispatch(newval1(a));
  }

  const parametrs: string[] = [
    ["university", "Университет", "required", "text"],
    ["faculty", "Факультет", "required", "text"],
    ["specialization", "Специальность", "required", "text"],
  ];

  function CreateFroms() {
    console.log(educations);
    return educations.map((s, i) => {
      return (
        <section className="edform" id={i}>
          <div className="part" id={i}>
            {createTextInputs(parametrs, s)}
          </div>

          <div id={i} className="part part2">
            <label>Дата окончания</label>
            <input
              className="text-input"
              type="number"
              name="graduation_year"
              min="1900"
              max="2099"
              required
              step="1"
              value={s.graduation_year}
            />
            <div className="box">
              <select name="educationform">
                <option>Очная </option>
                <option>Заочная</option>
              </select>
            </div>
            <div className="box">
              <select name="degree">
                <option>Бакалавр </option>
                <option>Магистр</option>
                <option>Аспирант</option>
              </select>
            </div>
          </div>
        </section>
      );
    });
  }

  useEffect(() => {
    let a = document.getElementsByName("educationform");
    for (let index = 0; index < a.length; index++) {
      a[index].options[educations[index].form].selected = true;
    }
    a = document.getElementsByName("degree");
    for (let index = 0; index < a.length; index++) {
      a[index].options[educations[index].degree].selected = true;
    }
  });

  function AddEdd() {
    dispatch(addItem());
  }

  return (
    <div onChange={handleMainInfo}>
      <button type="button" onClick={() => AddEdd()}>
        Добавить образование
      </button>
      <form>{CreateFroms()}</form>
    </div>
  );
}

export default Education;
