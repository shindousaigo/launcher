import { withStyles } from '@material-ui/core/styles';

export var Style = function () {
  return {
    wrapper: {
      position: 'fixed',
      width: '100%',
      height: '100%'
    },
    facebook: {
      fontSize: 30 / 13.34 / 2 + 'rem',
      width: 200 / 13.34 / 2 + 'rem',
      height: 84 / 13.34 / 2 + 'rem',
      top: 42 / 13.34 / 2 + 'rem',
      right: 42 / 13.34 / 2 + 'rem',
      lineHeight: 90 / 13.34 / 2 + 'rem',
      padding: 0,
      position: 'absolute'
    },
    progress: {
      position: 'fixed',
      width: '100%',
      height: '100%'
    },
    ing: {
      width: '100%',
      color: '#fff',
      height: 50 / 13.34 / 2 + 'rem',
      position: 'relative'
    },
    downloaded: {
      // margin: '0 0.5rem',
      // padding: '0 .5rem'
    },
    adapter: {
      marginTop: '0.1rem'
    }
  }
}

export var S = withStyles(Style)
