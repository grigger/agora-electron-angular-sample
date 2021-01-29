import { Component } from '@angular/core';

// Uncommenting the below won't work
// import AgoraRtcEngine from 'agora-electron-sdk';
//
// Error is:
// ERROR in node_modules/agora-electron-sdk/types/Renderer/index.d.ts:2:30 - error TS2307: Cannot find module './SoftwareRenderer' or
// its corresponding type declarations.
//
// import SoftwareRenderer from './SoftwareRenderer';
//

// Importing the JS directly won't also work
import AgoraRtcEngine from 'agora-electron-sdk/js/AgoraSdk';
//
// ERROR in ./node_modules/agora-electron-sdk/js/Api/index.js
// Module not found: Error: Can't resolve '../../build/Release/agora_node_ext' in
// '/Users/george/code/dhani/agora-sdk-sample-app/node_modules/agora-electron-sdk/js/Api'


console.log(AgoraRtcEngine);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agora-sdk-sample-app';
}
