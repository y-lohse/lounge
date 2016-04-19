var _ = require("lodash");
var Msg = require("../../models/msg");

module.exports = function(irc, network) {
	var client = this;
	irc.on("kick", function(data) {
		var chan = network.getChannel(data.channel);
		if (typeof chan === "undefined") {
			return;
		}

		if (data.kicked === irc.user.nick) {
			chan.users = [];
		} else {
			chan.users = _.without(chan.users, _.find(chan.users, {name: data.kicked}));
		}

		client.emit("users", {
			chan: chan.id
		});

		var msg = new Msg({
			type: Msg.Type.KICK,
			time: data.time,
			mode: chan.getMode(data.nick),
			from: data.nick,
			target: data.kicked,
			text: data.message || "",
			highlight: data.kicked === irc.user.nick,
			self: data.nick === irc.user.nick
		});
		chan.messages.push(msg);
		client.emit("msg", {
			chan: chan.id,
			msg: msg
		});
	});
};
