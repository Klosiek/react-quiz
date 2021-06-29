import { RootState } from "store";
import { getFirebase, isEmpty, isLoaded } from "react-redux-firebase";
import * as SharedTypes from "shared/types";

// Selectors

export const selectUser = (state: RootState) => state.firebase.auth;

export const selectUserProfileById =
  (userId: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.users && (data.users[userId] as unknown as SharedTypes.Profile);

export const selectCurrentUserProfile = (state: RootState) =>
  state.firebase.profile;

export const selectLoggedIn = (state: RootState) => {
  return (
    !isEmpty(state.firebase.auth) && isLoaded(state.firebase.auth.providerData)
  );
};

// Actions

export const login = async (email: string, password: string) => {
  await getFirebase().login({ email, password });
};

export const logout = () => {
  getFirebase().logout();
};
