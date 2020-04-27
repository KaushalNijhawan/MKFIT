import React from "react";

class AlertMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props?.message
        }
    }
    render() {
        return (
            <div class="alert alert-danger" role="alert">
                {this.state.message}
            </div>
        );
    }
}
export default AlertMessage;