import { GridProps } from "src/bower/material-ui/packages/material-ui/src/Grid/Grid"
import * as React from 'react'
import * as ReactDom from 'react-dom'
import CssBaseline from 'src/bower/material-ui/packages/material-ui/src/CssBaseline';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid'
import { S, Px } from "../../style"
import Button from "src/components/Button"
import LinearProgress from 'src/bower/material-ui/packages/material-ui/src/LinearProgress';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import { Refs } from "src/const";
import Progress from 'src/components/Progress/Va0'
import { x86 } from "src/factory/functions";
import { LanguagePack } from "./common";

type WithRef = { ref?: any }

var Grid_: React.ComponentType<GridProps & WithRef> = Grid

LinearProgress.prototype.componentDidUpdate = function () {
  var linearProgress = document.querySelector('.linearProgress')
  if (linearProgress) {
    linearProgress.childNodes[0]['style'].WebkitTransform = linearProgress.childNodes[0]['style'].transform
  }
}

function Delay(times?) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, times ? times * 500 : 500)
  })
}

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
        // className={this.props.classes.exit_app_wrapper + ' exit_app_wrapper'}
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent className={this.props.classes.exit_app_dialog_content}>
          {this.languagePack.mg_tip_quit[this.props.language]}

          <Grid
            container
            justify="center"
            // style={{
            //   margin: '-.5rem 0 ' + Px(40) + ' 0',
            // }}
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
        // className={this.props.classes.exit_app_dialog_content + ' DialogContent'}
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
            // style={{
            //   margin: '-.5rem 0 ' + Px(40) + ' 0',
            // }}
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
      </Dialog >
    )
  }
}

/**
class Progress extends React.Component<{
  classes: any
  responses: AppLauncher.Init.Responses
  install: Function
  language: string
}, any, any> {

  constructor(props) {
    super(props)
  }

  private languagePack = {
    mg_txt_status_tip: {
      de: 'Sollte wifi zum Herunterladen verbinden',
      en: 'Download with Wifi network is recommended',
      fr: 'Il faut se connecter à un réseau WiFi pour télécharger',
      id: 'Silahkan sambungkan wifi untuk mengunduh',
      ko: '다운로드하려면',
      th: 'แนะนำใช้ไวไฟในการดาวน์โหลด',
      vi: 'Nên kết nối wifi để tải',
      zh: '推荐在wifi网络加载',
    },
    mg_tip_question: {
      de: 'Wenn Sie Probleme beim Herunterladen von Spielen haben,',
      en: 'If you have any problem in downloading,',
      fr: 'Si vous avez des problèmes lors du téléchargement de votre jeu,',
      id: 'Jika ada masalah ketika mengunduh game,',
      ko: '게임 다운로드에 문제가 있는 경우,',
      th: 'ถ้าพบปัญหาเวลาโหลดเกม,',
      vi: 'Nếu gặp vấn đề khi tải game,',
      zh: '如果加载遇到问题，',
    },
    mg_tip_question2: {
      de: 'Fehler bei der Herunterladung der Quelle,',
      en: 'Have problems when loading resource,',
      fr: 'Problèmes de téléchargement de ressources,',
      id: 'Bermasalah ketika mengunduh sumber daya,',
      ko: '자원 다운로드 문제 발생,',
      th: 'พบปัญหาเมื่อโหลดข้อมูล,',
      vi: 'Gặp vấn đề khi tải tài nguyên,',
      zh: '资源加载遇到问题，',
    },
    mg_tip_press: {
      de: 'Klicken Sie hier',
      en: 'Please tap here',
      fr: 'Cliquez ici',
      id: 'Silakan klik di sini',
      ko: '여기를 클릭하세요',
      th: 'กดที่นี่',
      vi: 'Hãy nhấp đây',
      zh: '请点击这里',
    },
    msg_tip_launch: {
      de: 'Spieldata wird heruntergeladen',
      en: 'Loading game data',
      fr: 'Chargement en cours!',
      id: 'Sedang unduh data game',
      ko: '게임 데이터 로딩',
      th: 'กำลังโหลดดาตาเกม',
      vi: 'Đang tải số liệu game',
      zh: '正在读取游戏数据',
    },
  }

  state = {
    speed: 0,
    downloaded: 0,
    total: 0,
    rate: 0,
    complete: false,
    error_resource: false,
    isLoading: false
  }

  render() {
    var { progress, ing, linearProgress, downloaded, adapter } = this.props.classes
    return <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="center"
      className={progress}
    >
      <div
        style={{
          fontSize: '1rem',
          background: 'rgba(255,255,255,.3)',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '.6rem',
          padding: '.3rem .5rem',
          fontWeight: 'bold'
        }}
      >
        <span
          style={{
            marginTop: '0.2rem',
            color: 'rgb(252, 231, 72)',
          }}
        >{this.state.error_resource ? this.languagePack.mg_tip_question2[this.props.language] : this.languagePack.mg_tip_question[this.props.language]}</span>
        <a style={{
          marginTop: '0.2rem',
          border: 0,
          outline: 'none'
        }} className={this.state.error_resource ? 'shake active' : 'shake'} href={this.props.responses.serverInitData.data.publics.currentStartDownPage} target="_blank">
          {this.languagePack.mg_tip_press[this.props.language]}
        </a>
      </div>

      {
        this.state.complete ?
          <Grid container justify="center"
            alignItems="center"
            className={ing} style={{
              height: 50 / 13.34 / 2 + 'rem',
            }}>
            <LinearProgress style={{
              width: '100%',
              height: 50 / 13.34 / 2 + 'rem',
            }} />
          </Grid>
          :
          <Grid container justify="center"
            className={ing}
          >
            <LinearProgress style={{
              width: '100%',
              height: 50 / 13.34 / 2 + 'rem',
            }} className={linearProgress + ' linearProgress'} variant="determinate" value={this.state.rate} />
            <Grid container justify="center"
              alignItems="center" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0
              }}>
              <div className="speed" style={{ marginTop: '0.2rem' }}>{this.state.speed}</div>
              <div style={{
                width: '2px',
                background: '#fff',
                height: '1rem',
                margin: '0 0.7rem 0 0.7rem',
              }}></div>
              <div className={downloaded} style={{ marginTop: '0.2rem' }}>{this.state.downloaded}</div>
              <div style={{
                margin: '0 0.2rem',
              }}>/</div>
              <div className="total" style={{ marginTop: '0.2rem' }}>{this.state.total}</div>
            </Grid>
          </Grid>
      }
      <div className="udder-txt" style={{
        fontSize: 48 / 13.34 / 5 + 'rem',
        color: '#fff',
        margin: '0.35982rem 0px 0.4rem',
      }}>
        {this.languagePack.mg_txt_status_tip[this.props.language]}
      </div>
    </Grid >
  }
}

 */


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


