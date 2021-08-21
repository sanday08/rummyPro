const mongoose = require("mongoose");

//Set you offset here like +5.5 for IST
var offsetIST = 19800000;

//Create a new date from the Given string
var d = new Date();

//To convert to UTC datetime by subtracting the current Timezone offset
var utcdate = new Date(d.getTime());

//Then cinver the UTS date to the required time zone offset like back to 5.5 for IST
var istdate = new Date(utcdate.getTime() + offsetIST);

const BetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    }, game: {
      type: String,
      enum: ["andarBahar", "parity"], //if you write admin than its display error "`admin` is not a valid enum value for path`role`".
      required: true
    },
    ticketId: {
      type: String,
      required: true,
    },
    bet: Number,
    winPosition: {
      type: String,
      default: "",
    },
    startPoint: Number,
    email: String,
    position: {
      type: Object,
      required: true,
    },
    commission: {
      type: Number,
      default: 0
    },
    endPoint: {
      type: Number,
    },
    won: {
      type: Number,
      default: 0,
    },
    claim: {
      type: Boolean,
      default: false,
    },

    DrTime: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString()
          .split(",")[1],
    },
    DrDate: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString()
          .split(",")[0]
          .replace(/\//g, (x) => "-"),
    },
    createDate: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
