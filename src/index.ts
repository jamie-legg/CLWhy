import yargs from 'yargs';
import goodContent from './source.json';
import hashmap from './hashmap.json';
import serif_map from './serif_map.json';
import san_serif_map from './san_serif_map.json';
import {showHeader, showTips, showFinish, showSparkles} from './utils/banner';
import * as clipboardy from 'clipboardy';


const checkTag = (check:string):string | null => {
    const tags = goodContent.list.filter(({tag:t}) => t.includes(check.toLowerCase()));
    return tags.length > 0 ? tags[0].yan[Math.floor(Math.random()*tags[0].yan.length)] : null
}
const start = async () => {
    const options = await yargs(process.argv.slice(2)).argv;
    
    const copy = !!options.c
    const san_serif = !!options.s

    if(copy) {
        const map = san_serif ? san_serif_map : serif_map;
        const specimen = (copy ? options.c : options._[0]) as string;
        const output =  [...specimen].map(i=> map.filter(([l, h]) => l === i)[0][1]
        ).join("")
        console.log(output);
        clipboardy.writeSync(output);
    }
    
}

start();
