import React from 'react';

const Error = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="error-content">
                    <div className="error-content__text">
                        <div className="error-content__heading">
                            ОЙ!
                        </div>
                        <div className="error-content__text">
                            Данная страница не существует
                        </div>
                    </div>
                    <div className="error_content__img">
                        <img src="/assets/images/error-img.png" alt="error"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;