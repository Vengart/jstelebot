const {
     Telegraf, 
     Markup
    } = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();

const constants = require('./constants')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`А я знаю, что ты...🧐 ${ctx.message.from.first_name ? ctx.message.from.first_name: '  ...Стоп, кто ты воин?'}`));

bot.help((ctx) => ctx.reply(constants.commands_for_chat))

bot.command('quiz', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Викторины</b>', Markup.inlineKeyboard(
        [   
          [Markup.button.callback('Угадай аниме по стикерам', 'btn_1')],
          [Markup.button.callback('Угадай фильм по стикерам', 'btn_2')],
          [Markup.button.callback('Угадай игру по стикерам', 'btn_3')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
  addAnimeActionBot('btn_1')
  addFilmActionBot('btn_2')
  addGameActionBot('btn_3')
      
  function addAnimeActionBot(id_btn) {
        bot.action(id_btn, async (ctx) => {
            try {
                await ctx.replyWithHTML('<b>Выберите аниме</b>', Markup.inlineKeyboard(
                  [   
                    [Markup.button.callback('1', 'anime_btn_1'), Markup.button.callback('Узнать ответы', 'anime_btn_6')],
                    [Markup.button.callback('2', 'anime_btn_2'), Markup.button.callback('Узнать ответы', 'anime_btn_7')],
                    [Markup.button.callback('3', 'anime_btn_3'), Markup.button.callback('Узнать ответы', 'anime_btn_8')],
                    [Markup.button.callback('4', 'anime_btn_4'), Markup.button.callback('Узнать ответы', 'anime_btn_9')],
                    [Markup.button.callback('5', 'anime_btn_5'), Markup.button.callback('Узнать ответы', 'anime_btn_10')]
                  ]
                ))
              } catch (e) {
                console.error(e)
              }
        })
      }

      function addFilmActionBot(id_btn) {
        bot.action(id_btn, async (ctx) => {
            try {
                await ctx.replyWithHTML('<b>Выберите фильм</b>', Markup.inlineKeyboard(
                  [   
                    [Markup.button.callback('1', 'film_btn_1'), Markup.button.callback('Узнать ответы', 'film_btn_7')],
                    [Markup.button.callback('2', 'film_btn_2'), Markup.button.callback('Узнать ответы', 'film_btn_8')],
                    [Markup.button.callback('3', 'film_btn_3'), Markup.button.callback('Узнать ответы', 'film_btn_9')],
                    [Markup.button.callback('4', 'film_btn_4'), Markup.button.callback('Узнать ответы', 'film_btn_10')],
                    [Markup.button.callback('5', 'film_btn_5'), Markup.button.callback('Узнать ответы', 'film_btn_11')],
                    [Markup.button.callback('6', 'film_btn_5'), Markup.button.callback('Узнать ответы', 'film_btn_12')]
                  ]
                ))
              } catch (e) {
                console.error(e)
              }
        })
      }

      function addGameActionBot(id_btn) {
        bot.action(id_btn, async (ctx) => {
            try {
                await ctx.replyWithHTML('<b>Выберите игру</b>', Markup.inlineKeyboard(
                  [   
                    [Markup.button.callback('1', 'game_btn_1'), Markup.button.callback('Узнать ответы', 'game_btn_6')],
                    [Markup.button.callback('2', 'game_btn_2'), Markup.button.callback('Узнать ответы', 'game_btn_7')],
                    [Markup.button.callback('3', 'game_btn_3'), Markup.button.callback('Узнать ответы', 'game_btn_8')],
                    [Markup.button.callback('4', 'game_btn_4'), Markup.button.callback('Узнать ответы', 'game_btn_9')],
                    [Markup.button.callback('5', 'game_btn_5'), Markup.button.callback('Узнать ответы', 'game_btn_10')]
                  ]
                ))
              } catch (e) {
                console.error(e)
              }
        })
      }


function ActionBot(id, emoji, answer) {
    bot.action(id, async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML('<i>Только первая буква ответа заглавная</i>')
        await ctx.replyWithHTML(emoji)
        await bot.hears(answer, ctx => {
            ctx.reply('Молодец, действительно - это '+answer)
        })
        
      } 
      catch (e) {
        console.error(e)
      }
    })
  }
  ActionBot('anime_btn_1', constants.anime_emoji1, constants.anime_answer1)
  ActionBot('anime_btn_2', constants.anime_emoji2, constants.anime_answer2)
  ActionBot('anime_btn_3', constants.anime_emoji3, constants.anime_answer3)
  ActionBot('anime_btn_4', constants.anime_emoji4, constants.anime_answer4)
  ActionBot('anime_btn_5', constants.anime_emoji5, constants.anime_answer5)

  ActionBot('film_btn_1', constants.film_emoji1, constants.film_answer1)
  ActionBot('film_btn_2', constants.film_emoji2, constants.film_answer2)
  ActionBot('film_btn_3', constants.film_emoji3, constants.film_answer3)
  ActionBot('film_btn_4', constants.film_emoji4, constants.film_answer4)
  ActionBot('film_btn_5', constants.film_emoji5, constants.film_answer5)
  ActionBot('film_btn_6', constants.film_emoji6, constants.film_answer6)

  ActionBot('game_btn_1', constants.game_emoji1, constants.game_answer1)
  ActionBot('game_btn_2', constants.game_emoji2, constants.game_answer2)
  ActionBot('game_btn_3', constants.game_emoji3, constants.game_answer3)
  ActionBot('game_btn_4', constants.game_emoji4, constants.game_answer4)
  ActionBot('game_btn_5', constants.game_emoji5, constants.game_answer5)

  function Answers(id, answer) {
    bot.action(id, async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.reply('Правильный ответ:')
        await ctx.reply(answer)      
      } 
      catch (e) {
        console.error(e)
      }
    })
  }
  Answers('anime_btn_6',  constants.anime_answer1)
  Answers('anime_btn_7',  constants.anime_answer2)
  Answers('anime_btn_8',  constants.anime_answer3)
  Answers('anime_btn_9',  constants.anime_answer4)
  Answers('anime_btn_10', constants.anime_answer5)

  Answers('film_btn_7',  constants.film_answer1)
  Answers('film_btn_8',  constants.film_answer2)
  Answers('film_btn_9',  constants.film_answer3)
  Answers('film_btn_10', constants.film_answer4)
  Answers('film_btn_11', constants.film_answer5)
  Answers('film_btn_12', constants.film_answer6)

  Answers('game_btn_6',  constants.game_answer1)
  Answers('game_btn_7',  constants.game_answer2)
  Answers('game_btn_8',  constants.game_answer3)
  Answers('game_btn_9',  constants.game_answer4)
  Answers('game_btn_10', constants.game_answer5)
  
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));