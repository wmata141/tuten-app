import React from 'react'

const Facebook = () => (
    <p onClick={() => iconClick('Facebook')} id="facebookIcon"></p>
);

const Twitter = () => (
    <p onClick={() => iconClick('Twitter')} id="twitterIcon"></p>
);

const Google = () => (
    <p onClick={() => iconClick('Google')} id="googleIcon"></p>
);

const iconClick = (name) => {
    alert(`Enter with ${name} account`)
};

const OtherMethods = () => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
        </div>
    </div>
);

export default OtherMethods