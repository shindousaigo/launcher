/// <reference path="./index.d.ts" />

import { GridProps } from "@material-ui/core/Grid/Grid";
import * as React from "react";
import * as ReactDom from "react-dom";
import I18n from "./i18n";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { S } from "./style.js";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import "./style.scss";

type WithRef = { ref?: any };

var Grid_: React.ComponentType<GridProps & WithRef> = Grid;

LinearProgress.prototype.componentDidUpdate = function () {
  var linearProgress = document.querySelector(".linearProgress");
  if (linearProgress) {
    linearProgress.childNodes[0]["style"].webkitTransform =
      linearProgress.childNodes[0]["style"].transform;
  }
};

function Delay(times?) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, times ? times * 500 : 500);
  });
}

class ExitApp extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
  }

  state = {
    open: false
  };

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language];
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="md"
        style={{
          width: "24rem",
          margin: "0 auto"
        }}
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent
          style={{
            fontSize: 36 / 13.34 / 2 + "rem",
            textAlign: "center",
            margin: ".5rem 0"
          }}
        >
          {i18n.mg_tip_quit}
        </DialogContent>
        <Grid
          container
          justify="center"
          style={{
            marginBottom: 40 / 13.34 / 2 + "rem"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{
              marginRight: "0.9rem",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
            onClick={async () => {
              await Delay();
              this.setState({
                open: false
              });
            }}
          >
            {i18n.mg_txt_cancel}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{
              marginLeft: "0.9rem",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
            onClick={async () => {
              await Delay();
              this.setState({
                open: false
              });
              window.JsToNative.exitApp();
            }}
          >
            {i18n.mg_txt_confirm}
          </Button>
        </Grid>
      </Dialog>
    );
  }
}

class CatchException extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
    msg: ""
  };

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language];
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        maxWidth="md"
        style={{
          width: "26rem",
          margin: "0 auto"
        }}
        open={this.state.open}
        container={this.props.container}
      >
        <DialogContent
          style={{
            fontSize: 36 / 13.34 / 2 + "rem"
          }}
        >
          {this.state.msg}
        </DialogContent>
        <Grid
          container
          justify="center"
          style={{
            marginBottom: 30 / 13.34 / 2 + "rem"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={async () => {
              await Delay();
              this.state.open = false;
              this.setState(this.state);
            }}
          >
            {i18n.mg_txt_confirm}
          </Button>
        </Grid>
      </Dialog>
    );
  }
}

class Progress extends React.Component<
  {
    classes: any;
    responses: AppLauncher.Init.Responses;
    install: Function;
  },
  any,
  any
  > {
  constructor(props) {
    super(props);
  }

  state = {
    speed: 0,
    downloaded: 0,
    total: 0,
    rate: 0,
    complete: this.props.responses.nativeInitData.localAddr ? true : false,
    udder: I18n[this.props.responses.nativeInitData.language].mg_txt_status_tip,
    is1001: false
  };

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language];
    var {
      progress,
      ing,
      linearProgress,
      downloaded,
      adapter
    } = this.props.classes;
    return (
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="center"
        className={progress}
      >
        <div
          style={{
            fontSize: "1rem",
            background: "rgba(255,255,255,.3)",
            display: "flex",
            alignItems: "center",
            marginBottom: ".6rem",
            padding: ".3rem .5rem",
            fontWeight: "bold"
          }}
        >
          <span
            style={{
              marginTop: "0.2rem",
              color: "rgb(252, 231, 72)"
            }}
          >
            {this.state.is1001 ? i18n.mg_tip_question2 : i18n.mg_tip_question}
          </span>
          <a
            style={{
              marginTop: "0.2rem",
              border: 0,
              outline: "none"
            }}
            className={this.state.is1001 ? "shake active" : "shake"}
            href={
              this.props.responses.serverInitData.data.publics
                .currentStartDownPage
            }
            target="_blank"
          >
            {i18n.mg_tip_press}
          </a>
        </div>

        {this.state.complete ? (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={ing}
            style={{
              height: 50 / 13.34 / 2 + "rem"
            }}
          >
            <LinearProgress
              style={{
                width: "100%",
                height: 50 / 13.34 / 2 + "rem"
              }}
            />
          </Grid>
        ) : (
            <Grid container justify="center" className={ing}>
              <LinearProgress
                style={{
                  width: "100%",
                  height: 50 / 13.34 / 2 + "rem"
                }}
                className={linearProgress + " linearProgress"}
                variant="determinate"
                value={this.state.rate}
              />
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: 0
                }}
              >
                <div className="speed" style={{ marginTop: "0.2rem" }}>
                  {this.state.speed}
                </div>
                <div
                  style={{
                    width: "2px",
                    background: "#fff",
                    height: "1rem",
                    margin: "0 0.7rem 0 0.7rem"
                  }}
                />
                <div className={downloaded} style={{ marginTop: "0.2rem" }}>
                  {this.state.downloaded}
                </div>
                <div
                  style={{
                    // width: '0.14rem',
                    // background: '#fff',
                    // height: '1rem',
                    margin: "0 0.2rem"
                  }}
                >
                  /
              </div>
                <div className="total" style={{ marginTop: "0.2rem" }}>
                  {this.state.total}
                </div>
              </Grid>
            </Grid>
          )}
        <div
          className="udder-txt"
          style={{
            fontSize: 48 / 13.34 / 5 + "rem",
            color: "#fff",
            margin: "0.35982rem 0px 0.4rem"
          }}
        >
          {this.state.udder}
        </div>
      </Grid>
    );
  }
}

