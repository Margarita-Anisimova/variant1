import "./avatar.css";
import image from "../images/image.png";
import { useSelector, useDispatch } from "react-redux";
import { newImage, deleteImage } from "../app/firstFormReducer.tsx";
import { addItem } from "../app/educationslice";

function Avatar(props) {
  const main_info = useSelector((state) => state.firstFormState.firstFormState);
  const dispatch = useDispatch();

  function downloadImage(e) {
    dispatch(newImage(URL.createObjectURL(e.target.files[0])));
    var closebutton = document.getElementsByClassName("closebutton");
    closebutton[0].style.display = "block";
  }

  function deleteAvatar(e) {
    dispatch(deleteImage());
    var uploaded_image = document.getElementsByClassName("uploaded_image");
    uploaded_image[0].value = null;
    // preview_image[0].style.display = "none";
    e.target.style.display = "none";
  }

  return (
    <form onChange={(e) => props.handle(e)}>
      <div className="avatar-container">
        <div className="image-container">
          <button
            type="button"
            className="closebutton"
            onClick={(e) => deleteAvatar(e)}
          >
            X
          </button>
          <img className="avatar" src={main_info.image} alt="image" />
        </div>
        <input
          type="file"
          id="uploaded_image"
          className="uploaded_image"
          onChange={(e) => downloadImage(e)}
        />
        <label className="upload-label" htmlFor="uploaded_image">
          Выберите файл
        </label>
      </div>

      <label className="date-input-container">
        Дата рождения
        <input
          className="date-input"
          type="date"
          name="birth_date"
          value={main_info.birth_date}
        />
      </label>
    </form>
  );
}

export default Avatar;
