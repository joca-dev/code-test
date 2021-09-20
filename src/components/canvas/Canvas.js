import { observer } from "mobx-react"
import React, { useEffect, useCallback } from "react"

import interact from "interactjs";

import Box from "components/box"

const Canvas = ({ store }) => {
  const boxRef = React.useRef();

  /*   const restrictionsCanvas = () => {
      const canvas = canvasRef?.current?.getBoundingClientRect()
  
      let { x, y, width, height } = canvas;
  
      x += area.left;
      y += area.top;
      width -= (area.right + area.left);
      height -= (area.bottom + area.top);
  
      setArea({ x, y, width, height });
  
  
      return { x: x, y: y, width: width, height: height };
    }
  
    const draggableOptions = {
      onmove: event => {
        const target = event.target
        // keep the dragged position in the data-x/data-y attributes
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
        // translate the element
        target.style.webkitTransform =
          target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)'
  
        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    } */

  const moveBoxes = useCallback((event) => {
    store.getbox(event.currentTarget.id).select()
    store.getSelectedBoxes().forEach((box) => {
      box.setLeft(box.left + event.dx);
      box.setTop(box.top + event.dy);
    })
  }, [store]);


  useEffect(() => {
    console.log({ boxRef })
    if (boxRef?.current) {
      interact(boxRef.current)
        .draggable({
          modifiers: [
            interact.modifiers.restrictRect({
              // restriction: restrictionsCanvas
            })
          ],

          listeners: {
            move: moveBoxes
          }
        })
    } else {
      console.log('no')
    }
    // setInteractions();
  }, [boxRef, store.boxes.length, moveBoxes])

  return (
    <div className="canvas" >
      {store.boxes.map(
        (box) => (
          <div ref={boxRef} id={box.id} key={box.id}>
            <Box key={box.id} box={box} />
          </div>
        ))
      }
    </div >
  )
}

export default observer(Canvas)
