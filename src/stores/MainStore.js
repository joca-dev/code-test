import { types } from "mobx-state-tree";
import uuid from "uuid/v4";

import { getRandomColor, getRandomInt } from "../utils";
import BoxModel from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel)
  })
  .actions(self => {
    return {
      addBox() {

        const newBox = BoxModel.create({
          id: uuid(),
          color: getRandomColor(),
          left: getRandomInt(0, 400),
          top: getRandomInt(0, 400),
        })


        self.boxes.push(newBox);
      },
      removeBox() {
        self.boxes = self.boxes.filter(box => !box.isSelected)
      },

      changeBoxColor(color) {
        const boxWithNewColor = self.boxes.map(box => {
          if (box.isSelected) {
            box = { ...box, color: color }
          }
          return box
        })

        self.boxes = boxWithNewColor
      },
    };
  })
  .views((self) => ({
    getSelectedBoxes() {
      return self.boxes.filter((box) => box.isSelected);
    },
    getbox(id) {
      return self.boxes.find(box => box.id === id)
    },
  }));

const store = MainStore.create();

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0
});

store.addBox(box1);

export default store;
