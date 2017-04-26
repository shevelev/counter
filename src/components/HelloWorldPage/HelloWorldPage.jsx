import React, { PropTypes, Component } from 'react';
import { OAuthButton, SignOutButton } from 'components/AuthButtons';

import './HelloWorldPage.css';

const propTypes = {
  initialName: PropTypes.string
};

const defaultProps = {
  initialName: 'Аноним'
};

class HelloWorldPage extends Component {

  render() {
    return (
      <div className='App'>
        <h1>Привет!</h1>
        В планах следующие доработки:
        <oll>
          <li>Сделать авторизацию</li>
          <li>Сделать popup как на новостных сайтах</li>
          <li>сохранять выбранные зоны в localstorage, и спрашивать пользователя при логине, загрузить предыдущие или нет</li>
          <li>сделать бд на монгодб</li>
          <li>eslint - настроить под win&linux</li>
        </oll>
      </div>
    );
  }
}

HelloWorldPage.propTypes = propTypes;
HelloWorldPage.defaultProps = defaultProps;

export default HelloWorldPage;
