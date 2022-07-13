import {Na2Client} from '@/client.js';
import _log from '@utils/log.js';

// eslint-disable-next-line require-jsdoc
function log(msg: string): void {
	_log(`[Init]: ${msg}`);
}

// モジュール群のインポート
import {Ping} from '@modules/hooks/ping/index.js';
import {Dice} from '@modules/hooks/dice/index.js';
import {Translate} from '@modules/hooks/translate/index.js';
import {ColorPicker} from '@/modules/hooks/colorpicker/index.js';
import {Divination} from '@modules/hooks/divination/index.js';
import {Menu} from '@modules/hooks/menu/index.js';
import {Search} from '@modules/hooks/search/index.js';
import {EmojiReact} from '@modules/hooks/emoji-react/index.js';

// スラッシュコマンドあれこれ用
import {pingCommandSetter, Ping as PingCommand} from '@modules/commands/ping/index.js';
import {diceCommandSetter, Dice as DiceCommand} from '@modules/commands/dice/index.js';

// モジュール群のインスタンス化
// 上にあるほど高優先度
const hooks = [
	// mentionHook系
	new Ping(),
	new Dice(),
	new Translate(),
	new ColorPicker(),
	new Divination(),
	new Menu(),
	// streamHook系
	new Search(),
	new EmojiReact(),
	// interactionHook系
	new PingCommand(),
	new DiceCommand(),
];

// /コマンド登録用のオブジェクト群のインポート
const commands = [
	pingCommandSetter,
	diceCommandSetter,
];

log('Starting Na2Client...');
new Na2Client(hooks, commands);
