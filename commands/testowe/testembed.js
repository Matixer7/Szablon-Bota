const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "testembed",
    run: async (bot, message, args) => {

        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`Tu możesz dać tytuł`)
        .setDescription(`Tu możesz dać opis`)
        .setFooter(`Tu możesz dać stopke`)
        .setTimestamp()
        .setColor(`#0099ff`)
        .setThumbnail(message.author.avatarURL())
        message.channel.send(wiadomosc_embed)
    }
}