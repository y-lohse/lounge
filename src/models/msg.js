var _ = require("lodash");

Msg.Type = {
	ACTION: "action",
	ERROR: "error",
	INVITE: "invite",
	JOIN: "join",
	KICK: "kick",
	MESSAGE: "message",
	MODE: "mode",
	MOTD: "motd",
	NICK: "nick",
	NOTICE: "notice",
	PART: "part",
	QUIT: "quit",
	TOGGLE: "toggle",
	TOPIC: "topic",
	WHOIS: "whois"
};

module.exports = Msg;

var id = 0;

function Msg(attr) {
	_.merge(this, _.extend({
		from: "",
		id: id++,
		text: "",
		time: new Date(),
		type: Msg.Type.MESSAGE,
		self: false
	}, attr));
}
