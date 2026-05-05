from fastapi import FastAPI

app = FastAPI() # create a new app

# create a new path in Fastapi
@app.get("/") # defines a path for our app for HTTP get method
def root():
    return {"Hello": "World"}

