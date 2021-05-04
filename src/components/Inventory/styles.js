import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    display: 'flex',
    padding: theme.spacing(2),
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    color: 'slateblue',
    marginTop: '20px',
  }
}));