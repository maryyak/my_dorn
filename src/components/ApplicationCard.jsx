
const ApplicationCard = ({notification}) => {
    return (
        <div
            className={`notification-card ${
                notification.status === 'approved'
                    ? 'approved'
                    : notification.status === 'pending'
                        ? 'pending'
                        : 'reviewed'
            }`}
        >
            <div className="application-content">
                <div className={`application-date ${notification.status}`}>
                    {notification.date}
                </div>
                <div className={`application-name ${notification.status}`}>
                    {notification.name}
                </div>
                <div className={`application-title ${notification.status}`}>
                    {notification.title}
                </div>
                <div className={`application-document ${notification.status}`}>
                    {notification.document}
                </div>
            </div>
            <div className="application-btns col-container">
                <button className={`application-btn ${notification.status}`}>
                    Ответить
                </button>
                <button className={`application-btn ${notification.status}`}>
                    {notification.status === 'approved'
                        ? 'Рассмотрено'
                        : notification.status === 'pending'
                            ? 'Ожидает'
                            : 'На рассмотрении'}
                </button>
                {notification.status === 'approved' ? (
                    <div className="application-icon">
                        <img src="/assets/images/save-application.png" alt="save application" />
                    </div>
                ) : (
                    <div className="application-icon">
                        <img src="/assets/images/save-application-2.png" alt="save application" />
                    </div>
                )}
            </div>

        </div>
    );
};

export default ApplicationCard;