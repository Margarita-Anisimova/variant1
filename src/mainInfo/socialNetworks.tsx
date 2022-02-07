import { useState, useEffect } from "react";
import {
  addsocialNetwork,
  newval1,
  deleteLink,
} from "../app/firstFormReducer.tsx";
import { useSelector, useDispatch } from "react-redux";
import "./socialNetworks.css";
import { createTextInputs } from "../commonFunctions.tsx";

function SocialNetworks(props) {
  // type SocialLink = { net: string; link: string };
  const socialNetworks = useSelector(
    (state) => state.firstFormState.firstFormState
  ).socialNetworks;
  const dispatch = useDispatch();
  //const [socialNetworks, setSocialNetworks] = useState([{ net: 0, link: "" }]);

  function handle(element) {
    let a = { id: element.target.id, name: element.target.name };
    if (element.target.name === "net") {
      a.value = element.target.selectedIndex;
    } else {
      a.value = element.target.value;
    }
    dispatch(newval1(a));
  }

  const parametrs: string[][] = [["link", "Ссылка", "required", "text"]];

  function CreateFromForLinks() {
    return socialNetworks.map((s, ind) => {
      return (
        <div className="socialNetwork" key={"link" + ind}>
          <select className="select" name="net" id={ind} onChange={handle}>
            <option>ВК</option>
            <option>Телеграмм</option>
          </select>
          {createTextInputs(parametrs, s, ind)}
          <button
            type="button"
            className="delete-button"
            onClick={(e) => deleteItem(ind)}
          >
            -
          </button>
        </div>
      );
    });
  }

  function deleteItem(id) {
    dispatch(deleteLink(id));
  }

  useEffect(() => {
    let a = document.getElementsByName("net");
    for (let index = 0; index < a.length; index++) {
      a[index].options[socialNetworks[index].net].selected = true;
    }
  });

  function NewF() {
    if (
      socialNetworks.length === 0 ||
      socialNetworks[socialNetworks.length - 1].link.trim().length > 0
    ) {
      dispatch(addsocialNetwork());
    }
  }

  return (
    <form onChange={(e) => handle(e)}>
      <button className="addbutton" type="button" onClick={() => NewF()}>
        Добавить социальную сеть
      </button>
      <div className="inputs-container"> {CreateFromForLinks()}</div>
    </form>
  );
}

export default SocialNetworks;
