# What is MongoDB?
## MongoDB is a popular open-source NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like documents, making it suitable for a wide range of use cases.

# How does MongoDB differ from traditional relational databases?
## MongoDB is schema-less and uses a document-based data model, whereas relational databases use a tabular structure with fixed schemas. MongoDB is more flexible and scalable for certain use cases, but relational databases are often preferred for complex transactions and strict data consistency requirements.

# What is a replica set in MongoDB?
## A replica set in MongoDB is a group of MongoDB instances that maintain the same data set. It provides high availability and redundancy by replicating data across multiple nodes. In the event of a node failure, one of the secondary nodes can be elected as the new primary node.

# What is sharding in MongoDB?
## Sharding in MongoDB is the process of distributing data across multiple servers to improve scalability. Each shard contains a subset of the data, and MongoDB's router, called the mongos, routes queries and write operations to the appropriate shards.

# What is the aggregation framework in MongoDB?
## The aggregation framework is a powerful tool in MongoDB for performing data aggregation operations, such as grouping, filtering, and computing aggregate values (e.g., sum, average) on collections of documents. It provides an alternative to map-reduce for data aggregation tasks.

# What are some best practices for MongoDB performance optimization?
## Best practices for MongoDB performance optimization include designing efficient schemas, creating appropriate indexes, using the aggregation framework for complex queries, distributing data across shards for scalability, and monitoring and tuning MongoDB deployment for optimal performance.

# What is indexing?
## Indexing in MongoDB is a mechanism for improving query performance by creating indexes on fields in a collection. Indexes allow MongoDB to quickly locate documents based on the values of indexed fields, similar to how indexes work in traditional relational databases.
### Creating Indexes:
You can create an index on the username field to improve query performance.
// Create an index on the 'username' field
db.users.createIndex({ username: 1 });
This command creates a single-field index on the username field in ascending order (1 indicates ascending order, -1 would indicate descending order).
### Query Optimization:
Once an index is created, MongoDB can use it to quickly find documents that match the query criteria.
### Compound Indexes:
MongoDB also supports compound indexes, which are indexes that include multiple fields. Compound indexes can further improve query performance for queries that involve multiple fields.
// Create a compound index on 'username' and 'email' fields
db.users.createIndex({ username: 1, email: 1 });
### Index Management:
MongoDB allows you to manage indexes by creating, dropping, and listing indexes using various methods provided by the MongoDB shell or drivers.
Proper indexing can significantly improve the speed of query execution, especially for large collections or frequently accessed data.

# Pagination:
## Pagination is a technique used to divide a large dataset into smaller, more manageable chunks or pages for displaying to users.

# join two collwction in MongoDB

//students
[
  { "_id": 1, "name": "Alice", "course_id": 101 },
  { "_id": 2, "name": "Bob", "course_id": 102 }
]
//courses
[
  { "_id": 101, "course_name": "Math" },
  { "_id": 102, "course_name": "Physics" }
]

db.students.aggregate([
  {
    $lookup: {
      from: "courses",         // The collection you're joining with
      localField: "course_id", // Field in 'students' to match
      foreignField: "_id",     // Field in 'courses' to match
      as: "course_info"        // Name for the output
    }
  }
])

output:
[
  {
    "_id": 1,
    "name": "Alice",
    "course_id": 101,
    "course_info": [
      { "_id": 101, "course_name": "Math" }
    ]
  },
  {
    "_id": 2,
    "name": "Bob",
    "course_id": 102,
    "course_info": [
      { "_id": 102, "course_name": "Physics" }
    ]
  }
]
