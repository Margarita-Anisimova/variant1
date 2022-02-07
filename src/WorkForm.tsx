import { useState } from "react";
import { Navbar, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newval1, addItem } from "./app/workslice.tsx";
import { createTextInputs, blurTextInput } from "./commonFunctions.tsx";

function WorkForm(props) {
  const works = useSelector((state) => state.workState.workState);

  const dispatch = useDispatch();

  function handleMainInfo(element) {
    let a = {
      id: element.target.parentElement.parentElement.id,
      name: element.target.name,
      value: element.target.value,
    };
    dispatch(newval1(a));
  }

  const parametrs: string[] = [
    ["organization", "Организация", "required", "text"],
    ["post", "Должность", "required", "text"],
  ];

  useEffect(() => {
    let form = document.querySelectorAll("form")[0];
    for (let i = 0; i < form.elements.length; i++) {
      let label = document.getElementById(form.elements[i].name + "-label");
      if (label) {
        if (form.elements[i].value.trim().length > 0) {
          label.style = `top: -20px;
      font-size: 14px;
      color: #5264ae;`;
        }
      }
    }
  });

  function CreateFroms() {
    return works.map((s, i) => {
      return (
        <form onChange={handleMainInfo} id={i}>
          {createTextInputs(parametrs, s)}

          <label>
            Дата поступления
            <input
              className="text-input"
              type="number"
              name="date_start"
              min="1900"
              max="2099"
              required
              step="1"
              value={s.date_start}
            />
          </label>
          <label>
            Дата окончания
            <input
              className="text-input"
              type="number"
              name="date_end"
              min="1900"
              max="2099"
              required
              step="1"
              value={s.date_end}
            />
          </label>
          <button type="button" onClick={() => AddEdd()}>
            +
          </button>
        </form>
      );
    });
  }

  function AddEdd() {
    dispatch(addItem());
  }

  return (
    <div>
      {CreateFroms()}{" "}
      <NavLink tag={Link} className="text-dark" to="/about ">
        Назад
      </NavLink>
      <NavLink tag={Link} className="text-dark" to="/about ">
        Далее
      </NavLink>
    </div>
  );
}

export default WorkForm;
