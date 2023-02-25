const { RtcTokenBuilder, RtcRole } = require('agora-access-token')
module.exports.createAgoraAccessToken = async (req, res) => {
    try {
        const { uid, channelName } = req.body
        const appID = '677ab660ab9241c6bc7a3df551e7aae8';
        const appCertificate = '6135f9b5b0cc48f9b6a2bc5afbd6ce13';
        // const channelName = '<The channel this token is generated for>';
        // const uid = 2882341273;
        const role = RtcRole.PUBLISHER;

        const expirationTimeInSeconds = 3600

        const currentTimestamp = Math.floor(Date.now() / 1000)

        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

        // // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

        // // Build token with uid
        const token = await RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, parseInt(uid), role, privilegeExpiredTs);
        // console.log("Token With Integer Number Uid: " + token);
         res.send({ "token":token})
    } catch (err) {
        console.error(
            `Unable to get agora Access Token. 
          Error ${err}`,
        );
        res.send("Unable to get agora Access Token.")
    }
};
