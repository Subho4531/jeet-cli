import boxen from 'boxen';
import { COLORS, Url , Icons } from '../assets/constants.js';
import { instagram } from 'gradient-string';
import { Config } from '../assets/constants.js';

export function ProfileCard() {
    

    let content = ""
    
    content += `\n${COLORS.sparkle('✨')} ${COLORS.subtitle(Config.subtitle)} ${COLORS.sparkle('✨')}\n`
    content += `${COLORS.divider('━'.repeat(Config.subtitle.length-1))}\n\n`
    
    const linkEntries = Object.entries(Url);
    
    linkEntries.forEach(([label, data], index) => {
        if(index <4){

            const isLast = index === linkEntries.length - 1;
            const icon = Icons[label] || '';
            const labelText = COLORS.label(label)
            const url = COLORS.link(data)
            
            content += `${icon} ${labelText.padEnd(11)} → ${url}`
            if (!isLast) content += "\n"
        }
        
    })
    
    content += "\n"
const title = `✨ ${COLORS.title(Config.title)} ✨`

console.log(boxen(content, {
    padding: Config.padding,
    margin: 1,
    borderStyle: Config.borderStyle,
    textAlignment: 'center',
    borderStyle: 'round',
    borderColor: '#ff00f2',
    title,
    subtitle:Config.subtitle,
    titleAlignment: 'center',

}));
}