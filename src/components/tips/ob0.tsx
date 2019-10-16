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
    msg_tip_ob0: {
      de: 'Beim Verlassen während der Installation führt zu einem Fehler bei der Installation des Spiels so bitte behalte diese Oberfläche und warte ein paar Minuten.',
      en: 'Closing while the game is loading may result in installation errors. Please keep this interface and wait for a while.',
      fr: 'La déconnexion pendant l\'installation entraînera une erreur d\'installation du jeu. Veuillez ne pas quitter cette interface et patientez quelques minutes!',
      id: 'Closing while the game is loading may result in installation errors. Please keep this interface and wait for a while.',
      ko: '게임을 설치하는동안 로그아웃하면 오류가발생합니다. 이 인터페이스를 유지하고 몇분 기다려주세요.',
      th: 'การออกจากเกมอาจจะทำใ\nห้เกิดข้อผิดพาดในการติดตั้งตัวเกมได้\nกรุณาอยู่ในหน้านี้และรอสักครู่',
      vi: 'Thoát ra khi đang cài\nđặt sẽ dẫn đến lỗi cài đặt game\nVui lòng giữ giao diện này và chờ trong ít phút',
      zh: '中途退出可能导致游戏\n安装错误。请您保持此界面，耐心等待几分钟。',
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
    return <Grid
      className={this.props.classes.tip_wrapper + ' tip_shin'}
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
          return this.languagePack.msg_tip_ob0[this.props.language].split('\n').map(function (item, index) {
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