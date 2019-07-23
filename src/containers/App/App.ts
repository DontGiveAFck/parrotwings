import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../../components/App/App';
import { userAuthSuccess } from '../../actions/auth';

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    goToProfilePage: (idToken: string) => dispatch(userAuthSuccess(idToken))
});

export default connect(
    // @ts-ignore
    null,
    mapDispatchToProps
)(App);
