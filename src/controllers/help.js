module.exports = {
    name: 'help',
    description: 'Give a list of commands',
    execute(message, args) {
        message.channel.send('Hello World!');
    }
}