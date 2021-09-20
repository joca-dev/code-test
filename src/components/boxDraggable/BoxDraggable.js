import { observer } from "mobx-react"
import React from "react"

const BoxDraggable = ({ id, children, color, height, left, top, width, isSelected, onClick }) => (
  <div
    id={id}
    className="box"
    style={{
      backgroundColor: color,
      width: width,
      height: height,
      transform: `translate(${left}px, ${top}px)`,
      border: isSelected ? "solid 3px red" : "none"
    }}
    onClick={onClick}
  >
    {children}
  </div>
)

export default observer(BoxDraggable)
