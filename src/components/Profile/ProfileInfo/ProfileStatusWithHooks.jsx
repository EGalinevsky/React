import React, { useState, useEffect } from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };

//   activeteEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };
//   deActiveteEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatus(this.state.status);
//   };
//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       });
//     }

//     //let a = this.state;
//     //let b = this.props;
//     console.log("componentDidUpdate");
//   }

//   render() {
//     console.log("render");
//     return
// }
let arr = [0, () => {}];
let [a, setA] = arr;

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeteEditMode = () => {
    setEditMode(true);
  };

  const deactiveteEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <p>            
            <strong>&nbsp;Status:</strong>&nbsp;
            <span onDoubleClick={activeteEditMode}>
              {props.status || "----"}
            </span>
          </p>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactiveteEditMode}
            autoFocus={true}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
