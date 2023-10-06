import React from "react";
import cl from "./taskTheme.module.scss";
import {
  BsGearWideConnected,
  BsPencil,
  BsTrash,
  BsPalette,
} from "react-icons/bs";
import InputEdit from "../../UI/InputEdit/InputEdit";

import ColorPalette from "../../UI/ColorPalette/ColorPalette";
import axios from "axios";
import {API_TASKS_EDIT, API_TODO_URL, TASKS} from "../../../network/urlConst";


function TaskTheme({
  theme,
  id,
  editTaskColor,
  getTasks,
  tasksData,
  setIsPending,
}) {
  async function removeAllTasks(id) {
    setIsPending(true);
    let removeIndex = await tasksData
      .map((e) => e.id == id && e.tasks.map((f) => f.id))
      .filter((f) => f)[0];
    for (let index = 0; index < removeIndex.length; index++) {
      await axios.delete(API_TODO_URL + id + "/" + TASKS + removeIndex[index]);
    }
    await axios.delete(API_TODO_URL + id).then(() => getTasks());
  }
  const [isTolls, setIsTolls] = React.useState(false);
  const [isTollsColor, setIsTollsColor] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [inputTheme, setInputTheme] = React.useState(theme);
  const editTheme = (id, newValue) => {
    setIsPending(true)
    axios
      .put(API_TODO_URL + id, {
        theme: newValue,
      })
      .then(() => getTasks());
  };
  const addAndClose = () => {
    editTheme(id, inputTheme);
    setEditMode(false);
  };
  return (
    <div className={cl.task}>
      <div className={cl.title_elem}>
        {editMode ? (
          <InputEdit
            inputValue={inputTheme}
            autoFocus={true}
            brd={false}
            h={"max-content"}
            fz={25}
            callBack={addAndClose}
            keyInstruct={setEditMode}
            setInputValue={setInputTheme}
            plcH={'Edit and Push "Return"'}
          />
        ) : (
          <h3 className={cl.title_task}>{theme}</h3>
        )}
        <div
          className={cl.gear_w}
          onClick={() => setIsTolls(!isTolls)}
          onMouseLeave={() => setIsTolls(false)}></div>
        <BsGearWideConnected className={cl.gear_icn} />
        <div
          className={`${cl.tolls_wind} ${isTolls && cl.tolls_wind_active}`}
          onMouseLeave={() => setIsTolls(false)}
          onMouseEnter={() => setIsTolls(true)}>
          <div
            onMouseEnter={() => setIsTollsColor(true)}
            onMouseLeave={() => setIsTollsColor(false)}
            className={cl.tolls_item}>
            <BsPalette className={cl.tolls_icon} />
            <p>Color</p>
          </div>
          <div
            className={cl.tolls_item}
            onClick={() => {
              setEditMode(true);
            }}>
            <BsPencil className={cl.tolls_icon} />
            <p>Rename</p>
          </div>
          <div className={cl.tolls_item} onClick={() => removeAllTasks(id)}>
            <BsTrash className={cl.tolls_icon} />
            <p>Remove</p>
          </div>
        </div>
        <ColorPalette
          isTollsColor={isTollsColor}
          editTaskColor={editTaskColor}
          setIsTollsColor={setIsTollsColor}
          setIsTolls={setIsTolls}
          id={id}
        />
      </div>
    </div>
  );
}

export default TaskTheme;
