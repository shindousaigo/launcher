import { GridProps } from "src/bower/material-ui/packages/material-ui/src/Grid/Grid"
import * as React from "react"
import * as ReactDom from "react-dom"
import CssBaseline from "src/bower/material-ui/packages/material-ui/src/CssBaseline"
import Grid from "src/bower/material-ui/packages/material-ui/src/Grid"
import { S, Px } from "../../style"
import Button from "src/components/Button"
import Dialog from "src/bower/material-ui/packages/material-ui/src/Dialog"
import DialogContent from "src/bower/material-ui/packages/material-ui/src/DialogContent"
import SophixProgress from "src/components/Progress/Sp0"
import ObbProgress from "src/components/Progress/Ob0"
import "src/style.scss"
import Tip from "../../Tip"
import { getParameterByName } from "../../Utils";
import { Version, Refs } from "../../const";
import { Delay, x86 } from "src/factory/functions";
import Index from ".";
import Progress from 'src/components/Progress/Sp0'
import { LanguagePack } from "./common";

type WithRef = { ref?: any }

var Grid_: React.ComponentType<GridProps & WithRef> = Grid

type ExitAppProps = {
  classes: any
  container: any
  /**
  * 语言包
  */
  language: string
}

class ExitApp extends React.Component<ExitAppProps, any, any> {

  public state = {
    open: false
  }

  private languagePack = {
    mg_tip_quit: {
      de: 'Bist du sicher, das Spiel zu beenden',
      en: 'Are you sure to quit the game',
      fr: 'Êtes-vous sûr de quitter le jeu',
      id: 'Apakah Anda yakin untuk keluar dari permainan',
      ko: '게임을 종료 하시겠습니까',
      th: 'คุณแน่ใจหรือไม่ว่าจะเลิกเล่นเกม',
      vi: 'Bạn có chắc chắn thoát khỏi trò chơi không',
      zh: '确定退出游戏吗',
    }
  }

  render() {
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="xs"
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent className={this.props.classes.exit_app_dialog_content}>
          {this.languagePack.mg_tip_quit[this.props.language]}

          <Grid
            container
            justify="center"
            className={this.props.classes.index_button_wrapper}
          >

            <Button
              language={this.props.language}
              className={this.props.classes.exit_app_button}
              click={async () => {
                await Delay()
                this.setState({
                  open: false
                })
              }}
              mode="cancel"
            />

            <Button
              language={this.props.language}
              className={this.props.classes.exit_app_button}
              click={async () => {
                await Delay()
                this.setState({
                  open: false
                })
                window.JsToNative.exitApp()
              }}
              mode="confirm"
            />

          </Grid>
        </DialogContent>

      </Dialog>
    )
  }
}

type CatchExceptionProps = {
  classes: any
  container: any
  language: string
}

class CatchException extends React.Component<CatchExceptionProps, any, any> {

  constructor(props) {
    super(props)
  }

  state = {
    open: false,
    type: null,
    clickFn: null
  }

  languagePack = LanguagePack

  btnClick = async () => {
    await Delay()
    if (this.state.open) {
      this.state.open = false
      this.state.clickFn && this.state.clickFn()
      this.setState(this.state)
    }
  }

  render() {
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="xs"
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent className={this.props.classes.exit_app_dialog_content + ' DialogContent'}>
          {
            (this.state.type == '1002' && this.languagePack.mg_net_wrong[this.props.language])
            ||
            (this.state.type === 'google_play' && this.languagePack.msg_tip_googleplay[this.props.language])
            ||
            (this.state.type === 'isX86' && this.languagePack.msg_tip_isX86[this.props.language])
          }

          <Grid
            container
            justify="center"
            className={this.props.classes.index_button_wrapper}
          >
            <Button
              language={this.props.language}
              className={this.props.classes.exit_app_button}
              click={this.btnClick}
              mode="confirm"
            />
          </Grid>

        </DialogContent>

      </Dialog>
    )
  }
}

type FacebookProps = {
  link: string
  classes: any
  language: string
}

class Facebook extends React.Component<FacebookProps, any, any> {
  render() {
    return <Button
      language={this.props.language}
      className={this.props.classes.facebook}
      click={async () => {
        await Delay()
        window.open(this.props.link)
      }}
    >
      <img
        className={this.props.classes.button_img}
        src={require('assets/facebook.png')}
      />
    </Button>
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
  [Refs.Progress]: SophixProgress & ObbProgress
}
export class App extends React.Component<AppProps, any, any> implements Index {
  public refs: AppRefs
  static instance: App

