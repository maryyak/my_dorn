import React from 'react';

const Administration = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="administration-list">
                    <div className="administration-item">
                        <div className="img-container administration-item__img">
                            <img src="/assets/images/administration-image.png" alt="admin-img"/>
                        </div>
                        <div className="administration-item__content">
                            <div className="administration-item__title">Пряничников Максим Алексеевич</div>
                            <div className="administration-item__subtitle">ЗАВЕДУЮЩИЙ ОБЩЕЖИТИЕМ</div>
                            <div className="administration-item__line"></div>
                            <div className="administration-item__contacts">
                                <a className="administration-item__href" href="tel:+7 (499) 600-80-80">Тел.: +7 (499)
                                    600-80-80 доб. 35339</a>
                                <a className="administration-item__href href-underline"
                                   href="mailto:pryanichnikov@mirea.ru">Email: pryanichnikov@mirea.ru</a>
                            </div>
                            <div className="administration-item__btn">
                                <a className="administration-item__hrefBtn" href="#">Связаться</a>
                            </div>
                        </div>
                    </div>
                    <div className="administration-item">
                        <div className="img-container administration-item__img">
                            <img src="/assets/images/administration-image2.png" alt="admin-img"/>
                        </div>
                        <div className="administration-item__content">
                            <div className="administration-item__title">Степанов Максим Андреевич</div>
                            <div className="administration-item__subtitle">КОМЕНДАНТ ОБЩЕЖИТИЯ</div>
                            <div className="administration-item__line"></div>
                            <div className="administration-item__contacts">
                                <a className="administration-item__href" href="tel: +7 (499) 600-80-80">Тел.: +7 (499)
                                    600-80-80, доб. 35339</a>
                                <a className="administration-item__href href-underline"
                                   href="mailto:stepanov_ma@mirea.ru">Email: pstepanov_ma@mirea.ru</a>
                            </div>
                            <div className="administration-item__btn">
                                <a className="administration-item__hrefBtn" href="#">Связаться</a>
                            </div>
                        </div>
                    </div>
                    <div className="administration-item">
                        <div className="img-container administration-item__img">
                            <img src="/assets/images/administration-image3.png" alt="admin-img"/>
                        </div>
                        <div className="administration-item__content">
                            <div className="administration-item__title">Черняева Оксана Евгеньевна</div>
                            <div className="administration-item__subtitle">ПАСПОРТИСТ ОБЩЕЖИТИЯ</div>
                            <div className="administration-item__line"></div>
                            <div className="administration-item__contacts">
                                <a className="administration-item__href" href="tel:+7 (499) 600-80-80">Тел.: +7 (499)
                                    600-80-80, доб. 20752</a>
                                <a className="administration-item__href href-underline"
                                   href="mailto:stepanov_ma@mirea.ru">Email: chernyaeva@mirea.ru</a>
                            </div>

                            <div className="administration-item__btn">
                                <a className="administration-item__hrefBtn" href="#">Связаться</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Administration;
