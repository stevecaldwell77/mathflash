import { connect as rrConnect} from 'react-redux'

const mergePropsPreferOwn = (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, ownProps);

export const connect = (mapStateToProps, mapDispatchToProps, mergeProps = mergePropsPreferOwn, options) => rrConnect(mapStateToProps, mapDispatchToProps, mergeProps, options);
