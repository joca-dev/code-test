import React from "react"

const Toolbar = ({ addBox, removeBox, changeBoxColor, getSelectedBoxes }) => {


  const changeBoxToNewColor = (color) => {
    changeBoxColor(color)
  }

  return (
    <div className="toolbar" >
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Box</button>
      <input type="color" onChange={e => changeBoxToNewColor(e.target.value)} />
      <span>
        {getSelectedBoxes
          ? `${getSelectedBoxes === 1 ? `${getSelectedBoxes} box` : `${getSelectedBoxes} boxes`} selected`
          : 'No boxes selected'}
      </span>
    </div >
  )
}

export default Toolbar
