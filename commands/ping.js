module.exports = {
    name: 'ping',
    description: "Checks server ping",
    execute(message,args){
        const msg = await message.channel.send(`:ping_pong:Pinging...`);

        msg.edit(`:ping_pong: Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency${Math.round(client.ping)}ms`);
    }
}