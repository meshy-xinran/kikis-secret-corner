import test from 'node:test';
import assert from 'node:assert/strict';
import {needsLandscape} from '../src/orientation-gate.js';
const phone={coarse:true,shortSide:390,width:390,height:844,orientation:'portrait-primary'};
test('portrait phones are gated; landscape phones and desktops can enter',()=>{
 assert.equal(needsLandscape(phone),true);
 assert.equal(needsLandscape({...phone,orientation:'landscape-primary'}),false);
 assert.equal(needsLandscape({...phone,coarse:false}),false);
 assert.equal(needsLandscape({...phone,shortSide:768}),false);
});
test('keyboard viewport changes do not override physical orientation',()=>{
 assert.equal(needsLandscape({...phone,width:844,height:210,orientation:'landscape-primary'}),false);
 assert.equal(needsLandscape({...phone,width:390,height:180}),true);
});
test('older Safari orientation angle is supported',()=>{
 assert.equal(needsLandscape({...phone,orientation:undefined,legacyAngle:90}),false);
 assert.equal(needsLandscape({...phone,orientation:undefined,legacyAngle:0}),true);
 assert.equal(needsLandscape({...phone,orientation:undefined,legacyAngle:undefined}),true);
});
