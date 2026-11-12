use college
db.createCollection("students")
show collections
db.students.insertOne({ name: "Ravi", age: 20 })
db.students.drop()
db.dropDatabase()
show dbs