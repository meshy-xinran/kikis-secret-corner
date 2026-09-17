import {flowerMessage,flowerName} from './flower-messages.js';
const authored=[["mentha", "love❤️"], ["maya", "see u among the star"], ["leah", "🩵"], ["Lisa", "have a good trip"], ["Mentha", "Always loved, in every little universe."], ["Mentha", "A little flower, an endless love."], ["Mia", "have a nice trip"], ["Mentha", "There is always a little light here for you."], ["kikiiloveyou", "always."]];
export const demoFlowers=Array.from({length:29},(_,id)=>({id,name:id<20?flowerName(id):authored[id-20][0],message:id<20?flowerMessage(id):authored[id-20][1],authored:true}));
