# Blog for Author
A blog website for author of blogs.

## Table of Contents
+ [General Info](#general-info)
+ [Technologies](#technologies)
+ [Setup](#setup)
+ [How to Use](#how-to-use)
+ [Features](#features)
+ [Additional Info](#additional-info)

## General Info
This is a frontend project build using React and follows JAMstack architecture. This project is only for the author of the blog that allows editing and deleting functionalities while there is another website that is for the readers of the blog.

## Technologies
+ React
+ React Routers
+ APIs
+ JAMstack Architecture

## Setup
This website uses APIs from (Blog API)[https://github.com/Tanishka-2000/blog-api] project. So you need to setup that project first in order to run this project. Go to blog (Blog API)[https://github.com/Tanishka-2000/blog-api] to setup that. Once that done, to run this project locally

```
# clone this repository
git clone https://github.com/Tanishka-2000/blog-website-admin.git

# Go into the repository
cd blog-website-admin

# Install dependencies
npm install
```

## How to Use
You need to change the url used to fetch data in home.jsx (line 7) and post.jsx(line 7, 13, 28) to the url on which you serve your blog APIs. For example if you are server is listening on 'http://localhost:5173/' then 'https://blog-api-vasl.onrender.com/api/admin/posts' will become 'http://localhost:5173/api/admin/posts'.

```
# Start the site
npm run dev
```
You are required to login to access your blogs but no sign route is provided by blog API. So you need to have a document in 'users' collection in your database as stated in (Blog API's)[https://github.com/Tanishka-2000/blog-api] readme page.

## Features
+ User is required to authenticate before accessing blogs.
+ Both published and unpublished blogs are listed on home page.
+ User can edit any blog and change its status from published to unpublished or vice versa.
+ User can access all comments on a particular blog as well as delete any comment.

## Additional Info
My complete blog website project consist of three parts, one backend that serves APIs for my blog and two different front-ends for accessing and editing my blog posts. You will find the link to other two below.
+ (Blog API)[https://github.com/Tanishka-2000/blog-api]
+ (Blog Website)[https://github.com/Tanishka-2000/blog-website]