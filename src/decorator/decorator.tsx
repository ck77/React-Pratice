import React from 'react';

const SetTitle = (title: string) => (WrappedComponent: any) => {
    return class extends React.Component<any> {

        constructor(props: any) {
            super(props);

            this.state = { ...this.props, aaa: 1 }
        }

        componentDidMount() {
            setTimeout(() => {
                document.title = title;
            }, 1000);

            console.log('decorator')
            console.log({ ...this.props });
            console.log({ ...this.state });
        }

        render() {
            return (
                <WrappedComponent {...this.state} />
            )
        }
    }
}

export default SetTitle;