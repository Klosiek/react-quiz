import * as Types from "./FirebaseProvider.types";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyDi7PaBBm42mLCJzbcVUAkgyfl3e2WLclE",
  authDomain: "react-quiz-cc8fc.firebaseapp.com",
  projectId: "react-quiz-cc8fc",
  storageBucket: "react-quiz-cc8fc.appspot.com",
  messagingSenderId: "560800766864",
  appId: "1:560800766864:web:50061808e97706c7cab115",
  measurementId: "G-XWH5HVKNTH",
};

const FirebaseProvider = ({ children }: Types.Props) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      {children}
    </FirebaseAppProvider>
  );
};

export default FirebaseProvider;
