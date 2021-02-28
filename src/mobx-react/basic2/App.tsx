// App.jsx
import React from "react";
import { Provider } from "mobx-react";
import { AppStore } from "./store";
import User from './User';

class App extends React.Component {
    render() {
        return (
            <Provider {...AppStore}>
                <User />
            </Provider>
        )
    }
}

export default App;


// const App = () => {
//     React.useEffect(() => {
//         stores.UserStore.fetchUserInfo();
//     });

//     return <Parent />;
// };

// render(
//     <Provider {...stores}>
//         <App />
//     </Provider>,
//     document.getElementById("app")
// );
