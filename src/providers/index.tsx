// import { Provider } from "react-redux";
// import store from "store";
import MaterialProvider from "./MaterialProvider";
import RouterProvider from "./RouterProvider";
import FirebaseProvider from "./FirebaseProvider";

const Providers = () => {
  return (
    // <Provider store={store}>
    <FirebaseProvider>
      <MaterialProvider>
        <RouterProvider />
      </MaterialProvider>
    </FirebaseProvider>
    // </Provider>
  );
};
export default Providers;
