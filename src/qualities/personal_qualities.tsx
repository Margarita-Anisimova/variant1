import { useState, useEffect } from "react";
import { newval1, addItem1 } from "../app/professional_skillsSlice.tsx";
import { useSelector, useDispatch } from "react-redux";
import { findByTitle } from "@testing-library/react";

function PersonalQualities(props) {
  const personal_qualities = useSelector(
    (state) => state.professionalSkillsState.qualities
  ).personal_qualities;
  const dispatch = useDispatch();

  function handle(element) {
    let a = {
      id: element.target.id,
      name: element.target.name,
      value: element.target.value,
    };
    dispatch(newval1(a));
  }

  function CreateFromForLinks() {
    return personal_qualities.map((s, ind) => {
      return (
        <div>
          <input
            className="input-text"
            type="text"
            name="description"
            placeholder="Описание навыка"
            value={s}
            id={ind}
          />
        </div>
      );
    });
  }

  function AddEdd() {
    if (personal_qualities[personal_qualities.length - 1]?.trim().length != 0) {
      dispatch(addItem1());
    }
  }

  const dict = [
    { name: "1", values: ["1", "2", "3"] },
    { name: "2", values: ["1", "2", "3"] },
    { name: "3", values: ["1", "2", "3"] },
  ];

  function Find() {
    let elem = document.getElementsByClassName("variatwind1")[0];
    elem.style.display = "block";
  }

  let openedItenId = -1;

  function open(i) {
    let elem = document.getElementsByClassName("items1");
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
      id: personal_qualities.length - 1,
      value: e.target.textContent,
    };
    if (
      personal_qualities.length === 0 ||
      personal_qualities[a.id]?.trim().length != 0
    ) {
      AddEdd();
      a.id = a.id + 1;
    }

    dispatch(newval1(a));
    let variatwind = document.getElementsByClassName("variatwind1")[0];
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
          <div style={{ display: "none" }} className="items1">
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
      <div style={{ display: "none" }} className="variatwind1">
        {createvariatwind()}
      </div>
      <form onChange={handle}>{CreateFromForLinks()}</form>
    </div>
  );
}
// style={{ display: "none" }}
export default PersonalQualities;
