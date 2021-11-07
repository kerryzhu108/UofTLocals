# team36
## Admin-Panel:
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

Users can access this page from the browse section (in the landing page). Business users can also access their pages from their profile in the header (once they're logged in).

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
for issues, such as a duplicate username. Links at the bottom of the page allow 
navigation between the two sign up pages, and the login page mentioned above.

Both the login and sign up pages can be accessed using links in the header on the landing page.

## Student Profile

**Description**: a dashboard page where student users can edit their profile information, and view their past comments 
and reviews.

**Usage**: the student profile is accessible at `/student-profile`. Once on the page, 
the method to edit information is similar to the sign up page -- although, the given password will be verified before 
making changes to the student's information. 

This hard-coded sample student profile page is accessible when logged-in as the student user, `username: user, password: user`.
