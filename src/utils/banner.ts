import * as fs from 'fs';
import * as path from 'path';
import gradient from 'gradient-string'

const getFileString = (s: string): string => fs.readFileSync(s).toString();

const getRandomFileStringFromDir = (dir:string): string => {
    const files = fs.readdirSync(dir).map(file => path.join(dir, file))
    return getFileString(files[Math.floor(Math.random()*files.length)])
};

export const showSparkles = async () => {
    let sparklesDir = './src/templates/sparkles';
    const fileOutput = getRandomFileStringFromDir(sparklesDir);
    console.log(gradient.retro.multiline(fileOutput));
}

export const showHeader = async () => {
    let headersDir = "./src/templates/banners";
    const fileOutput = getRandomFileStringFromDir(headersDir);
    console.log(gradient.fruit.multiline(fileOutput));
}

export const showTips = async () => {
    let tipsDir = './src/templates/tips';
    const fileOutput = getRandomFileStringFromDir(tipsDir);
    console.log(gradient.cristal(fileOutput));
    
}

export const showFinish = async () => {
    let finishDir = './src/templates/finish';
    const fileOutput = getRandomFileStringFromDir(finishDir);
    console.log(gradient.teen.multiline(fileOutput));
}





