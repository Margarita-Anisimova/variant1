import { useState, useEffect } from "react";
import { addItem, newval } from "../app/professional_skillsSlice.tsx";
import { useSelector, useDispatch } from "react-redux";
import { findByTitle } from "@testing-library/react";

function Professional_Skills(props) {
  const professional_skills = useSelector(
    (state) => state.professionalSkillsState.qualities
  ).professionalSkills;
  const dispatch = useDispatch();

  function handle(element) {
    let a = {
      id: element.target.id,
      name: element.target.name,
      value: element.target.value,
    };
    dispatch(newval(a));
  }

  function CreateFromForLinks() {
    return professional_skills.map((s, ind) => {
      return (
        <div>
          <input
            className="input-text"
            type="text"
            name="description"
            placeholder="Описание навыка"
            value={s.description}
            id={ind}
          />
        </div>
      );
    });
  }

  function AddEdd() {
    if (
      professional_skills[professional_skills.length - 1]?.description.trim()
        .length != 0
    ) {
      dispatch(addItem());
    }
  }

  const dict = [
    { name: "1", values: ["1", "2", "3"] },
    { name: "2", values: ["1", "2", "3"] },
    { name: "3", values: ["1", "2", "3"] },
  ];

  function Find() {
    let elem = document.getElementsByClassName("variatwind")[0];
    elem.style.display = "block";
  }

  let openedItenId = -1;

  function open(i) {
    let elem = document.getElementsByClassName("items");
    if (openedItenId >= 0) {
      elem[openedItenId].style.display = "none";
    }
    if (i === openedItenId) {
      return;
    }
    elem[i].style.display = "block";
    openedItenId = i;
  }

  function selectItem(e) {
    let a = {
      id: professional_skills.length - 1,
      name: "description",
      value: e.target.textContent,
    };
    if (
      professional_skills.length === 0 ||
      professional_skills[a.id]?.description.trim().length != 0
    ) {
      AddEdd();
      a.id = a.id + 1;
    }

    dispatch(newval(a));
    let variatwind = document.getElementsByClassName("variatwind")[0];
    variatwind.style.display = "none";
  }

  function createvariatwind() {
    return dict.map((s, i) => {
      return (
        <div>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "red" }}
            onClick={() => open(i)}
          >
            {s.name}
          </div>
          <div style={{ display: "none" }} className="items">
            {s.values.map((r) => (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                }}
                onClick={(e) => selectItem(e)}
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <button type="button" onClick={() => AddEdd()}>
        +
      </button>
      <button type="button" onClick={() => Find()}>
        Подобрать
      </button>
      <div style={{ display: "none" }} className="variatwind">
        {createvariatwind()}
      </div>
      <form onChange={handle}>{CreateFromForLinks()}</form>
    </div>
  );
}
// style={{ display: "none" }}
export default Professional_Skills;
