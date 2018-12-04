import * as React from "react"
import MuButton from "src/bower/material-ui/packages/material-ui/src/Button"

type ButtonProps = {
  language: string
  className?: string
  mode?: string
  click?: any
}

export default class Button extends React.Component<ButtonProps, any, any> {

  constructor(props) {
    super(props)
  }

  private languagePack = {
    mg_txt_cancel: {
      de: 'Abbrechen',
      en: 'Cancel',
      fr: 'Annuler',
      id: 'Batal',
      ko: '취소',
      th: 'ยกเลิก',
      vi: 'Hủy',
      zh: '取消',
    },
    mg_txt_confirm: {
      de: 'Bestätigen',
      en: 'Confirm',
      fr: 'Confirmer',
      id: 'Konfirmasi',
      ko: '확인',
      th: 'ยืนยัน',
      vi: 'Xác nhận',
      zh: '确定',
    },
  }

  render() {
    return <MuButton
      variant="contained"
      size="medium"
      className={this.props.className}
      onClick={this.props.click}
    >
      {this.props.mode ? ((this.props.mode === 'cancel' && this.languagePack.mg_txt_cancel[this.props.language]) || (this.props.mode === 'confirm' && this.languagePack.mg_txt_confirm[this.props.language])) : this.props.children}
    </MuButton>
  }

}