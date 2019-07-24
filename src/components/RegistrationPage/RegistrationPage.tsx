import React, { Component } from 'react';
import './RegistrationPage.css';
import {
    Button, Form, Message, Transition
} from 'semantic-ui-react';
import { cn } from '@bem-react/classname';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import * as EmailValidator from 'email-validator';
import background from '../../assets/images/bg-start-o.jpg';
import { ANIMATION_DURATION_AUTH_PAGE } from '../../constants/numberConstants';
import { AuthField, UserAuth } from '../../typings/common';

const BLOCK = cn('RegistrationPage');

export interface RegistrationPageProps {
    openLoginPageClick: () => void;
    registrationButtonClick: (credentials: UserAuth) => void;
    onChangeAuthField: (field: AuthField, value: string) => void;
    username?: string;
    password: string;
    rPassword?: string;
    email: string;
    errorText?: string;
}

class RegistrationPage extends Component<RegistrationPageProps> {
    state = {
        registrationFormVisible: false,
        registrationButtonActive: true
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
                {this.getRegistrationForm()}
            </div>
        );
    }

    componentDidMount(): void {
        this.setState({
            registrationFormVisible: true
        });
    }

    componentWillUnmount(): void {
        this.setState({
            registrationFormVisible: false
        });
    }

    private getRegistrationForm = () => {
        const { registrationFormVisible, registrationButtonActive } = this.state;
        const {
            openLoginPageClick,
            onChangeAuthField,
            errorText,
            password,
            rPassword,
            username,
            email,
        } = this.props;

        const isPasswordsEqual = rPassword === password;
        return (
            <Transition visible={registrationFormVisible} animation="fade" duration={ANIMATION_DURATION_AUTH_PAGE}>
                <div className={BLOCK('Form')}>
                    <Form error={Boolean(errorText)}>
                        <Form.Field>
                            <label htmlFor="email-input">E-mail</label>
                            <Form.Input
                                id="email-input"
                                type="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="Enter e-mail"
                                onChange={
                                    e => this.changeEmailField(AuthField.EMAIL, e.target.value)
                                }
                                onBlur={() => this.emailValidate()}
                                error={!registrationButtonActive}
                                value={email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <Form.Input
                                icon="user"
                                iconPosition="left"
                                type="text"
                                placeholder="Enter username"
                                onChange={e => onChangeAuthField(
                                    AuthField.USERNAME,
                                    e.target.value
                                )}
                                value={username}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                type="password"
                                placeholder="Enter password"
                                onChange={e => onChangeAuthField(
                                    AuthField.PASSWORD,
                                    e.target.value
                                )}
                                error={!isPasswordsEqual}
                                value={password}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Repeat password</label>
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                type="password"
                                placeholder="Enter password"
                                onChange={e => onChangeAuthField(
                                    AuthField.PASSWORD_REPEAT,
                                    e.target.value
                                )}
                                error={!isPasswordsEqual}
                                value={rPassword}
                            />
                        </Form.Field>
                        <Form.Field>
                            <div className={BLOCK('SignUpButton')}>
                                <Button
                                    type="submit"
                                    color="instagram"
                                    onClick={this.onRegistrationButtonClick}
                                    disabled={!registrationButtonActive || !isPasswordsEqual}
                                >
                                    Sign up and login
                                </Button>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className={BLOCK('Actions')}>
                                <div className={BLOCK('RegistrationInfo')}>
                                    <span>Already signed up?</span>
                                    <a
                                        className={BLOCK('OpenRegistrationBtn')}
                                        onClick={openLoginPageClick}
                                    >
                                        Sign in
                                    </a>
                                </div>
                            </div>
                        </Form.Field>
                        <Message
                            error
                            header="Registration Error"
                            content={errorText}
                        />
                    </Form>
                </div>
            </Transition>
        );
    };

    private getTitle = () => {
        const { registrationFormVisible } = this.state;

        return (
            <Transition visible={registrationFormVisible} animation="fade" duration={1000}>
                <div className={BLOCK('Title')}>
                    <Header as="h1">Join us!</Header>
                </div>
            </Transition>

        );
    };

    private onRegistrationButtonClick = () => {
        const {
            email,
            password,
            username,
            registrationButtonClick
        } = this.props;

        registrationButtonClick({
            email,
            password,
            username
        });
    };

    private emailValidate = () => {
        const { email } = this.props;
        if (!EmailValidator.validate(email)) {
            this.setState({
                registrationButtonActive: false
            });
        } else {
            this.setState({
                registrationButtonActive: true
            });
        }
    };

    private changeEmailField = (field: AuthField, value: string) => {
        const { onChangeAuthField } = this.props;
        this.setState({
            registrationButtonActive: true
        });
        onChangeAuthField(field, value);
    };
}

export default RegistrationPage;
