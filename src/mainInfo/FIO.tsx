// import "./mainInfo.css";
import { useSelector } from "react-redux";

function FIO(props) {
  const main_info = useSelector((state) => state.firstFormState.firstFormState);

  const parametrs: string[][] = [
    ["surname", "Фамилия", "required", "text"],
    ["name", "Имя", "required", "text"],
    ["patronymic", "Отчество", "required", "text"],
    ["citizenship", "Гражданство", "", "text"],
    ["city", "Город проживани", "", "text"],
  ];

  return (
    <form onChange={(e) => props.handle(e)}>
      {props.createTextInputs(parametrs, main_info)}
    </form>
  );
}

export default FIO;
