import { createTheme } from '@material-ui/core/styles';

import checkIcon from '../assets/img/icon_check.svg';

const $Nunito = '"Nunito", sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3360AD',
    },
    error: {
      main: '#EA1763',
    },
  },
  overrides: {
    MuiCircularProgress: {
      root: {
        transition: 'width .3s ease, hight .3s ease',
      },
    },
    MuiButton: {
      root: {
        minWidth: 232,
        height: 48,
        boxShadow: '0px 0px 8px rgba(45, 53, 67, 0.12)',
        borderRadius: 8,
        textTransform: 'none',
        transition:
          'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&.loading': {
          opacity: 0.5,
          pointerEvents: 'none',
          transform: 'scale(.9)',
        },
      },
      containedPrimary: {
        backgroundColor: '#3360AD',
        fontFamily: $Nunito,
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: 16,
        lineHeight: '16px',
        textAlign: 'center',
        letterSpacing: 0.03,
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#208C72',
        },
        '&:active': {
          backgroundColor: '#1E3966',
        },
      },
    },
    MuiTextField: {
      root: {},
    },
    MuiInputBase: {
      root: {
        fontFamily: $Nunito,
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.01em',
        color: '#2D3543',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: $Nunito,
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.01em',
        color: '#5A6372',
        '&$focused': {
          textTransform: 'uppercase',
          color: '#687387',
        },
      },
    },
    MuiInputLabel: {
      root: {
        '&$disabled': {
          color: '#CED4DF',
        },
      },
      shrink: {
        textTransform: 'uppercase',
        color: '#687387',
        transform: 'translate(0, 8.0px) scale(0.75)',
        '&:not(.Mui-focused)&+.MuiInputBase-root::before': {
          borderColor: '#97A2B4',
          transition: 'none',
        },
      },
      formControl: {
        top: -5,
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          borderBottom: '2px solid #CED4DF',
        },
        '&:hover&::before': {
          borderColor: '#208C72',
        },
        '&$disabled::before': {
          borderBottom: '2px solid #CED4DF!important',
          opacity: 0.5,
        },
      },
    },
    MuiTooltip: {
      popper: {},
      tooltip: {
        padding: '10px 12px',
        margin: '10px 0!important',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 14px rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        color: '#2D3543',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        borderBottom: '4px solid #EA1763',
      },
      popperArrow: {
        '&[x-placement*="top"] .MuiTooltip-arrow': {
          bottom: -2,
        },
      },
      arrow: {
        color: '#EA1763',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'initial',
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: -4,
        alignItems: 'flex-start',
        '& .MuiCheckbox-root': {
          marginTop: -4,
        },
      },
    },
    MuiCheckbox: {
      root: {
        padding: '4px 6px 4px 4px',
        '&:hover': {
          color: '#208C72',
        },
        '& .MuiSvgIcon-root': {
          width: '16px',
          height: '16px',
        },
      },
      colorPrimary: {
        '&$disabled': {
          color: '#CED4DF',
        },
      },
    },
    MuiStepper: {
      root: {
        padding: 0,
      },
    },
    MuiStep: {
      root: {
        '&$disabled': {
          opacity: 0.2,
        },
      },
      completed: {
        '& .MuiStepLabel-iconContainer': {
          // backgroundColor: "#208C72",
          borderColor: '#208C72',
          background: `#208C72 url(${checkIcon}) no-repeat center`,
          '&::before, & svg': {
            display: 'none',
          },
        },
      },
    },
    MuiStepConnector: {
      root: {
        minWidth: 72,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#E9ECF1',
      },
      active: {
        background: 'rgb(125,202,254)',
        background: 'linear-gradient(-90deg, #3360AD 0%, #208C72 100%)',
      },
      lineHorizontal: {
        height: 4,
        border: 'none!important',
        width: '0%',
        borderRadius: 2,
        backgroundColor: '#3360AD',
      },
    },
    MuiStepLabel: {
      root: {
        '&$disabled .MuiStepLabel-iconContainer': {
          borderColor: '#5A6372',
          color: '#5A6372',
          '&::before': {
            opacity: 0,
          },
        },
      },
      iconContainer: {
        width: 32,
        height: 32,
        padding: 0,
        paddingRight: 0,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: '1px solid #3360AD',
        position: 'relative',
        color: '#fff',
        '& svg': {
          zIndex: 1,
        },
        '&::before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#3360AD',
          borderRadius: '50%',
          border: '2px solid #fff',
          zIndex: 0,
        },
      },
      label: {
        fontWeight: '800!important',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.03em',
        color: '#2D3543',
      },
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          width: 16,
          height: 16,
          position: 'absolute',
          top: 'calc(50% - 2px)',
          left: -24,
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
