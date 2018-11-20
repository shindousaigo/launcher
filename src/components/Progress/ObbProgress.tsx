import I18n from "../../i18n";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

// LinearProgress.prototype.componentDidUpdate = function () {
//   var linearProgress = document.querySelector(".linearProgress");
//   if (linearProgress) {
//     linearProgress.childNodes[0]["style"].webkitTransform =
//       linearProgress.childNodes[0]["style"].transform;
//   }
// };

type ProgressProps = {
  classes: any
  responses: AppLauncher.Init.Responses
  install: Function
}
export default class ObbProgress extends React.Component<ProgressProps, any, any> {

  state = {
    rate: 0,
    complete: this.props.responses.nativeInitData.localAddr ? true : false,
    udder: I18n[this.props.responses.nativeInitData.language].mg_txt_status_tip,
    is1001: false
  }

  interval

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.progressing()
    this.interval = setInterval(() => {
      this.progressing()
    }, 1000)
  }

  progressing() {
    this.state.rate = this.state.rate + Math.random() * 1.2
    if (this.state.rate >= 99) {
      this.state.rate = 99
      clearInterval(this.interval)
    } else {
      this.state.rate = Number(this.state.rate.toFixed(1))
    }
    this.setState(this.state)
  }

  render() {
    var i18n = I18n[this.props.responses.nativeInitData.language];
    var {
      progress,
      ing,
      up,
      yellow,
      bbb,
      _05
    } = this.props.classes;
    return (
      <Grid
        container
        direction="column"
        className={progress}
      >
        <Grid
          container
          direction="row"
          justify="center"
          className={_05}
        >
          <div className={up + ' ' + yellow}>
            {this.state.is1001 ? i18n.mg_tip_question2 : i18n.mg_tip_question}
          </div>
          <a
            className={up + ' ' + bbb + (this.state.is1001 ? " shake active" : " shake")}
            href={this.props.responses.serverInitData.data.publics.currentStartDownPage}
            target="_blank"
          >
            {i18n.mg_tip_press}
          </a>
        </Grid>

        {this.state.complete ? (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={ing + ' LinearProgress'}
            style={{
              width: "100%",
              height: 30 / 13.34 / 2 + "rem",
              borderRadius: '10rem'
            }}
          >
            <LinearProgress
              style={{
                width: "80%",
                height: 30 / 13.34 / 2 + "rem",
                borderRadius: '10rem'
              }}
            />
          </Grid>
        ) : (
            <Grid container justify="center" className={ing + ' LinearProgress'}>
              <LinearProgress
                style={{
                  width: "80%",
                  height: 30 / 13.34 / 2 + "rem",
                  borderRadius: '10rem',
                  position: 'relative',
                }}
                variant="determinate"
                value={this.state.rate * 1}
              />
              <Grid
                container
                justify="center"
                alignItems="center"
                className={this.props.classes.progress_downloading}
              >
                {this.state.rate}%
              </Grid>
            </Grid>
          )}

        <Grid
          container
          direction="row"
          justify="center"
          className={_05}
        >
          <div className={up} style={{
            marginTop: '-.2rem',
          }}>
            {this.state.udder}
          </div>
        </Grid>


      </Grid>
    );
  }
}