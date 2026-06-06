from fastapi import FastAPI

# for connecting backend with frontend without getting CORS errors 
from fastapi.middleware.cors import CORSMiddleware

# Pydantic is a library that validates data. 
from pydantic import BaseModel

# Defines the shape of data we expect to receive. 
class TodoCreate(BaseModel):
    text: str

## creating an instance of FastAI. This app object is the entire web server - it will receiver requests and route them to the right function
app = FastAPI()

## CORS Middleware to talk to frontend -- dont know how it works yet though
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

## decorator - tells FastAPI when someone sends a GET request to the / path, run the function below this line. 
@app.get("/")
## python function 
def read_root():
    return {"message": "Hello, World!"}

todos = []
counter = 1

@app.get("/todos")
def get_todos():
    return todos

@app.post("/todos")
def create_todo(todo: TodoCreate): # FastAPI sees that this function expects TodoCreate object, so it automatically reads the request body, parases the JSON, and validates it. 
    global counter # to change the counter in the global and not create a local one
    new_todo = {"id": counter, "text": todo.text} # creating a dictionary with id and text value from the request
    todos.append(new_todo)
    counter += 1
    return new_todo

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    global todos
    todos = [t for t in todos if t["id"] != todo_id] # get a list without it and save the lists as todos itself (counterproductive for large scale)
    return {"message": "Deleted"}

@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, todo: TodoCreate):
    for t in todos:
        if t["id"] == todo_id:
            t["text"] = todo.text
            return t
    return {"error": "Todo not found"}