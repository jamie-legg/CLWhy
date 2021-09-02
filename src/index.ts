import yargs from 'yargs';
import goodContent from './source.json';
import hashmap from './hashmap.json';
import {showHeader, showTips, showFinish, showSparkles} from './utils/banner';
import * as clipboardy from 'clipboardy';


const checkTag = (check:string):string | null => {
    const tags = goodContent.list.filter(({tag:t}) => t.includes(check.toLowerCase()));
    return tags.length > 0 ? tags[0].yan[Math.floor(Math.random()*tags[0].yan.length)] : null
}
const start = async () => {
    const options = await yargs(process.argv.slice(2)).argv;
    const copy = !!options.c
    const input = !!options.i

    if(input) {
        console.log("input mode, enter URL")
        const url = (input ? options.i : options._[0]) as string;
        console.log(
        yargs
        .command('get', 'make a get HTTP request', {
            url: {
            alias: 'u',
            default: 'http://yargs.js.org/'
            }
        })
        .help()
        .argv);
    }

    if(copy) {
        showSparkles();
        const specimen = (copy ? options.c : options._[0]) as string;
        const shortcut = checkTag(specimen)
        const output =  [...specimen.toLowerCase()].map(i=> {
            const hash = hashmap.filter(([l, h]) => l === i)
            return hash[0][1]
        }).join("")
        const final = shortcut? shortcut : output
        console.log(final);
        clipboardy.writeSync(final);
        showFinish()
    }
    
}

start();
