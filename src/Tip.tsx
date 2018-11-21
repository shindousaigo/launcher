import * as React from "react";
import Grid from "@material-ui/core/Grid";
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
      de: 'Das Spiel wird automatisch neu starten\nWenn das Spiel zu lange neu startet, bitte schloss es und startet neu',
      en: 'Automatically restarting…\nIf the game does not automatically restart for a long time, please quit the game and reopen it',
      fr: 'Lancement automatique en cours…\nSi le jeu ne se lance pas automatiquement, quittez le jeu et rouvrez-le!',
      id: 'Sedang memuat permainan secara otomatis\nJika tidak memuat permainan secara otomatis, silahkan keluar permainan dan buka kembali',
      ko: '게임 다시 자동 시작 중\n게임을 다시 자동시작하지 않은 경우 게임을 종료 한 후 다시 접속하십시오',
      th: 'กำลังเปิดเกมโดยอัตโนมัติ\nหากรอนานแล้วแต่ยังไม่เปิดเกม กรุณาออกเกมเข้าใหม่',
      vi: 'Đang tự động khởi động game.\nNếu quá lâu vẫn chưa tự động khởi động game, vui lòng thoát game sau đó mở lại',
      zh: '游戏正在自动重启\n如果长时间未自动重启游戏，请退出游戏，再重新打开',
    },
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
        <img className={this.props.classes.button_img} src={require('assets/oval.png')} />
        <Grid_
          className={this.props.classes.tip_line_wrapper}
          container
        >
          <img className={this.props.classes.tip_line} src={require('assets/line.png')} />
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

      <img className={this.props.classes.tip_ok} src={require('assets/ok.png')} onClick={this.close} />

    </Grid>
  }
}