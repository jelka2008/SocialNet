import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
<<<<<<< HEAD
import {
  getUserProfile,
  getStatus,
  updateStatus
} from "../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
=======
import { getUserProfile } from "../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../API/API";
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5224;
    }
<<<<<<< HEAD
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
=======
    // debugger;
    this.props.getUserProfile(userId);
    // profileAPI.setUserProfile.then(data => {
    //   this.props.setUserProfile(data.data);
    // });
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

<<<<<<< HEAD
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
=======
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
