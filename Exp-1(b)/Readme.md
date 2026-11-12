Commands :
npm init-y
npm install express
node app.js

1. POST – Add student

POST
 http://localhost:3000/students

Select Body → raw → JSON and enter:
{
  "id": 3,
  "name": "Arun"
}


Expected response:

Student added successfully

2. GET – Retrieve students

GET
 http://localhost:3000/students

Expected output:
[
  {"id":1,"name":"Ravi"},
  {"id":2,"name":"Sita"},
  {"id":3,"name":"Arun"}
]



3. DELETE – Delete student

DELETE
 http://localhost:3000/students/2

Expected response:

Student deleted successfully

Now GET again to see the remaining records.