Install with `npm install`.

To start the project and replicate the issue, use `npm start`  (without 
electron) or `npm run start:electron` (with electron).

To build, run `npm run build:electron` - same issue should happen.

It is just a simple include as per documentation that causes this issue.
You can check in `app.component.ts` and uncomment either:

```
import AgoraRtcEngine from 'agora-electron-sdk';
```

or

```
import AgoraRtcEngine from 'agora-electron-sdk/js/AgoraSdk';
``` 

both are giving different errors. Details in `app.component.ts`.


The last version uses a custom webpack loader, which still didnt' solve the issue; 
for the stock Angular builder, just go back to commit 
[032a834e43db3a308e0cff47ba8779357a174631](https://github.com/grigger/agora-electron-angular-sample/tree/032a834e43db3a308e0cff47ba8779357a174631) 
