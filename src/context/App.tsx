import React from 'react';

interface IUser {
    name: string;
    age: number;
}

const ThemeContext = React.createContext<IUser>({} as IUser);

class App extends React.Component {
    render() {
        // return <Toolbar theme="dark" />;
        return (
            <ThemeContext.Provider value={{ name: 'papago', age: 18 }}>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {

    static contextType = ThemeContext;

    render() {
        return <Button theme={this.context.name} />
    }
}

class Button extends React.Component<{ theme: string }> {
    render() {
        return <button>{this.props.theme}</button>
    }
}

export default App;