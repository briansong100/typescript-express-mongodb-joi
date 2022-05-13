# typescript-express-mongodb-joi
Server using express, mongo db, Typescript and Joi for validation

## Author
1 Get all authors  
  http://localhost:9090/authors/get  
  
2 Get author by id  
  http://localhost:9090/authors/get/authorid    
  body json { "name":"Brian Song" }
  
3 Create author  
  http://localhost:9090/authors/create  
  
4 Update author  
  http://localhost:9090/authors/update/authorid  
  body json { "name":"Brian Song II" }
  
5 Delete author  
  http://localhost:9090/authors/delete/authorid
  
## Book
1 Get all books  
  http://localhost:9090/books/get
  
2 Get book by id
  http://localhost:9090/books/get/bookid  
  
3 Create book  
  http://localhost:9090/books/create  
  body json  { "title":"Golden Section", "author":"627e479cdc47aa41cb16dbe9"}
  
4 Update book  
  http://localhost:9090/books/update/bookid  
  
5 Delete book  
  http://localhost:9090/books/delete/bookid
  
