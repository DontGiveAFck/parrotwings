import React, { Component } from 'react';
import './LoginPage.css';
import {
    Button, Form, Transition, Message
} from 'semantic-ui-react';
import { cn } from '@bem-react/classname';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import * as EmailValidator from 'email-validator';
import background from '../../assets/images/bg-start-o.jpg';
import { ANIMATION_DURATION_AUTH_PAGE } from '../../constants/numberConstants';
import { AuthField, UserRegistration } from '../../typings/common';

const BLOCK = cn('LoginPage');

interface LoginPageProps {
    openRegistrationPageClick: () => void;
    password: string;
    email: string;
    onChangeAuthField: (field: AuthField, value: string) => void;
    onLoginButtonClick: (credentials: UserRegistration) => void;
    errorText?: string;
}

class LoginPage extends Component<LoginPageProps> {
    state = {
        loginFormVisible: false,
        loginButtonActive: true
    };

    render() {
        return (
            <div
                className={BLOCK()}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {this.getTitle()}
                {this.getLoginForm()}
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

    private getLoginForm = () => {
        const { loginFormVisible, loginButtonActive } = this.state;
        const {
            openRegistrationPageClick, onChangeAuthField, email, errorText
        } = this.props;
        return (
            <Transition visible={loginFormVisible} animation="fade" duration={ANIMATION_DURATION_AUTH_PAGE}>
                <div className={BLOCK('Form')}>
                    <Form error={Boolean(errorText)}>
                        <Form.Field>
                            <label htmlFor="email-input">E-mail</label>
                            <Form.Input
                                icon="mail"
                                iconPosition="left"
                                required
                                id="email-input"
                                type="email"
                                placeholder="Enter e-mail"
                                onChange={
                                    e => this.changeEmailField(AuthField.EMAIL, e.target.value)
                                }
                                onBlur={this.emailValidate}
                                error={!loginButtonActive}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                type="password"
                                placeholder="Enter password"
                                onChange={
                                    e => onChangeAuthField(AuthField.PASSWORD, e.target.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button
                                type="submit"
                                color="instagram"
                                onClick={this.loginButtonClick}
                                disabled={!loginButtonActive}
                            >
                                Let me in!
                            </Button>
                        </Form.Field>
                        <Form.Field>
                            <div className={BLOCK('Actions')}>
                                <div className={BLOCK('RegistrationInfo')}>
                                    <span>Don&apos;t have an account?</span>
                                    <a
                                        className={BLOCK('OpenRegistrationBtn')}
                                        onClick={openRegistrationPageClick}
                                    >
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </Form.Field>
                        <Message
                            error
                            header="Authorisation Error"
                            content={errorText}
                        />
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
                    <Header as="h1">Welcome to Parrot Wings!</Header>
                </div>
            </Transition>
        );
    };

    private loginButtonClick = () => {
        const {
            email,
            password,
            onLoginButtonClick
        } = this.props;

        onLoginButtonClick({
            email,
            password
        });
    };

    private emailValidate = () => {
        const { email } = this.props;
        if (!EmailValidator.validate(email)) {
            this.setState({
                loginButtonActive: false
            });
        } else {
            this.setState({
                loginButtonActive: true
            });
        }
    };

    private changeEmailField = (field: AuthField, value: string) => {
        const { onChangeAuthField } = this.props;
        this.setState({
            loginButtonActive: true
        });
        onChangeAuthField(field, value);
    };
}

export default LoginPage;
