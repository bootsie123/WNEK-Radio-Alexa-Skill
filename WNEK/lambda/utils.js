exports.playRadio = response => {
    return response
        .withStandardCard("WNEK Radio", "You are listneing to WNEK Radio", LOGO, LOGO)
        .addAudioPlayerPlayDirective("REPLACE_ALL", URL, URL, 0)
        .withShouldEndSession(true)
        .getResponse();
};
