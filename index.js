
const { Telegraf,Markup} = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Здравствуйте ${ctx.message.chat.first_name ? ctx.message.chat.first_name : 'незнакомец'}.\n\nНам Unident Online, крупнейший в России поставщик стоматологического оборудования от мировых компаний! \n\nМы очень приятно видеть что вы здесь!\n\nАкции, скидки, распродажи - /sale\nКаталог товаров - /katalog\nКонтакты и адреса - /info`));


const text = require('./com'),
    sale = require('./sale'),
    svtext = require('./sv'),
    sttext = require('./st'),
    ratext = require('./ra'),
    koagtext = require('./koag'),
    sdtext = require('./sd'),
    iktext = require('./ik'),
    yntext = require('./yn'),
    pntext = require('./pn'),
    antext = require('./an'),
    tntext = require('./tn'),
    nntext = require('./nn'),
    ymtext = require('./ym'),
    lotext = require('./lo');


bot.command('info', (ctx) => ctx.reply(text.info) + ctx.reply(`Вернуться в /katalog`) + ctx.reply(`или на главную /start`));


bot.command('sale', async (ctx) => {
    for (let value of sale.sale) // перебор по количеству данных
        await ctx.reply(value,{ 
            disable_web_page_preview: true // уберает привью с сылки на сайта
        });
        ctx.replyWithHTML(text.whatsApp); //ссылка для перехода в вотсап
        await ctx.reply(`Вернуться в /katalog`);

});

bot.command('katalog', async (ctx) => {
    try {
        await ctx.replyWithHTML('Что вас интересует?', Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Стоматологические визиографы', 'Sv'),
                    Markup.button.callback('Стоматологические томографы', 'St'),
                ],
                [
                    Markup.button.callback('Рентгеновские аппараты', 'Ra'),
                    Markup.button.callback('Коагуляторы', 'koag'),
                ],
                [
                    Markup.button.callback('Стоматологические дезинфекторы', 'Sd'),
                    Markup.button.callback('Интраоральная камера', 'Ik')
                ],
                [
                    Markup.button.callback('Угловые наконечники', 'Yn'),
                    Markup.button.callback('Прямые наконечники', 'Pn')
                ],
                [
                    Markup.button.callback('Аппараты для смазки и чистки наконечников', 'An'),
                    Markup.button.callback('Турбинные наконечники', 'Tn'),
                ],
                [
                    Markup.button.callback('Наборы наконечников', 'Nn'),
                    Markup.button.callback('Упаковочные машины для стерилизации', 'Ym')
                ],
                [
                    Markup.button.callback('Аппараты для отбеливания зубов', 'Lo')
                ]  
            ]
        ));        
    } catch (e) {
        console.error(e);
    }
    ctx.reply(`или на главную /start`);
});

/* name - id кнопки
src - картинка если есть
text - текст сообщения */
function addActionBot(name, src){

        bot.action(name, async(ctx) => {
            
            try{

                if(src !== true){
                    await ctx.replyWithPhoto({
                        source: src
                    }); 
                    
                } // проверяем наличие фото
                // Делаем проверку чему = name 
                //console.log(name);
                if(name == 'Yn'){
                    for (let value of yntext.ynText) // перебор по количеству данных
                        await ctx.reply(value,{ 
                            disable_web_page_preview: true // уберает привью с сылки на сайта
                        });

                        ctx.replyWithHTML(text.whatsApp); //ссылка для перехода в вотсап

                        await ctx.reply(`Вернуться в /katalog`);

                } 
                else if (name == 'Sv') {
                    for (let value of svtext.svText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'St') {
                    for (let value of sttext.stText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'Ra') {
                    for (let value of ratext.raText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'koag') {
                    for (let value of koagtext.koagText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'Sd') {
                    for (let value of sdtext.sdText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'Ik') {
                    for (let value of iktext.ikText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                }
                else if (name == 'Pn') {
                    for (let value of pntext.pnText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                } 
                else if (name == 'An') {
                    for (let value of antext.anText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                } 
                else if (name == 'Tn'){
                    for (let value of tntext.tnText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                        
                } 
                else if (name == 'Nn'){
                    for (let value of nntext.nnText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                }
                else if (name == 'Ym'){
                    for (let value of ymtext.ymText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                }
                else if (name == 'Lo'){
                    for (let value of lotext.loText)
                        await ctx.reply(value,{
                            disable_web_page_preview: true
                        });
                        
                        ctx.replyWithHTML(text.whatsApp);

                        await ctx.reply(`Вернуться в /katalog`);
                }
            } 
            catch (e){
                console.error(e);
            }
        }); 
    }
    

    
addActionBot('Yn', /*img*/true);
addActionBot('Sv', /*img*/true);
addActionBot('St', /*img*/true);
addActionBot('Ra', /*img*/true);
addActionBot('koag', /*img*/true);
addActionBot('Sd', /*img*/true);
addActionBot('Ik', /*img*/true);
addActionBot('Pn', /*img*/true);
addActionBot('An', /*img*/true);
addActionBot('Tn', /*img*/true);
addActionBot('Nn', /*img*/true);
addActionBot('Ym', /*img*/true);
addActionBot('Lo', /*img*/true);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

