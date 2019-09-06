import { GridProps } from "src/bower/material-ui/packages/material-ui/src/Grid/Grid"
import * as React from "react"
import * as ReactDom from "react-dom"
import CssBaseline from "src/bower/material-ui/packages/material-ui/src/CssBaseline"
import Grid from "src/bower/material-ui/packages/material-ui/src/Grid"
import { S, Px } from "../../style"
import Button from "src/components/Button"
import Dialog from "src/bower/material-ui/packages/material-ui/src/Dialog"
import DialogContent from "src/bower/material-ui/packages/material-ui/src/DialogContent"
import "src/style.scss"
import Tip from "../../TipOb1"
import { Refs } from "../../const";
import { Delay, x86 } from "src/factory/functions";
import Index from ".";
import SophixProgress from 'src/components/Progress/Sp0'
import ObbProgress from 'src/components/Progress/Ob0'
import { LanguagePack, serverExceptionCheck, exceptionCodeMap } from "./common";

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
    clickFn: null,
    languagePack: LanguagePack,
    codeMap: exceptionCodeMap,
  }

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
        <DialogContent className={`${this.props.classes.exit_app_dialog_content} DialogContent`}>
          {this.state.type && this.state.languagePack[this.state.codeMap[this.state.type]][this.props.language]}
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
  [Refs.SophixProgress]: SophixProgress
  [Refs.ObbProgress]: ObbProgress
}
export class App extends React.Component<AppProps, any, any> implements Index {

  static instance: App
  public refs: AppRefs
  constructor(props) {
    super(props)
    App.instance = this
    window.NativeToJs.downloadUpdate = (msg) => {
      const SophixProgress = this.refs[Refs.SophixProgress]
      if (msg && SophixProgress) {
        var state = {
          downloaded: Math.floor(msg.soFarBytes / 1024 / 1024) + 'M',
          total: Math.floor(msg.totalBytes / 1024 / 1024) + 'M',
          speed: !msg.speed ? 0 : msg.speed < 1024 ? msg.speed + 'Kb/s' : (msg.speed / 1024).toFixed(1) + 'M/s',
          rate: (!msg.soFarBytes || !msg.totalBytes) ? 0 : Math.floor(msg.soFarBytes / msg.totalBytes * 100)
        } as any
        if (state.rate >= 100) {
          window.overwrite.plinst({ // 安装
            isInstLocal: 0,
            obbAddr: msg.localFilePath,
            launchercls: this.props.responses.serverInitData.data.publics.launchercls
          })
          requestAnimationFrame(() => {
            this.state.components.sophixProgress = false
            this.state.components.tip = true
            this.state.components.obbProgress = true
            this.setState(this.state)
          })
          state.complete = true
          state.speed = 0
          state.downloaded = 0
          state.total = 0
          state.rate = 0
          state.isLoading = true
        }
        SophixProgress.setState(state)
        if (this.refs.catchException.state.open) {
          this.refs.catchException.state.open = false
          this.refs.catchException.setState(this.refs.catchException.state)
        }
      }
    }
    this.init()
  }

  state = {
    components: {
      tip: false,
      sophixProgress: false,
      obbProgress: false,
      catchException: {
        container: null
      },
      exitApp: {
        container: null
      },
    },
    x86: false
  }



  lachgm() {
    window.overwrite.lachgm({
      packageName: this.props.responses.serverInitData.data.publics.currentPlugPackageName,
      launchercls: this.props.responses.serverInitData.data.publics.launchercls
    })
  }

  downloadPlugPackage() {
    this.state.components.sophixProgress = true
    window.overwrite.startLoad({
      url: this.props.responses.serverInitData.data.publics.currentPlugDownloadUrl
    })
  }

  pluginInfo


  init = () => {
    if (serverExceptionCheck(this)) return
    if (!this.props.responses.serverInitData.data.isCheck) {
      if (x86(this.props.responses.nativeInitData, this.props.responses.serverInitData.data)) {
        this.state.x86 = true
      } else { // 不为提审状态
        this.pluginInfo = window.overwrite.getPlgInfo({
          packageName: this.props.responses.serverInitData.data.publics.currentPlugPackageName
        })
        if (this.pluginInfo.instplg && this.versionCheck(this.pluginInfo.instplg.versionCode, "this.pluginInfo.instplg.versionCode")) {
          this.lachgm()
        } else {
          this.obbCheck()
        }

      }

    }
  }

  versionCheck(version, log?) {
    const checkRes = version >= this.props.responses.serverInitData.data.publics.patchVersion
    return checkRes
  }

  componentDidMountList = []
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
          window.JsToNative.exitApp()
        })
      }
      catchException.state.type = 'isX86'
      catchException.setState(catchException.state)
    }

    this.state.components.exitApp.container = this.refs.catchExceptionContainer
    this.setState(this.state)
    if (this.componentDidMountList.length) {
      this.componentDidMountList.forEach(fn => {
        fn()
      })
    }
  }
  componentWillMount() {
    this.state.components.exitApp.container = this.refs.catchExceptionContainer
  }

  obbCheck() {
    if (+this.pluginInfo.isobexist) {
      if (this.versionCheck(this.props.responses.nativeInitData.versionCode, "this.props.responses.nativeInitData.versionCode")) {
        window.overwrite.plinst({ // 安装
          isInstLocal: 1,
          launchercls: this.props.responses.serverInitData.data.publics.launchercls
        })
        this.state.components.sophixProgress = false
        this.state.components.tip = true
        this.state.components.obbProgress = true
      } else {
        this.downloadPlugPackage()
      }
    } else {
      this.downloadPlugPackage()
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
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />

          {this.state.components.sophixProgress && <SophixProgress
            ref={Refs.SophixProgress}
            responses={this.props.responses}
            classes={this.props.classes}
            language={this.props.responses.nativeInitData.language}
          />}


          {this.state.components.obbProgress && <ObbProgress
            ref={Refs.ObbProgress}
            responses={this.props.responses}
            classes={this.props.classes}
            language={this.props.responses.nativeInitData.language}
            speed={0.666}
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


}

var appLauncher = document.getElementById("app-launcher")
var Main = S(App)
export default function setup(responses: AppLauncher.Init.Responses) {
  ReactDom.render(<Main responses={responses} />, appLauncher)
  return App.instance
}
