import { observer } from 'mobx-react'
import React from 'react'

import store from 'stores/MainStore'

import Canvas from 'components/canvas'
import Toolbar from 'components/toolbar'
const App = () => (
  <div className="app">
    <Toolbar addBox={store.addBox} removeBox={store.removeBox} changeBoxColor={store.changeBoxColor} getSelectedBoxes={store.getSelectedBoxes().length} />
    <Canvas store={store} />
  </div>
)

export default observer(App)
