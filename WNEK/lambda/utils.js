exports.playRadio = (response, url, logo) => {
    return response
        .withStandardCard("WNEK Radio", "You are listneing to WNEK Radio", logo, logo)
        .addAudioPlayerPlayDirective("REPLACE_ALL", url, url, 0)
        .withShouldEndSession(true)
        .getResponse();
};
