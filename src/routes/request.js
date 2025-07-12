const express = require('express');
const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const { ConnectionRequestModel } = require("../models/connectionRequest");

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
    try {
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        //Status Check
        const allowedStatus = ["ignored", "accepted", "rejected", "interested"];
        if (!allowedStatus.includes(status)) {
          return res.status(400).json({message: "Invalid Status type: " + status});
        }

        //Existing user exist check
        const existingConnectionRequest = await ConnectionRequestModel.findOne({
          $or: [
            { fromUserId, toUserId },
            { fromUserId: toUserId, toUserId: fromUserId },
          ],
        });
        // console.log(existingConnectionRequest);
        if (existingConnectionRequest) {
          throw new Error("Already sent the connection request before");
        }


        const connectionRequest = new ConnectionRequestModel({
            fromUserId,
            toUserId,
            status,
        });


        const data = await connectionRequest.save();

        res.json({
            message: "Connection Request sent Successfully !!!",
            data,
        });

    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

module.exports = requestRouter;