class Facebook extends React.Component<
  {
    link: string;
    classes: any;
  },
  any,
  any
  > {
  render() {
    var { facebook } = this.props.classes;
    return (
      <Button
        variant="contained"
        color="primary"
        className={facebook}
        onClick={async () => {
          await Delay();
          window.open(this.props.link);
        }}
      >
        <span>Facebook</span>
      </Button>
    );
  }
}

export class App extends React.Component<
  {
    responses: AppLauncher.Init.Responses;
    classes: any;
  },
  any,
  any
  > {
  public refs: {
    exitApp: ExitApp;
    catchException: CatchException;
    catchExceptionContainer: Element;
    progress: Progress;
  };

  static instance: App;

  constructor(props) {
    super(props);
    App.instance = this;
    this.init();
  }

  state = {
    components: {
      progress: false,
      catchException: {
        container: null
      },
      exitApp: {
        container: null
      }
    },
    downloadComplete: null,
    startDownload: null
  };

  init = () => {
    /**
     * 判断是否为提审状态
     */
    if (this.props.responses.serverInitData.data.isCheck) {
      // 为提审状态 跳转至静态页面
      console.info("为提审状态");
    } else {
      // 不为提审状态
      console.info("不为提审状态");
      /**
       * 判断启动器是否需要更新
       */
      if (this.props.responses.serverInitData.data.updateWay) {
        // 启动器需要更新
        console.info("启动器需要更新");
        var type = this.props.responses.serverInitData.data.publics
          .currentStartType;
        switch (type) {
          case 0: // 原生的模块下载
            this.startAuto();
            break;
          case 1: // 跳转 google play 应用商店 ?
            console.info("跳转 google play");
            break;
          case 2: // 跳转web页面
            console.info("跳转web页面");
            window.open(
              this.props.responses.serverInitData.data.publics
                .currentStartDownloadUrl
            );
            break;
        }
      } else {
        // 启动器不需要更新
        console.info("启动器不需要更新");
        // var { isX86 } = this.props.responses.nativeInitData
        if (
          !this.props.responses.nativeInitData.plgVersion ||
          this.checkplgVersion() ||
          !window.overwrite.checkVaStatus({
            packageName: this.props.responses.serverInitData.data.publics
              .currentPlugPackageName
          })
        ) {
          this.pluginAuto();
        } else {
          window.overwrite.lachgm({
            packageName: this.props.responses.serverInitData.data.publics
              .currentPlugPackageName
          });
        }
      }
    }
  };

  checkplgVersion() {
    var n = this.props.responses.nativeInitData.plgVersion.split(".");
    var s = this.props.responses.serverInitData.data.publics.currentPlugVersion.split(
      "."
    );
    var r = false;
    if (n.length === s.length) {
      for (var i = 0; i < n.length; i++) {
        if (n[i] > s[i]) {
          break;
        }
        if (n[i] < s[i]) {
          r = true;
        }
      }
    } else {
      r = true;
    }
    return r;
  }

  startAuto() {
    console.info("开始下载启动器");
    this.state.components.progress = true;
    var url = this.props.responses.serverInitData.data.downloadUrl;
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      });
    };
    this.state.downloadComplete = function () {
      // 安装启动器
      window.overwrite.replinst({
        localAddr: url
      });
    };
    this.state.startDownload();
  }

  replaceAuto() {
    console.info("开始下载替换包");
    this.state.components.progress = true;
    this.refs.progress && (this.refs.progress.state.complete = false);
    var url = this.props.responses.serverInitData.data.publics
      .currentPlugRplDownloadUrl;
    this.state.startDownload = function () {
      window.overwrite.startLoad({
        url
      });
    };
    this.state.downloadComplete = function (url) {
      // 安装替换包
      window.overwrite.replinst({
        localAddr: url
      });
    };
    this.state.startDownload();
  }

  pluginAuto() {
    window.currentPlugPackageName = this.props.responses.serverInitData.data.publics.currentPlugPackageName
    window.currentPlugVersion = this.props.responses.serverInitData.data.publics.currentPlugVersion
    window.currentPlugDownloadUrl = this.props.responses.serverInitData.data.publics.currentPlugDownloadUrl

    this.state.components.progress = true
    if (this.props.responses.nativeInitData.localAddr) { // 不需要补丁
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
    var { wrapper } = this.props.classes;
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
              link={
                this.props.responses.serverInitData.data.publics
                  .currentStartFbPage
              }
              classes={this.props.classes}
            />
          )}
          <ExitApp
            ref="exitApp"
            responses={this.props.responses}
            container={this.state.components.exitApp.container}
          />
          <CatchException
            ref="catchException"
            responses={this.props.responses}
            container={this.state.components.exitApp.container}
          />
        </Grid>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.state.components.catchException.container = this.refs.catchExceptionContainer;
    this.state.components.exitApp.container = this.refs.catchExceptionContainer;
    this.setState(this.state);
  }
}

var appLauncher = document.getElementById("app-launcher");
var Main = S(App);
export default function setup(responses: AppLauncher.Init.Responses) {
  ReactDom.render(<Main responses={responses} />, appLauncher);
  return App.instance;
}
