import React from 'react'
import { LinePlot } from '../components/LinePlot/LinePlot'
import Styles from './Top.module.scss'

const Top: React.VFC = () => {
  return (
    <div>
      <h2 className={Styles.text}>
        グラフ描画
      </h2>
      <LinePlot />
    </div>
  )
}

export default Top;