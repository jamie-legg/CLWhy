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

    if(!copy) {
        showSparkles();
        showHeader();
        showSparkles();
    }

    const specimen = (copy ? options.c : options._[0]) as string;
    const shortcut = checkTag(specimen)
    const output =  [...specimen.toLowerCase()].map(i=> {
        const hash = hashmap.filter(([l, h]) => l === i)
        return hash[0][1]
    }).join("")

    const final = shortcut? shortcut : output

    console.log(final);
    if(copy) clipboardy.writeSync(final);
    
    copy? showFinish() : showTips();
    
}

start();
