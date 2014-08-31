var protocol = require("./lib/Protocol");

var httpProtocol = new protocol("./lib/examples/protocols/http/http.json");
httpProtocol.listen(8887);