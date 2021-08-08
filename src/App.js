import "./styles.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import Selectors from "./Header/Selectors/Selectors";
import AppointmentFilter from "./AppointmentFilter/AppointmentFilter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AppointmentFilter />
        <Selectors />
        <Main />
      </div>
    </Provider>
  );
}
