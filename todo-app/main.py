from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI() # create a new app

# use of pydantic for class for something
#for creating a to do list 
class Item(BaseModel):
    text: str = None
    is_done: bool = False

items = [] # todo items 

# create a new path in Fastapi
@app.get("/") # defines a path for our app for HTTP get method

def root(): # mawhin return function
    return {"Hello": "World"}

#Creating routes (for POST function to put in the items)
@app.post("/items")

def create_item(item: Item): # create item function
    # item: str for previous before using pydantic 
    items.append(item)
    return items

# for request and path parameters

@app.get("/items", response_model=list[Item])

def list_items(limit: int = 10):
    return items[0:limit]

# GET function to get the items for the files 
@app.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int) -> Item:
    if item_id < len(items):  
        return items[item_id]
    else: 
        raise HTTPException(status_code=404, detail="Item not found")    
        # For showing readable errors, if the value does not show, show this error. 
        # find status_code from searching in internet to know exactly which error to put

