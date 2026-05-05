pip install fastapi
pip install uvicorn  // server used to test and run fastapi applications

python -m pip install "fastapi[standard]". // needed this because the new version of python (3.14.) did not work at all

uvicorn main:app --reload