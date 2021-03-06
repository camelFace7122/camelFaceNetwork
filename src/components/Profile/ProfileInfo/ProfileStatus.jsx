import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }

    onType = (e) => {
        this.setState({
            status: e.currentTarget.value, 
        })
    }

    render() {
        return (
        <div>
            {!this.state.editMode 
                ? <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || '---'}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode } 
                     value={this.state.status} onChange={this.onType} /> 
                </div>
            }        
        </div>
        )
    }
}

export default ProfileStatus;