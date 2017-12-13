import React from 'react';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-content">
                    <img src="/img/auth0-logo.png" className="footer-content-logo" />
                    <h2 className="footer-content-title">The new way to solve identity</h2>
                    <p className="footer-content-text">
                        We solve the most complexity identity use cases with an extensible
                        and easy to integrate platform that secures billion of logins every month.
                    </p>
                    <ul className="footer-content-features">
                        <li>Risk based and prioritized security</li>
                        <li>Enterprise-class availability</li>
                        <li>Build by security experts</li>
                    </ul>
                    <div className="footer-content-buttons"> 
                        <div className="regular-btn orange-btn">
                            <span>Try Auth0 free</span>
                        </div>
                        <div className="regular-btn">
                            <span>Talk to sales</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};