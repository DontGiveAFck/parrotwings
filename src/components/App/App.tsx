import React, {Component} from 'react';
import './App.css';
import { cn } from '@bem-react/classname';

const BLOCK = cn('App');

export interface AppProps {
    handleClick: (event: any) => void;
    variable: boolean;
}

class App extends Component<AppProps> {
    render() {
        return (
            <div className={BLOCK()}>
                {this.getHeader()}
                {this.getContent()}
            </div>
        );
    }

    private getContent = () => {
        return (
            <div className={BLOCK('Content')}>
                <button
                    onClick={this.onButtonClick}
                >
                    Action
                </button>
            </div>
        )
    };

    private onButtonClick = (event: any) => {
        const {
            variable,
            handleClick
        } = this.props;
        handleClick(!variable);
    };

    private getHeader = () => {
        return (
            <header className={BLOCK('Header')}>
                React boilerplate
            </header>
        );
    };
}

export default App;
