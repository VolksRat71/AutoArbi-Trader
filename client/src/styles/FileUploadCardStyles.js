import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'grid',
        minWidth: '260px'
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2.5vw'

    },
    font: {
        fontSize: '3vw'
    },
    icon: {
        fontSize: '100%'
    }
});