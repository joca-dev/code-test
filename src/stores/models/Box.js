import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#FFF000",
    left: 200,
    top: 100,
    isSelected: false,
  })
  .actions((self) => ({
    select() {
      self.isSelected = true;
    },
    deselect() {
      self.isSelected = false;
    },
    setColor(color) {
      self.color = color;
    },
    toggle() {
      self.isSelected = !self.isSelected;
    },
    setLeft(left) {
      self.left = left
    },
    setTop(top) {
      self.top = top
    }

  }));

export default BoxModel;