export class App extends React.Component<{
  responses: AppLauncher.Init.Responses,
  classes: any
}, any, any> {

  public refs: {
    exitApp: ExitApp
    catchException: CatchException
    catchExceptionContainer: Element
    progress: Progress
  }

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
        }
        if (state.rate >= 100) {
          // this.setState(state)
          Progress.props.install(msg.localFilePath)
          // await Delay(2)
          Progress.state.complete = true
          Progress.state.speed = 0
          Progress.state.downloaded = 0
          Progress.state.total = 0
          Progress.state.rate = 0
          Progress.state.isLoading = true
        }
        Progress.setState(state)
      }
    }
    this.init()
  }

  state = {
    components: {
      progress: false,
      catchException: {
        container: null,
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

  init = () => {

    // 判断是否为提审状态
    if (this.props.responses.serverInitData.data.isCheck) { // 为提审状态 跳转至静态页面
      console.info('为提审状态')
    } else { // 不为提审状态
      if (x86(this.props.responses.nativeInitData, this.props.responses.serverInitData.data)) {
        this.state.x86 = true
      } else {
        console.info('不为提审状态')
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
          console.info('启动器不需要更新')
          // var { isX86 } = this.props.responses.nativeInitData
          if (!this.props.responses.nativeInitData.plgVersion || this.checkplgVersion() || !window.overwrite.checkVaStatus({
            packageName: this.props.responses.serverInitData.data.publics.currentPlugPackageName
          })) {
            this.pluginAuto()
          } else {
            window.overwrite.lachgm({
              packageName: this.props.responses.serverInitData.data.publics.currentPlugPackageName
            })
          }
        }
      }
    }
  }

  checkplgVersion() {
    var n = this.props.responses.nativeInitData.plgVersion.split('.')
    var s = this.props.responses.serverInitData.data.publics.currentPlugVersion.split('.')
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
    console.info('开始下载启动器')
    this.state.components.progress = true
    var url = this.props.responses.serverInitData.data.downloadUrl
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      })
    }
    this.state.downloadComplete = function () { // 安装启动器
      window.overwrite.replinst({
        localAddr: url
      })
    }
    this.state.startDownload()
  }

  replaceAuto() {
    console.info('开始下载替换包')
    this.state.components.progress = true
    this.refs.progress && (this.refs.progress.state.complete = false);
    var url = this.props.responses.serverInitData.data.publics.currentPlugRplDownloadUrl
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      })
    }
    this.state.downloadComplete = function (url) { // 安装替换包
      window.overwrite.replinst({
        localAddr: url
      })
    }
    this.state.startDownload()
  }

  pluginAuto() {
    console.info('开始下载插件包')
    this.state.components.progress = true
    var url = this.props.responses.serverInitData.data.publics.currentPlugDownloadUrl
    var packageName = this.props.responses.serverInitData.data.publics.currentPlugPackageName
    var plgVersion = this.props.responses.serverInitData.data.publics.currentPlugVersion
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      })
    }
    this.state.downloadComplete = function (url) { // 安装插件包
      window.overwrite.plinst({
        localAddr: url,
        packageName,
        plgVersion
      })
    }
    this.state.startDownload()
  }

  render() {
    var { wrapper } = this.props.classes
    return <React.Fragment>
      <CssBaseline />
      <Grid container className={wrapper} style={{ background: `url("${this.props.responses.serverInitData.data.isCheck ? this.props.responses.serverInitData.data.currentTrialPhoto : this.props.responses.serverInitData.data.publics.currentPhoto}") 0% 0% / contain` }}>
        <Grid_
          className="catch-exception-container"
          container
          alignItems="center"
          justify="center"
          ref="catchExceptionContainer"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
        </Grid_>
        {this.state.components.progress && <Progress
          ref={Refs.Progress}
          responses={this.props.responses}
          install={this.state.downloadComplete}
          classes={this.props.classes}
          language={this.props.responses.nativeInitData.language}
        />}
        {!this.props.responses.serverInitData.data.isCheck && <Facebook
          language={this.props.responses.nativeInitData.language}
          link={this.props.responses.serverInitData.data.publics.currentStartFbPage}
          classes={this.props.classes}
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

    // this.state.components.catchException.container = this.refs.catchExceptionContainer
    this.state.components.exitApp.container = this.refs.catchExceptionContainer
    this.setState(this.state)
  }

}

var appLauncher = document.getElementById('app-launcher')
var Main = S(App)
export default function setup(responses: AppLauncher.Init.Responses) {
  ReactDom.render(<Main responses={responses} />, appLauncher);
  return App.instance
}

