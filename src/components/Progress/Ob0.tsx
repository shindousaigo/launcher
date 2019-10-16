import * as React from "react";
import Grid from "src/bower/material-ui/packages/material-ui/src/Grid";
import LinearProgress from "src/bower/material-ui/packages/material-ui/src/LinearProgress";

// LinearProgress.prototype.componentDidUpdate = function () {
//   var linearProgress = document.querySelector(".linearProgress");
//   if (linearProgress) {
//     linearProgress.childNodes[0]["style"].webkitTransform =
//       linearProgress.childNodes[0]["style"].transform;
//   }
// }

type ProgressProps = {
  classes: any
  responses: AppLauncher.Init.Responses
  install?: Function
  speed?: number
  /**
   * 语言包
   */
  language: string
}

export default class ObbProgress extends React.Component<ProgressProps, any, any> {

  public state = {
    rate: 0,
    error_resource: false,
    complete: this.props.responses.nativeInitData.localAddr ? true : false,
  }

  public interval
  public languagePack = {
    mg_txt_status_tip: {
      de: 'Einstellungen wird entpackt ( Bitte achten ob Speicherplatz ausreichend ist)',
      en: 'Unpacking the installing (Please note that your mobile has enough memory)',
      fr: "En cours d'extraction de l'installation (Veuillez noter la disponibilité de la mémoire) ...",
      id: 'Silahkan sambungkan wifi untuk mengunduh',
      ko: '압축을 풀고 설치하는 중 (메모리가 충분한지 주의하세요)',
      th: 'กำลังดำเนินการติดตั้ง (โปรดให้เหลือพื้นที่ว่างเพียงพอ)...',
      vi: 'Đang giải nén cài đặt (Xin chừa đủ bộ nhớ)',
      zh: 'Unpacking the installing (Please note that your mobile has enough memory)',
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
  }

  componentDidMount() {
    this.progressing()
  }

  progressing() {
    this.state.rate = this.state.rate + Math.random() * (this.props.speed || 1.2)
    if (this.state.rate >= 99) {
      this.state.rate = 99
      clearInterval(this.interval)
    } else {
      this.state.rate = Number(this.state.rate.toFixed(1))
    }
    this.setState(this.state)
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.progressing()
      }, 1000)
    }
  }

  render() {
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
            {this.state.error_resource ? this.languagePack.mg_tip_question2[this.props.language] : this.languagePack.mg_tip_question[this.props.language]}
          </div>
          <a
            className={up + ' ' + bbb + (this.state.error_resource ? " shake active" : " shake")}
            href={this.props.responses.serverInitData.data.publics.currentStartDownPage}
            target="_blank"
          >
            {this.languagePack.mg_tip_press[this.props.language]}
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
            {this.languagePack.mg_txt_status_tip[this.props.language]}
          </div>
        </Grid>
      </Grid>
    );
  }
}
