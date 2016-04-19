exports.commands = ["raw", "send", "quote"];

exports.input = function(network, chan, cmd, args) {
	if (args.length !== 0) {
		var irc = network.irc;
		irc.raw(args);
	}

	return true;
};
