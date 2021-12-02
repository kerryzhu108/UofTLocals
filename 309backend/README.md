# UofT Locals Backend

## Quick Setup
### Setting Environment Variables
Create a `.env` file in the `309backend` directory with the following information:
```
PORT=5000
IP=localhost
MONGODB_URI=mongodb://localhost:27017/uoftlocals
SECRET_KEY=d23edfe12d983cc1fbd8852ecd570bf54735e9ba695ac6a27b8b7b27281b2f582bffd2c892c45ba863cd52d5c84b0ac765d719dfee118ebcce6064d4652b303d
```

**Note:** Now that `SECRET_KEY` has been exposed to the public, it should NOT be used in a production setting. Instead, a newly generated key (128 character hex string) should be used. For development purposes, using a known key is fine, however.

Ensure that `PORT` is different than the front end development port.

### Starting the server
1. Ensure you have a `mongodb` instance running.
2. Install necessary dependencies `npm install`
3. Run the server `npm start`