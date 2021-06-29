import * as Types from "./FirebaseProvider.types";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "store";
import { useEffect } from "react";
import { logout } from "store/user";

const FirebaseProvider = ({ children }: Types.Props) => {
  useEffect(() => {
    const unsubscribe = getFirebase()
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) logout();
        else console.log(user);
      });

    return () => unsubscribe();
  }, []);

  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      {children}
    </ReactReduxFirebaseProvider>
  );
};

export default FirebaseProvider;
