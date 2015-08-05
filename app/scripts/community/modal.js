/**
 * Created by davide on 17/11/2014.
 */
estars.factory('$social', function () {
    var ws;
    return {
        connect: function (opts) {
            ws = WS4Redis({
                uri: 'ws://devapi.electronicstars.com/api/',
//                uri: 'wss://localhost:8000/ws/' + this.id + '?subscribe-broadcast',
                receive_message: opts.receive_message
            });
        }
    };
});

