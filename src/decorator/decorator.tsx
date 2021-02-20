import React from 'react';

interface IApp {
    Name: string;
    Id: number;
}


const SetTitle = (title: string) => (WrappedComponent: any) => {
    return class extends React.Component<any> {

        constructor(props: any) {
            super(props);

            console.log('set title constructor')
        }

        componentDidMount() {
            setTimeout(() => {
                document.title = title;
            }, 1000);

            console.log('decorator')
            console.log({ ...this.props });
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}

const SetAppState = () => (WrappedComponent: any) => {
    return class extends React.Component<any> {
        constructor(props: any) {
            super(props);

            const s = {
                ccc: 123
            }

            this.state = { ...this.props, ...s }
        }

        // why need componentDidMount ? 
        componentDidMount() {
            console.log('SetAppState decorator')
        }

        render() {
            return (
                <WrappedComponent {...this.state} />
            )
        }
    }
}


export { SetTitle, SetAppState };