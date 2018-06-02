# Help Me Find Work

Help Me Find Work is a utility site for logging applications and cover letters sent for jobs.  In the world of recruiters and career sites you can quickly lose track of when or if you applied for a job and when that dream job comes along whether you already applied to that job or even if a recruiter did it for you.  

In an attempt to ramp up as quickly as possible and use the application myself, MVP will consist of manual entry and limited form fields.  Expanded forms, database functionality and API use/scraping will come later.

### Firebase Note

There is a missing file from the project at `src/firebase.js` to protect my API key until testing is done.  It should look something similiar to:
```
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: YOURAPIKEY,
  authDomain: YOURAUTHDOMAIN,
  databaseURL: YOURDATABASEURL,
  projectId: YOURPROJECTID,
  storageBucket: YOURSTOREAGEBUCKET (if not ""),
  messagingSenderId: YOURMESSAGINGSENDERID
};
firebase.initializeApp(config);

export default firebase;
```

## Technologies

* React 
* Create-React-App
* Firebase
