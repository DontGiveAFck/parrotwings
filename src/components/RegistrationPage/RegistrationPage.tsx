import React, { Component } from 'react';
import './RegistrationPage.css';
import {
    Button, Form, Transition
} from 'semantic-ui-react';
import { cn } from '@bem-react/classname';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import background from '../../assets/images/bg-start-o.jpg';
import { ANIMATION_DURATION_AUTH_PAGE } from '../../constants/numberConstants';

const BLOCK = cn('RegistrationPage');

interface RegistrationPageProps {
    handleClick: () => void;
}

class RegistrationPage extends Component<RegistrationPageProps> {
    state = {
        loginFormVisible: false,
        registrationFormVisible: false
    };

    render() {
        return (
            <div
                className={BLOCK()}
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
                {this.getTitle()}
                {this.getRegistrationForm()}
            </div>
        );
    }

    componentDidMount(): void {
        this.setState({
            loginFormVisible: true
        });
    }

    componentWillUnmount(): void {
        this.setState({
            loginFormVisible: false
        });
    }

    private getRegistrationForm = () => {
        const { registrationFormVisible } = this.state;

        return (
            <Transition visible={registrationFormVisible} animation="fly left" duration={ANIMATION_DURATION_AUTH_PAGE}>
                <div className={BLOCK('Form')}>
                    <Form>
                        <Form.Field>
                            <label htmlFor="email-input">E-mail</label>
                            <input id="email-input" type="email" placeholder="Enter e-mail" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" />
                        </Form.Field>
                        <div className={BLOCK('Actions')}>
                            <Button type="submit" color="instagram">Let me in!</Button>
                            <span>Don&apos;t have an account?</span>
                            <a className={BLOCK('OpenRegistrationBtn')}> Sign up</a>
                        </div>
                    </Form>
                </div>
            </Transition>
        );
    };

    private getTitle = () => {
        const { loginFormVisible } = this.state;

        return (
            <Transition visible={loginFormVisible} animation="fade" duration={1000}>
                <div className={BLOCK('Title')}>
                    <Header as="h1">Sign up</Header>
                </div>
            </Transition>

        );
    };

    private openRegistrationBtnClick = () => {
        const { handleClick } = this.props;
        handleClick();
    };
}

export default RegistrationPage;
