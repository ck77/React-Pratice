import React from 'react';

class App extends React.Component {
    render() {
        return <Toolbar theme="dark" />;
    }
}

function Toolbar(props: { theme: string }) {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

class ThemedButton extends React.Component<{ theme: string }> {
    render() {
        return <Button theme={this.props.theme} />;
    }
}

class Button extends React.Component<{ theme: string }> {
    render() {
        return <button>{this.props.theme}</button>
    }
}

export default App;