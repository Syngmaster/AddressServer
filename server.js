let app = require('./app');
let port = process.env.PORT || 3003;

// let ipAddress = process.env.HOST;
// let Etcd = require('node-etcd');
// let path = require('path');
// let etcd = new Etcd();

let server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
    // console.log('Registered with etcd as ' + etcdRegister());
});

// function etcdRegister() {
//     var p = path.join('/', 'services', 'address-server');
//     etcd.set(p,
//         JSON.stringify({
//             hostname: ipAddress,
//             port: port,
//             pid: process.pid
//         }));
//     return p;
// }