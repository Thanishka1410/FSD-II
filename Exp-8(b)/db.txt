use college
db.students.insert({ name: "Ravi", age: 20 })
db.students.insert({ name: "Sita", age: 21 })
db.students.find()
db.students.find().pretty()
db.students.update(
    { name: "Ravi" },
    { $set: { age: 22 } }
)
db.students.remove({ name: "Sita" })