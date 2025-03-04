import { client, guildId } from '..'

client.on('commandsReset', async () => {
  client.application?.commands.create(
    {
      name: 'pr',
      description: '文句言うな黙ってPR出せ'
    },
    guildId
  )
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand() || interaction.commandName !== 'pr') return
  await interaction.reply(
    'https://twitter.com/hirosukt/status/1489252498540212224'
  )
})

client.on('messageCreate', async (message) => {
  if (message.content === '.pr') {
    const channel = message.channel
    await channel.send(
      'https://twitter.com/hirosukt/status/1489252498540212224'
    )
  }
})
