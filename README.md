This repository contains the implementation of the Stage 0 task for the HNG Internship (HNGi13), where I built a RESTful /me endpoint that returns my profile information along with a live cat fact fetched from an external API.

✅ Requirements Met
✅ GET /me endpoint returning 200 OK
✅ Response in exact required JSON format
✅ Content-Type: application/json header
✅ Dynamic UTC timestamp in ISO 8601 format (updates on every request)
✅ Fresh cat fact from https://catfact.ninja/fact on every request
✅ Graceful fallback if the Cat Facts API fails
✅ No caching — new fact per request
✅ Hardcoded user info (as permitted for this task)
🚀 Live Endpoint
🔗 Deployed URL:
https://backend-stage-0-task-production.up.railway.app/me

Example response:

json


1
2
3
4
5
6
7
8
9
10
⌄
⌄
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T14:23:17.892Z",
  "fact": "Cats have five toes on their front paws and four on the back."
}

🛠️ Local Setup
Prerequisites
Node.js (v18 or higher)
npm
Steps
Clone the repository
bash


1
2
git clone https://github.com/your-username/hng-stage0.git
cd hng-stage0
Install dependencies
bash


1
npm install
Update your personal info
Open index.js and replace these values:
js


1
2
3
const USER_EMAIL = 'your.email@example.com';    // ← YOUR EMAIL
const USER_NAME = 'Your Full Name';             // ← YOUR NAME
const USER_STACK = 'Node.js/Express';           // ← YOUR STACK
Run the server
bash


1
npm start
Test the endpoint
Visit in your browser or use curl:
bash


1
curl http://localhost:3000/me
📦 Dependencies
express — Web framework
axios — HTTP client for fetching cat facts
Install with:

bash


1
npm install express axios
🌐 Deployment
Deployed on Railway .

To deploy on Railway:
Push this code to a public GitHub repository
Go to railway.app
Click "New Project" → "Deploy from GitHub"
Select your repository
Click "Deploy"
Copy your live endpoint URL (e.g., https://hng-stage0.up.railway.app/me)
💡 No environment variables needed — all user data is hardcoded per task simplicity. 

🧪 Testing
Ensure your endpoint:

Returns HTTP 200
Has Content-Type: application/json
Contains all required fields
Shows a new timestamp on every refresh
Shows a (usually) new cat fact on every request
Still works if you disconnect from the internet (uses fallback fact)
📝 Notes
This implementation strictly follows the Stage 0 task specification .
A fallback cat fact is used if the external API fails, ensuring the response always matches the required schema.
No extra routes, middleware, or features are added — only what’s required.
📣 Submission
GitHub Repo: https://github.com/Al-ameen24434/backend-stage-0-task
Live API: https://backend-stage-0-task-production.up.railway.app/me
