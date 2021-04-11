module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
  permissions: ['KICK_MEMBERS'],
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them! L');
		}
    let member = message.mentions.members.first();
    member.kick().then((member) => {
      message.channel.send(member.displayName + " has been kicked EPIC Moment :)")
	  console.log(name+' OOF')
    })
	},
};