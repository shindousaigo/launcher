import * as React from "react";
import Grid from "src/bower/material-ui/packages/material-ui/src/Grid";
import Index from "src/components/Version";
const Grid_: any = Grid
type TipProps = {
  classes: any
  language: string
  App: Index
}
export default class Tip extends React.Component<TipProps, any, any> {

  elements: {
    LineWrapper: HTMLElement
  } = {} as any

  rotation = 0

  languagePack = {
    msg_tip_wait: {
      de: 'Laden…',
      en: 'Loading…',
      fr: 'Chargement…',
      id: 'Sedang memuat...',
      ko: '로딩 중...',
      th: 'กำลังโหลด...',
      vi: 'Đang tải…',
      zh: '加載中...',
    },
  }

  componentDidMount() {
    this.elements.LineWrapper = document.querySelector('.' + this.props.classes.tip_line_wrapper)
    this.animation()
  }

  animation = () => {
    this.rotation += 4
    this.elements.LineWrapper.style['WebkitTransform'] = this.elements.LineWrapper.style.transform = `rotate(${this.rotation}deg)`
    requestAnimationFrame((time: number) => {
      this.animation()
    })
  }

  close = () => {
    this.props.App.state.components.tip = false
    this.props.App.setState(this.props.App.state)
  }

  render() {
    return <Grid_
      style={{ height: '12.8rem' }}
      className={this.props.classes.tip_wrapper + ' tip_shin'}
      container
      alignItems="center"
      wrap="nowrap"
      direction="column"
    >
      <Grid
        style={{ marginTop: '.7rem' }}
        className={this.props.classes.tip_wrapper2}
        container
        alignItems="center"
      >
        <img className={this.props.classes.button_img} src={require('assets/oval.png')} />
        <Grid_
          className={this.props.classes.tip_line_wrapper}
          container
        >
          <img className={this.props.classes.tip_line} src={require('assets/line.png')} />
        </Grid_>
      </Grid>
      <Grid
        style={{ marginTop: '-.5rem' }}
        className={this.props.classes.tip_txt_wrapper}
        container
        wrap="wrap"
        direction="column"
        alignItems="center"
        justify="center"
      >
        {(() => {
          return this.languagePack.msg_tip_wait[this.props.language].split('\n').map(function (item, index) {
            return <div key={index} style={{
              textAlign: "center",
              width: '100%',
            }}>
              {item}
            </div>
          })
        })()}
      </Grid>
      <img style={{ top: '10.8rem' }} className={this.props.classes.tip_ok} src={require('assets/ok.png')} onClick={this.close} />
    </Grid_>
  }
}