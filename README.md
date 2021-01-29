To start the project and replicate the issue, use `npm start`  (without 
electron) or `npm run start:electron` (with electron).

To build, run `npm run build:electron` - same issue should happen.

It is just a simple include as per documentation that causes this issue.
You can see it in `app.component.ts` and uncomment either:

```
import AgoraRtcEngine from 'agora-electron-sdk';
```

or

```
import AgoraRtcEngine from 'agora-electron-sdk/js/AgoraSdk';
``` 

both are giving different errors. Details in `app.component.ts`.
