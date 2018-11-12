import { GridProps } from "@material-ui/core/Grid/Grid"
import * as React from "react"
import * as ReactDom from "react-dom"
import I18n from "./i18n"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { S, Px } from "./style"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import Progress from "./Progress"
import "./style.scss"
import Tip from "./Tip"

type WithRef = { ref?: any }

var Grid_: React.ComponentType<GridProps & WithRef> = Grid

function Delay(times?) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, times ? times * 500 : 500)
  })
}


class ExitApp extends React.Component<any, any, any> {

  state = {
    open: false
  }

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language]
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="md"
        className={this.props.classes.exit_app_wrapper + ' exit_app_wrapper'}
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent className={this.props.classes.exit_app_dialog_content}>
          {i18n.mg_tip_quit}
        </DialogContent>
        <Grid
          container
          justify="center"
          style={{
            margin: '-.5rem 0 ' + Px(40) + ' 0',
          }}
          className="index_button_wrapper"
        >
          <Button
            variant="contained"
            size="medium"
            className={this.props.classes.exit_app_button}
            onClick={async () => {
              await Delay()
              this.setState({
                open: false
              })
            }}
          >
            {i18n.mg_txt_cancel}
          </Button>
          <Button
            variant="contained"
            size="medium"
            className={this.props.classes.exit_app_button}
            onClick={async () => {
              await Delay()
              this.setState({
                open: false
              })
              window.JsToNative.exitApp()
            }}
          >
            {i18n.mg_txt_confirm}
          </Button>
        </Grid>
      </Dialog>
    )
  }
}

class CatchException extends React.Component<any, any, any> {
  constructor(props) {
    super(props)
  }

  state = {
    open: false,
    msg: ""
  }

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language]
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="md"
        className={this.props.classes.exit_app_wrapper + ' exit_app_wrapper'}
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent className={this.props.classes.exit_app_dialog_content}>
          {this.state.msg}
        </DialogContent>
        <Grid
          container
          justify="center"
          style={{
            margin: '-.5rem 0 ' + Px(40) + ' 0',
          }}
          className="index_button_wrapper"
        >
          <Button
            variant="contained"
            size="medium"
            className={this.props.classes.exit_app_button}
            onClick={async () => {
              await Delay()
              this.state.open = false
              this.setState(this.state)
            }}
          >
            {i18n.mg_txt_confirm}
          </Button>
        </Grid>
      </Dialog>
    )
  }
}

type FacebookProps = {
  link: string
  classes: any
}
class Facebook extends React.Component<FacebookProps, any, any> {
  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        className={this.props.classes.facebook}
        onClick={async () => {
          await Delay()
          window.open(this.props.link)
        }}
      >
        <img
          className={this.props.classes.button_img}
          src={require('../assets/facebook.png')}
        />
      </Button>
    )
  }
}

type AppProps = {
  responses: AppLauncher.Init.Responses
  classes: any
}
type AppRefs = {
  exitApp: ExitApp
  catchException: CatchException
  catchExceptionContainer: Element
  progress: Progress
}
export class App extends React.Component<AppProps, any, any> {
  public refs: AppRefs
  static instance: App
  constructor(props) {
    super(props)
    App.instance = this
    this.init()
  }

  state = {
    components: {
      progress: false,
      catchException: {
        container: null
      },
      exitApp: {
        container: null
      },
      tip: false
    },
    downloadComplete: null,
    startDownload: null
  }

  init = () => {
    /**
     * 判断是否为提审状态
     */
    if (this.props.responses.serverInitData.data.isCheck) {
      // 为提审状态 跳转至静态页面
      console.info("为提审状态")
    } else {
      // 不为提审状态
      console.info("不为提审状态")
      /**
       * 判断启动器是否需要更新
       */
      if (this.props.responses.serverInitData.data.updateWay) {
        // 启动器需要更新
        console.info("启动器需要更新")
        var type = this.props.responses.serverInitData.data.publics
          .currentStartType
        switch (type) {
          case 0: // 原生的模块下载
            this.startAuto()
            break
          case 1: // 跳转 google play 应用商店 ?
            console.info("跳转 google play")
            break
          case 2: // 跳转web页面
            console.info("跳转web页面")
            window.open(
              this.props.responses.serverInitData.data.publics
                .currentStartDownloadUrl
            )
            break
        }
      } else {
        // 启动器不需要更新
        console.info("启动器不需要更新")
        if (
          !this.props.responses.nativeInitData.plgVersion ||
          this.checkplgVersion() ||
          !window.overwrite.checkVaStatus({
            packageName: this.props.responses.serverInitData.data.publics
              .currentPlugPackageName
          })
        ) {
          this.pluginAuto()
        } else {
          this.state.components.progress = true
          this.setState(this.state)
          const exe = () => {
            if (this.refs.progress) {

              this.refs.progress.state.complete = true
              this.refs.progress.state.speed = 0
              this.refs.progress.state.downloaded = 0
              this.refs.progress.state.total = 0
              this.refs.progress.state.rate = 0
              var dot = ' '
              this.refs.progress.state.udder = I18n[this.props.responses.nativeInitData.language].msg_tip_launch
              this.refs.progress.setState(this.refs.progress.state)

              setInterval(() => {
                dot += '.'
                if (dot === ' .....') dot = ' '
                this.refs.progress.state.udder = I18n[this.props.responses.nativeInitData.language].msg_tip_launch + dot
                this.refs.progress.setState(this.refs.progress.state)
              }, 500)
            } else {
              requestAnimationFrame(() => {
                exe()
              })
            }

          }
          exe()
          window.overwrite.lachgm({
            packageName: this.props.responses.serverInitData.data.publics
              .currentPlugPackageName
          })
        }
      }
    }
  }

