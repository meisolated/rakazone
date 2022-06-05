export default function Popup({ notificationText, notificationType }) {
    return (
        <>
            <style jsx>{`
    .notification_wrapper {
     position: fixed;
     width: 100%;
     align-items: center;
     justify-content: center;
     display: flex;
     z-index: 9999;
     bottom: -1000px;
     -webkit-animation: slide-in 0.2s forwards;
     -webkit-animation-delay: 1s;
     animation: slide-in 0.5s forwards;
     animation-delay: 1s;
    }
    .notification_main {
     color: var(--divider-color);
     padding: 10px;
     border-radius: 10px;
     background-color: white;
     font-size: 20px;
    }

    @-webkit-keyframes slide-in {
     100% {
      bottom: 50px;
     }
    }

    @keyframes slide-in {
     100% {
      bottom: 50px;
     }
    }
    @-webkit-keyframes slide-out {
     100% {
      bottom: -500px;
     }
    }

    @keyframes slide-out {
     100% {
      bottom: -500px;
     }
    }
   `}</style>
            <div className="notification_wrapper">
                <div className="notification_main">
                    <div className={``} dangerouslySetInnerHTML={{ __html: notificationText }} />
                </div>
            </div>
        </>
    )
}
