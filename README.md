# apiTask

*********Guidance*********

TO CREATE A USER || SIGN UP GOTO ->

host: localhost:3000 || your hostname
endpoint: /api/v1/user/signup

if in postman
select post and use the link from above
go to body => raw => json
In body section include:
{
   "name": 		"yourname",
   "email": 		"your@email.com",
   "password": 		"yourpassword",
   "passwordConfirm": 	"yourpassword"
}

note: 	Email must be unique, u cant use same email to create two users
	password must be at least 8 characters long, 
	passwordConfirm and password must be same

TO LOG USER IN || SIGN IN GOTO ->

host: localhost:3000 || your hostname
endpoint: /api/v1/user/login

if in postman
select post and use the login link
go to body => raw => json
In body section include:
{
   "email":	"your@email.com",
   "password":	"yourpassword"
}

note:   You must use the email you signed up from,
	You must use the password you used while signing up



*********THANK YOU*********
