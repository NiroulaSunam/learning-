### Installation
pip install fastapi \
pip install uvicorn  --> server used to test and run fastapi applications

#### alt installation for fastapi workaround for not working
python -m pip install "fastapi[standard]" \
// needed this because the new version of python (3.14.) did not work at all

### To show the working
uvicorn main:app --reload

#### Post Function -- To test the post function (Put the item using curl in the Post function to put in the item)
-> Test the POST function \
curl -X POST -H "Content-Type: application/json" 'http://127.0.0.1:8000/items?item=apple'

#### Get Function -- To get the item from the items that have been put inside the item by using post function
-> Test the GET function for the content \
curl -X GET 'http://127.0.0.1:8000/items/0'


### Request and Path Parameters
curl -X GET 'http://127.0.0.1:8000/items?limit=3'

### Todo item 
from pydantic import BaseModel

```
class Item(BaseModel):
    text: str = None
    is_done: bool = False 
```

Now, for modeled object like the 'Item', we have to input it using the JSON payload in the request and not like adding at the end

curl -X POST -H "Content-Type: application/json" -d '{"text":"apple"}' 'http://127.0.0.1:8000/items'

### 127.0.0.1:8000
/docs --> to test the application easily without needing to write curl or work in terminal \
or use /redocs

## curl 
--> works as a bridge between terminal and a server by packaging your request into a standard format that the server understands. 
### How it handles different requests
While cURL defaults to a GET request if you only provide a URL, you can explicitly control the behavior using "flags" or options.

- GET (Retrieve): Used to fetch data. \
How it works: \
Just the URL. \
curl https://example.com.

- POST (Create): Used to send new data, like a signup form. \
How it works: \
Use -d for the data. \
curl -X POST -d "name=John" https://example.com.

- PUT (Update): Used to replace or update an existing resource. \
How it works: \
Use -X PUT and -d for the new data. \
curl -X PUT -d "name=Jane" https://example.com.

- DELETE (Remove): Used to delete a resource.
How it works: \
Use -X DELETE. \
curl -X DELETE https://example.com.

### The "Universal" Command Structure
To test almost anything, developers use this common template: \
curl -X <METHOD> <URL> -H <HEADERS> -d <DATA> \
-X [METHOD]: Tells the server what action you want to take (GET, POST, etc.). \
-H [HEADER]: Sends "meta-information," such as telling the server you are sending JSON data: -H "Content-Type: application/json". \
-d [DATA]: The actual "payload" or body of your request (like a username or a file). \
-v (Verbose): The "secret weapon" for testing. Adding -v shows you the entire "conversation" (headers sent and received), which is critical for debugging.

### Why it works for "everything"
- Protocol Support: It isn't limited to the web (HTTP). It can "speak" over 25 languages (protocols), including FTP for files and SMTP for email.
- Scriptable: Because it’s a command-line tool, you can write a script to test 1,000 requests in a row, which is impossible to do manually in a browser.
- Complete Control: You can fake your "User-Agent" (to make the server think you're using an iPhone) or send specific "Cookies" to stay logged in

#### cURL/Swagger: Tools to verify the "Logistics" are working before I build the UI (The Inspector). 