  checkplgVersion() {
    var n = this.props.responses.nativeInitData.plgVersion.split(".")
    var s = this.props.responses.serverInitData.data.publics.currentPlugVersion.split(
      "."
    )
    var r = false
    if (n.length === s.length) {
      for (var i = 0; i < n.length; i++) {
        if (n[i] > s[i]) {
          break
        }
        if (n[i] < s[i]) {
          r = true
        }
      }
    } else {
      r = true
    }
    return r
  }

  startAuto() {
    console.info("开始下载启动器")
    this.state.components.progress = true
    var url = this.props.responses.serverInitData.data.downloadUrl
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      })
    }
    this.state.downloadComplete = function () {
      // 安装启动器
      window.overwrite.replinst({
        localAddr: url
      })
    }
    this.state.startDownload()
  }

  replaceAuto() {
    console.info("开始下载替换包")
    this.state.components.progress = true
    this.refs.progress && (this.refs.progress.state.complete = false)
    var url = this.props.responses.serverInitData.data.publics
      .currentPlugRplDownloadUrl
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      })
    }
    this.state.downloadComplete = function (url) {
      // 安装替换包
      window.overwrite.replinst({
        localAddr: url
      })
    }
    this.state.startDownload()
  }

  pluginAuto() {
    window.currentPlugPackageName = this.props.responses.serverInitData.data.publics.currentPlugPackageName
    window.currentPlugVersion = this.props.responses.serverInitData.data.publics.currentPlugVersion
    window.currentPlugDownloadUrl = this.props.responses.serverInitData.data.publics.currentPlugDownloadUrl

    this.state.components.progress = true
    if (this.props.responses.nativeInitData.localAddr) { // 不需要补丁


      const exe = () => {
        if (this.refs.progress) {
          this.refs.progress.state.complete = true
          this.refs.progress.state.speed = 0
          this.refs.progress.state.downloaded = 0
          this.refs.progress.state.total = 0
          this.refs.progress.state.rate = 0
          var dot = ' '
          this.refs.progress.state.udder = I18n[this.props.responses.nativeInitData.language].msg_tip_launch
          this.refs.progress.setState(this.refs.progress.state)
          setInterval(() => {
            dot += '.'
            if (dot === ' .....') dot = ' '
            this.refs.progress.state.udder = I18n[this.props.responses.nativeInitData.language].msg_tip_launch + dot
            this.refs.progress.setState(this.refs.progress.state)
          }, 500)
        } else {
          requestAnimationFrame(() => {
            exe()
          })
        }
      }
      exe()




      window.currentPlugDownloadUrl = this.props.responses.nativeInitData.localAddr
      console.info('开始安装插件包')
      window.overwrite.plinst({
        localAddr: window.currentPlugDownloadUrl,
        packageName: window.currentPlugPackageName,
        plgVersion: window.currentPlugVersion
      })
    } else { // 先下载插件包
      this.state.startDownload = function () {
        window.overwrite.startLoad({
          url: window.currentPlugDownloadUrl
        })
      }
      this.state.downloadComplete = function (url) { // 插件包下载完成
        window.currentPlugDownloadUrl = url
        window.JsToNative.checkPatch(
          JSON.stringify({
            localAddr: url
          })
        )
      }
      console.info('开始下载插件包')
      this.state.startDownload()
    }
  }

  render() {
    var { wrapper } = this.props.classes
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid
          container
          className={wrapper}
          style={{
            background: `url("${
              this.props.responses.serverInitData.data.isCheck
                ? this.props.responses.serverInitData.data.currentTrialPhoto
                : this.props.responses.serverInitData.data.publics.currentPhoto
              }") 0% 0% / contain`
          }}
        >
          <Grid_
            className="catch-exception-container"
            container
            alignItems="center"
            justify="center"
            ref="catchExceptionContainer"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />

          {this.state.components.progress && (
            <Progress
              ref="progress"
              responses={this.props.responses}
              install={this.state.downloadComplete}
              classes={this.props.classes}
            />
          )}
          {!this.props.responses.serverInitData.data.isCheck && (
            <Facebook
              link={this.props.responses.serverInitData.data.publics.currentStartFbPage}
              classes={this.props.classes}
            />
          )}
          {this.state.components.tip && <Tip
            classes={this.props.classes}
            responses={this.props.responses}
            App={this}
          />}
          <ExitApp
            ref="exitApp"
            responses={this.props.responses}
            container={this.state.components.exitApp.container}
            classes={this.props.classes}
          />
          <CatchException
            ref="catchException"
            responses={this.props.responses}
            container={this.state.components.exitApp.container}
            classes={this.props.classes}
          />
        </Grid>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.state.components.exitApp.container = this.refs.catchExceptionContainer
    this.setState(this.state)
  }
}

var appLauncher = document.getElementById("app-launcher")
var Main = S(App)
export default function setup(responses: AppLauncher.Init.Responses) {
  ReactDom.render(<Main responses={responses} />, appLauncher)
  return App.instance
}
