var net = require('net');

function Protocol(protocol) {
    if (protocol.charAt(0) !== '/') {
        protocol = process.cwd() + '/' + protocol;
    }
    this.protocol = require(protocol);
    this.clients = [];
}

Protocol.prototype.listen = function(port) {
    var self = this;
    net.createServer(function(socket) {
        socket.name = socket.remoteAddress + ":" + socket.remotePort;
        self.clients.push(socket);
        self.handler(socket);
    }).listen(port);
};

Protocol.prototype.handler = function(socket) {
    try {
        if (this.protocol["protocol"] !== '/') {
            this.protocol["protocol"] = process.cwd() + '/' + protocol;
        }
        var protocolModule = require(this.protocol["protocol"]);
        var protocolObject = new protocolModule();
        
        var method = this.protocol["procedure"][this.protocol["constructor"]];
        while(true) {
            if (typeof method === "undefined") {
                break;
            }
            console.log(method);
        }
        
    } catch(ex) {
        socket.end();
    }
};

Protocol.prototype.call = function(obj, method, args) {
    if (typeof args === "undefined") {
        args = [];
    }
    try {
        return obj[method].apply(obj, args);
    } catch(ex) {
        throw new ex;
    }
};

module.exports = Protocol;