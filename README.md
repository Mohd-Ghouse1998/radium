TOPIC: Mongoose-Reference1

- For this assignment you have to create a new branch - assignment/refPopulate
- Please make sure you rename the collections. Books to ‘myBook’. Authors to ‘myAuthor’
- Your myAuthor document should look like this (no author_id anymore)
 	{ 
_id: ObjectId("61951bfa4d9fe0d34da86829"),
	author_name:"Chetan Bhagat",
	age:25,
	address:"New delhi"
	}
- Your myBook document should look like this. The author property is a reference to myAuthor collection. 
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Two states",
	author:"61951bfa4d9fe0d34da86829",
	price:50,
	ratings:4.5,
}


1. Write a create author api that creates an author from the details in request body
2.  Write a create book api that takes author from the request body. You have to first check if this is a valid authorId. A valid authorId is which is present in your authors collection. 
3. Write a get books api that fetches all the books along with their author details (you have to populate author)