  constructor(props) {
    super(props)
    App.instance = this
    window.NativeToJs.downloadUpdate = (msg) => {
      var Progress = this.refs[Refs.Progress]
      if (msg && Progress) {
        var state = {
          downloaded: Math.floor(msg.soFarBytes / 1024 / 1024) + 'M',
          total: Math.floor(msg.totalBytes / 1024 / 1024) + 'M',
          speed: !msg.speed ? 0 : msg.speed < 1024 ? msg.speed + 'Kb/s' : (msg.speed / 1024).toFixed(1) + 'M/s',
          rate: (!msg.soFarBytes || !msg.totalBytes) ? 0 : Math.floor(msg.soFarBytes / msg.totalBytes * 100)
        } as any
        if (state.rate >= 100) {
          window.currentPlugDownloadUrl = msg.localFilePath
          window.JsToNative.checkPatch(
            JSON.stringify({
              localAddr: msg.localFilePath
            })
          )
          this.state.components.tip = true
          this.setState(this.state)
          state.complete = true
          state.speed = 0
          state.downloaded = 0
          state.total = 0
          state.rate = 0
          state.isLoading = true
        }
        Progress.setState(state)
      }
    }
    this.init()
  }



  init = () => {

    // 判断是否为提审状态
    if (!this.props.responses.serverInitData.data.isCheck) { // 不为提审状态
      if (x86(this.props.responses.nativeInitData, this.props.responses.serverInitData.data)) {
        this.state.x86 = true
      } else {
        console.info("不为提审状态")
        // 判断启动器是否需要更新
        if (this.props.responses.serverInitData.data.updateWay) { // 启动器需要更新
          console.info("启动器需要更新")
          var type = this.props.responses.serverInitData.data.publics
            .currentStartType
          switch (type) {
            case '0': // 原生的模块下载
              this.startAuto()
              break
            case '1': // 跳转google play应用商店
              const exe = () => {
                if (this.refs.catchException) {
                  window.NativeToJs.catchException('google_play')
                } else {
                  requestAnimationFrame(() => {
                    exe()
                  })
                }
              }
              exe()
              break
            case '2': // 跳转web页面
              window.open(this.props.responses.serverInitData.data.publics.currentStartDownloadUrl)
              break
          }
        } else { // 启动器不需要更新
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
                this.refs.progress.state.isLoading = true
                this.refs.progress.setState(this.refs.progress.state)
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
  }

  checkplgVersion() {
    var n = this.props.responses.nativeInitData.plgVersion.split(".")
    var s = this.props.responses.serverInitData.data.publics.currentPlugVersion.split(".")
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
          this.refs.progress.state.isLoading = true
          this.refs.progress.setState(this.refs.progress.state)
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
        >
          <Grid_
            className="catch-exception-container"
            container
            alignItems="center"
            justify="center"
            ref="catchExceptionContainer"
          />

          {this.state.components.progress && <Progress
            ref={Refs.Progress}
            responses={this.props.responses}
            install={this.state.downloadComplete}
            classes={this.props.classes}
            language={this.props.responses.nativeInitData.language}
          />}


          {!this.props.responses.serverInitData.data.isCheck && (
            <Facebook
              language={this.props.responses.nativeInitData.language}
              link={this.props.responses.serverInitData.data.publics.currentStartFbPage}
              classes={this.props.classes}
            />
          )}
          {this.state.components.tip && <Tip
            classes={this.props.classes}
            language={this.props.responses.nativeInitData.language}
            App={this}
          />}
          <ExitApp
            ref="exitApp"
            language={this.props.responses.nativeInitData.language}
            container={this.state.components.exitApp.container}
            classes={this.props.classes}
          />
          <CatchException
            ref="catchException"
            language={this.props.responses.nativeInitData.language}
            container={this.state.components.exitApp.container}
            classes={this.props.classes}
          />
        </Grid>
      </React.Fragment>
    )
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
    startDownload: null,
    x86: false
  }

  componentDidMount() {

    if (this.state.x86) {
      let catchException = this.refs.catchException
      catchException.state.open = true
      catchException.state.clickFn = () => {
        catchException.state.clickFn = null
        window.open(
          this.props.responses.serverInitData.data.publics.currentStartDownPage
        )
        Delay().then(function () {
          window.JsToNative.exitApp();
        })
      }
      catchException.state.type = 'isX86'
      catchException.setState(catchException.state)
    }

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
