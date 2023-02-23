
const Mux = require("@mux/mux-node");
const dotenv = require("dotenv");
dotenv.config();

const { Video } = new Mux(
    process.env.MUX_TOKEN_ID,
    process.env.MUX_TOKEN_SECRET,
);

module.exports.createLiveStream = async (req, res) => {
    try {
        const response = await Video.LiveStreams.create({
            playback_policy: "public",
            new_asset_settings: { playback_policy: "public" },
        });

        res.send(response)
    } catch (err) {
        console.error(
            `Unable to start the live stream. 
          Error ${err}`,
        );
        res.send("Unable to start the live stream.")
    }
};

module.exports.retrieveLiveStreams = async (req, res) => {
    try {
        const liveStreams = await Video.LiveStreams.list();

        const responseList = liveStreams.map((liveStream) => ({
            id: liveStream.id,
            status: liveStream.status,
            playback_ids: liveStream.playback_ids,
            created_at: liveStream.created_at,
        }));
        res.send(responseList)
    } catch (err) {
        console.error(
            `Unable to retrieve live streams. 
          Error ${err}`,
        );
        res.send("Unable to retrieve live streams.")
    }
};

module.exports.deleteLiveStream = async (req, res) => {
    try {
        const liveStreamId = req.headers["livestreamid"]
        const response = await Video.LiveStreams.del(liveStreamId)
        res.send("Your Stream Is closed")
    } catch (err) {
        console.error(
        `Unable to delete live stream, id: ${req.headers.liveStreamId}. 
        Error ${err}`,
        );
        res.send("Unable to Close live stream.")

    }
};