import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class News extends Component {
    render() { 
        return (
            <div>
                News
                <button onClick={()=>this.props.anDeThayDoi()}>CLICK ME</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dulieuEdit: state.changeStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        anDeThayDoi: () => {
            dispatch({type:"CHANGE_VALUE_NAME"})
        }
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(News);