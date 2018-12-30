import React from 'react';
import { Col } from 'react-materialize';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentWillMount() {
        this.startErrorLog(this.props);
    }

    startErrorLog(props) {
        window.onerror = (message, file, line, column, errorObject) => {
            column = column || (window.event && window.event.errorCharacter);
            const stack = errorObject ? errorObject.stack : null;

            //trying to get stack from IE
            if (!stack) {
                const stack = [];
                let f = arguments.callee.caller;
                while (f) {
                    stack.push(f.name);
                    f = f.caller;
                }
                errorObject['stack'] = stack;
            }

            const data = {
                message: message,
                file: file,
                line: line,
                column: column,
                errorStack: stack
            };

            //here I make a call to the server to log the error

            //the error can still be triggered as usual, we just wanted to know what's happening on the client side

            //return false;
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        this.startErrorLog(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (<Col s={12} m={12} l={12} className="recordNotFound">
                <span className="noDataCircle">Sorry!!</span>
                <span className="msg">Something went wrong</span>
            </Col>);
        }
        return this.props.children;
    }

}

export default ErrorBoundary;