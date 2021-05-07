
import React, {ChangeEvent} from "react";

type PropsType = {
  status: string
  updateStatus: (newStatus:string) => void
}

type StateType ={
  status: string
  editMode:boolean
}


class ProfileStatus extends React.Component<PropsType,StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeteEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActiveteEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps:PropsType, prevState:StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }

    //let a = this.state;
    //let b = this.props;
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeteEditMode}>
              {this.props.status || "----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActiveteEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
