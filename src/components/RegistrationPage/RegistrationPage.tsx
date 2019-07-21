import React, { Component } from 'react';
import './RegistrationPage.css';
import {
    Button, Form, Transition
} from 'semantic-ui-react';
import { cn } from '@bem-react/classname';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import background from '../../assets/images/bg-start-o.jpg';
import { ANIMATION_DURATION_AUTH_PAGE } from '../../constants/numberConstants';
import { AuthField, UserRegistration } from '../../typings/common';

const BLOCK = cn('RegistrationPage');

export interface RegistrationPageProps {
    openLoginPageClick: () => void;
    registrationButtonClick: (credentials: UserRegistration) => void;
    onChangeAuthField: (field: AuthField, value: string) => void;
    username: string;
    password: string;
    email: string;
}

class RegistrationPage extends Component<RegistrationPageProps> {
    state = {
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
            registrationFormVisible: true
        });
    }

    componentWillUnmount(): void {
        this.setState({
            registrationFormVisible: false
        });
    }

    private getRegistrationForm = () => {
        const { registrationFormVisible } = this.state;
        const {
            openLoginPageClick,
            registrationButtonClick,
            onChangeAuthField
        } = this.props;
        return (
            <Transition visible={registrationFormVisible} animation="fade" duration={ANIMATION_DURATION_AUTH_PAGE}>
                <div className={BLOCK('Form')}>
                    <Form>
                        <Form.Field>
                            <label htmlFor="email-input">E-mail</label>
                            <input
                                id="email-input"
                                type="email"
                                placeholder="Enter e-mail"
                                onChange={e => onChangeAuthField(AuthField.EMAIL, e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                onChange={e => onChangeAuthField(
                                    AuthField.USERNAME,
                                    e.target.value
                                )}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                onChange={e => onChangeAuthField(
                                    AuthField.PASSWORD,
                                    e.target.value
                                )}
                            />
                        </Form.Field>
                        <Form.Field>
                            <div className={BLOCK('SignUpButton')}>
                                <Button
                                    type="submit"
                                    color="instagram"
                                    onClick={this.onRegistrationButtonClick}
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
                    <Header as="h1">Sign up</Header>
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
}

export default RegistrationPage;
