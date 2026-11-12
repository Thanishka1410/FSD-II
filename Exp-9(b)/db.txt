use college
db.students.insertMany([
    { name: "Ravi", age: 20, marks: 80 },
    { name: "Sita", age: 21, marks: 90 },
    { name: "Arun", age: 19, marks: 75 },
    { name: "Priya", age: 20, marks: 85 }
])
// find: retrieve documents
db.students.find()
db.students.find({ marks: { $gt: 80 } })
// limit: show at most two documents
db.students.find().limit(2)
// sort: 1 = ascending, -1 = descending
db.students.find().sort({ age: 1 })
db.students.find().sort({ marks: -1 })
// createIndex: ascending index on name
db.students.createIndex({ name: 1 })
// aggregate: calculate average and highest marks
db.students.aggregate([
    {
        $group: {
            _id: null,
            averageMarks: { $avg: "$marks" },
            highestMarks: { $max: "$marks" }
        }
    }
])