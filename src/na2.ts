import autobind from 'autobind-decorator';
// eslint-disable-next-line object-curly-spacing
import { EventEmitter } from 'events';
import * as discord from 'discord.js';

/**
 * Discord Client
 */
export default class なず extends EventEmitter {
  public client :discord.Client;

  /**
   * コンストラクタ
   * 接続を確立するやつ
   */
  constructor() {
    super();

    this.client = new discord.Client({
      intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
    });
    this.client.login(process.env.DISCORD_TOKEN);
    this.client.on('ready', this.onReady);
    this.client.on('messageCreate', this.onMessage);
  }

  /**
   * readyイベント
   */
  @autobind
  private onReady() {
    console.log(this.client.user?.tag);
    this.emit('ready');
  }

  /**
   * @param {discord.Message} receivedMessage 送りつけられてきたやつ
   * @param {string} message 送信するメッセージ
   */
  public reply(receivedMessage:discord.Message, message: string): void {
    receivedMessage.reply(message);
    return;
  }

  /**
   * messageCreateイベント
   * 今後はここでそれぞれの機能モジュールのところへ行くようにする。
   * コンストラクタでモジュールの読み込みをする。
   * @param {discord.Message} message
   */
  private onMessage(message: discord.Message) {
    if (message.author.bot) {
      return;
    }
    console.log(message);
    this.reply(message, 'おはようございます');
    return;
  }
}
