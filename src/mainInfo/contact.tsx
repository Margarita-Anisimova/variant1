import "./mainInfo.css";
import { useSelector, useDispatch } from "react-redux";

function Contact(props) {
  const main_info = useSelector((state) => state.firstFormState.firstFormState);

  const parametrs: string[] = [
    ["phoneNumber", "Номер телефона", "required", "tel"],
    ["email", "Email", "required", "email"],
  ];

  return (
    <form onChange={(e) => props.handle(e)}>
      <h3>Контактная информация</h3>
      {props.createTextInputs(parametrs, main_info)}
    </form>
  );
}

export default Contact;
