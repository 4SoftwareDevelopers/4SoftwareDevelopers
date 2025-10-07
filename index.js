import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import ejs from 'ejs'
import getVideos from './service/videos.js'

const TEMPLATE_PATH = resolve('README.md.ejs')
const README_PATH = resolve('README.md')


const template = readFileSync(TEMPLATE_PATH)

let videos = await getVideos();

let templateData = {videos};
const templateString = template.toString()
const templateRendered = ejs.render(templateString, templateData)

writeFileSync(README_PATH, templateRendered);
