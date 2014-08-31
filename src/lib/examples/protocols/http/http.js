function HTTPProtocol(socket) {
    this.socket = socket;

    this.httpData = {
        "responseCode": "200"
    };
}

HTTPProtocol.prototype.getURI = function(data) {
    this.httpData["requestURI"] = data;
    return true;
};

HTTPProtocol.prototype.getRequestHeader = function(data) {
    this.httpData["requestHeader"] = data;
    console.log(data);
};

HTTPProtocol.prototype.write = function(data) {
    
};

HTTPProtocol.prototype.end = function(data) {
    this.socket.end();
};

module.exports = HTTPProtocol;