import "./styles.css";
import Header from "./Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Selectors from "./Header/Selectors/Selectors";
import AppointmentFilter from "./AppointmentFilter/AppointmentFilter";
import Visits from "./Visits/Visits";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AppointmentFilter />
        <Selectors />
        <Visits />
      </div>
    </Provider>
  );
}
