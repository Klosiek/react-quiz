import { RootState } from "store";
import { getFirebase, isEmpty, isLoaded } from "react-redux-firebase";
import * as SharedTypes from "shared/types";

// Selectors

export const selectUser = (state: RootState) => state.firebase.auth;

export const selectIsAuthLoaded = (state: RootState) =>
  isLoaded(state.firebase.auth) && isLoaded(state.firebase.profile);

export const test = (state: RootState) => state.firestore;

export const selectUserProfileById =
  (userId: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.profiles &&
    (data.profiles[userId] as unknown as SharedTypes.Profile);

export const selectCurrentUserProfile = (state: RootState) =>
  state.firebase.profile;

export const selectLoggedIn = (state: RootState) => {
  return (
    !isEmpty(state.firebase.auth) && isLoaded(state.firebase.auth.providerData)
  );
};

export const selectIsLoggedInAndIsEmailVerified = (state: RootState) => {
  return (
    selectLoggedIn(state) &&
    (state.firebase.auth.providerData?.some(
      (provider) =>
        provider.providerId === "github.com" || provider.providerId === "google"
    ) ||
      state.firebase.auth.emailVerified)
  );
};

// Actions

export const registerWithEmail = async (email: string, password: string) => {
  await getFirebase().createUser({ email, password });
};

export const loginWithEmail = async (email: string, password: string) => {
  await getFirebase().login({ email, password });
};

export const loginWithGithub = async () => {
  await getFirebase().login({ provider: "github", type: "popup" });
};

export const loginWithGoogle = async () => {
  await getFirebase().login({ provider: "google", type: "popup" });
};

export const logout = () => {
  getFirebase().logout();
};
