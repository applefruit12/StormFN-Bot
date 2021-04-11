module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
  permissions: ['ADMINISTRATOR','BAN_MEMBERS'],
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to banned them!');
		}
    let member = message.mentions.members.first();
    member.ban().then((member) => {
      message.channel.send(member.displayName + " has been banned :)")
    })
	},
};