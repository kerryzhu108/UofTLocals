# team36

# Phase 2

URL of website:

## No Account
Browse landing page
Filter businesess by name and catagory
Get details of any busienss by clicking on its image (View only)
Sign up or login through the top right button
## Student User
Created through the the "LOGIN/SIGNUP" button on the top right, then "New member? Sign up as a Student"
Leave reviews by clicking on the image of any business
View profile and upload profile image by clicking on their username

## Business User
Created through the the "LOGIN/SIGNUP" button on the top right, then "New member? Sign up as a Business"
Can edit their business information by clicking on their username
Can post new annoucements, respond to comments, and change their description
Can upload business image by going inside their business profile
Editing their business is only possible when they are looking at their own business

## Admin User



## Routes

### Announcements
Folder for managing business announcements

post /announcements
Creates a new announcement for a business, returns {success: true} if created successfully
Body:
{
    announcement: content (stirng)
}

### Auth
Folder for managing registeration and sessions


### Business
Folder for managing business interactions

**GET** /business/all

Gets all businesses in the database, returns list of all businesses if retrieved successfully. Empty body

**GET** /business/allannouncements

Gets all announcements in the database, returns a list of all announcements if retrieved successfully. Empty body

**DELETE** /business/deletebusiness/:id

Deletes a business from the database based on the id parameter provided, returns the business deleted if completed successfully. Empty body

**DELETE** /business/delete/:pid

Deletes an announcement from the announcements folder based on the pid parameter provided, returns the post deleted if completed successfully. Empty body

**DELETE** /business/delete/:bid/:pid

Removes a specific announcement from the business it belongs to and from the announcements folder, returns the updated business if completed successfully. Empty body

**GET** /business/:id

Gets information from a single business based on the id provided, returns the business if completed successfully. Empty body

**PATCH** /business

Changes the description of a business, returns {businessUpdated: true} if updated successfully. 
Body:
{
    content: content (String)
}

**POST** /business/image/:userid

Stores the image url to the cloudinary server, returns the URL of the image if successful. No body

**POST** /business/reply

Adds a reply to a user comment, returns {replied: true} if the comment was posted successfully. 
Body:
{
    commentid: commentid (String)
    content: content (String)
}


### Comment


### Review


### Root

### Student




# Phase 1
## High level summary:
* cd into 309frontend, then npm install && npm start will open up our application.
* The entry point is the landing page all visitors see, from there we can browse and filter avaliable bussinesses
* The Login/Sign up button allows us to login/create either an Admin account, Student account, or Business account
* Each account has access to different pages, they are explained below. 

To mimic a backend, we created slightly different versions of some pages to represent what different account types would see.
## Login and Sign up

**Description**: provides the ability for users to sign up and log in.

**Usage**: three different users are hard-coded into the app. They are:

* `username: user, password: user` a regular student user.
* `username: user2, password: user2` a business user.
* `username: admin, password: admin` an admin user.

Each level of user account will have different privileges, as outlined in other sections. 
Upon entering credentials to at the login page, located at `/login`, a simple verification will be done to check whether 
the given credentials match one of the three hard-coded users mentioned above. If so, the user will be redirected as 
appropriate. If not, a message will outline the error encountered.

**Sign up**: two separate sign up pages are included -- one for students and one for businesses. They require different 
information to be given. They are accessible at `/signup` and `/business-signup`. The given information will be checked 
for issues, such as a duplicate username. Note: signing up does not currently add a new user to the system -- only the 
three hard-coded users above may be used. Links at the bottom of the page allow navigation between the two sign up 
pages, and the login page mentioned above.

Both the login and sign up pages can be accessed using links in the header on the landing page. From logged-in pages, 
there will be an option to log out, which will redirect the user to the homepage.

## Admin-Panel:
Accessed either via /admin-panel or by logging in with admin credentials.

**Description:** the admin panel is where system administrators view all relevant data on the site. There are three major types of data stored here: applications to the website, existing businesses in the system, and posts in the system. 

**Business Applications Usage:** this interface allows for admin to accept or decline applications based off of clicking the checkmark or the x button. If accepted, the business will then be added to the existing businesses list on the right. If removed, the application is simply removed. Applications can be sorted by both date and name, and can be searched via the search bar.

**Businesses List Usage:** this interface allows for admin to route to the site specific page for businesses or to remove businesses from the site listings. Businesses can be sorted by both date and name, and can be searched via the search bar. Note that as of this phase, all business links are hard coded to go to the Caffeine Corner sample layout.

**Postings Usage:** this interface allows for the admin to manage postings on the site. Here, all postings are listed and can be sorted by name or date, or searched specifically by name. The postings can also be removed.

**Header:** as per all other views, there is a header which routes to the browse page keeping the admin logged in as a user. Login/Signup pages are not accessible as someone viewing this page is already logged in as an admin. There is also a logout route, which logs the user out and goes back to the landing page.

**Other Information:** the admin panel is directly accessed upon logging in as an admin.

## Business Profile
**Description**: Displays information for a given business: cover photo, description, business announcements, user comments.

**How to use**:

* If this business belongs to the business user, they have the ability to add announcements to their announcements box.

* Students have the ability to add comments to the comments box of a particular business page.

* Guests do not have the ability to post announcements or comments and may only view comments and announcements posted by other users.

**How to access**:
There are three hard-coded version of this page located at `/business-profile`, `/business-profile-user` and `business-profile-user2` which displays the appropriate version of the page depending on whichever user is logged in.

Business users can access their page from the top header after logging in or by clicking on any of the displayed businesses in the container. Only their business will take them to their business profile page once the backend is done. (Currently it's all of them)
## Student Profile

**Description**: a dashboard page where student users can edit their profile information, and view their past comments 
and reviews.

**Usage**: the student profile is accessible at `/student-profile` or by clicking "Edit Student Profile" after logging in. Once on the page, 
the method to edit information is similar to the sign up page -- although, the given password will be verified before 
making changes to the student's information. 

This hard-coded sample student profile page is accessible when logged-in as the student user, `username: user, password: user`.

## Third Party Libraries
React
