import { useSelector, useDispatch } from "react-redux";
import { createTextInputs, blurTextInput } from "../commonFunctions.tsx";
import { newval1, addItem } from "../app/coursesSlice.tsx";

function Courses(props) {
  const courses = useSelector((state) => state.coursesState.coursesState);
  const dispatch = useDispatch();

  function AddEdd() {
    dispatch(addItem());
  }

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
    ["name", "Название", "required", "text"],
    ["organisation", "Организация", "required", "text"],
  ];

  function CreateFroms() {
    return courses.map((s, i) => {
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
          </div>
        </section>
      );
    });
  }

  return (
    <div onChange={handleMainInfo}>
      <button type="button" onClick={() => AddEdd()}>
        Добавить курс
      </button>
      <form>{CreateFroms()}</form>
    </div>
  );
}

export default Courses;
