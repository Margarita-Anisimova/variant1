export function createTextInputs(parametrs, info, id = "input") {
  return parametrs.map((item, i) => {
    return (
      <div className="input-container ic1" key={item[0]}>
        <input
          value={info[item[0]]}
          id={id}
          className="input"
          type={item[3]}
          name={item[0]}
          placeholder=" "
          required={item[2]}
        />
        <div
          className="cut"
          style={{ width: item[1].length * 10 + 10 + "px" }}
        ></div>
        <label htmlFor={i} className="placeholder" id={item[0] + "-label"}>
          {item[1]}
        </label>
      </div>
    );
  });
}
