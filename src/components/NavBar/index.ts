import NavBar from "./NavBar";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { RootState } from "store";

// const mapStateToProps = (state: RootState) => {
//   const userId = state.firebase.auth.uid;
//   const userData = state.firestore.data.profiles
//     ? state.firestore.data.profiles[userId]
//     : null;
//   return {
//     userData: userData,
//   };
// };

// export default compose(
//   firestoreConnect(["profiles"]),
//   connect(mapStateToProps)
// )(NavBar) as React.ComponentType;

export default NavBar;
