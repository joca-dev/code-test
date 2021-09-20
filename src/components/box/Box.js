import { observer } from "mobx-react"
import React from "react"

import BoxDraggable from "components/boxDraggable"

const Box = ({ box }) => (
  <BoxDraggable {...box} onClick={box.toggle}>
    <div>Box</div>
  </BoxDraggable>
)

export default observer(Box)
