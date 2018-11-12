import I18n from "./i18n";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { App } from "src";
import Button from "@material-ui/core/Button";

const Grid_: any = Grid
type TipProps = {
  classes: any
  responses: AppLauncher.Init.Responses
  App: App
}
export default class Tip extends React.Component<TipProps, any, any> {

  elements: {
    LineWrapper: HTMLElement
  } = {} as any

  rotation = 0

  state = {
    text: {
      wait: I18n[this.props.responses.nativeInitData.language].msg_tip_wait,
    }
  }

  componentDidMount() {
    this.elements.LineWrapper = document.querySelector('.' + this.props.classes.tip_line_wrapper)
    this.animation()
  }

  animation = () => {
    this.rotation += 4
    this.elements.LineWrapper.style.webkitTransform = this.elements.LineWrapper.style.transform = `rotate(${this.rotation}deg)`
    requestAnimationFrame((time: number) => {
      this.animation()
    })
  }

  close = () => {
    this.props.App.state.components.tip = false
    this.props.App.setState(this.props.App.state)
  }

  render() {
    return <Grid
      className={this.props.classes.tip_wrapper}
      container
      alignItems="center"
      wrap="nowrap"
      direction="column"
    >
      <Grid
        className={this.props.classes.tip_wrapper2}
        container
        alignItems="center"
      >
        <img className={this.props.classes.button_img} src={require('../assets/oval.png')} />
        <Grid_
          className={this.props.classes.tip_line_wrapper}
          container
        >
          <img className={this.props.classes.tip_line} src={require('../assets/line.png')} />
        </Grid_>
      </Grid>

      <Grid
        className={this.props.classes.tip_txt_wrapper}
        container
        wrap="wrap"
        direction="column"
        alignItems="center"
        justify="center"
      >
        {(() => {
          return this.state.text.wait.split('\n').map(function (item, index) {
            return <div key={index} style={{
              textAlign: "center",
              width: '100%',
            }}>
              {item}
            </div>
          })
        })()}
      </Grid>

      <img className={this.props.classes.tip_ok} src={require('../assets/ok.png')} onClick={this.close} />



    </Grid>
  }
}