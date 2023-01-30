# Crowdfund Portal

# Installation


## Github

If you do not have a GitHub account sign up for one [here](https://github.com/).

create a new repository using this [guide](https://docs.github.com/en/get-started/quickstart/create-a-repo)

Once you have done this simply add it as a remote

`git remote add <youroriginname> <githuburl>`


## Clone

clone the BuildingBlock crowdfund portal onto your local machine.

git clone  https://github.com/OrbitLabsDAO/buildingblockscrowdfund.git

finally push it to the repo you set up earlier

git push Github master


## Cloudflare

If you do not yet have a Cloudflare account please sign up by clicking on this [link](https://dash.cloudflare.com/sign-up?lang=en-US).


Click Pages from the menu on the left. 

![](https://imagedelivery.net/9dYZtR12J2uzlEZe4Joa5w/5c590986-f70c-46d5-7540-46cd284f0d00/public)

Once you are there you can use the following [guide](https://developers.cloudflare.com/pages/get-started/) to connect your git and add the project you just pushed.

Select 11.ty as the framework as shown in the image below

![](https://imagedelivery.net/9dYZtR12J2uzlEZe4Joa5w/77ae9dc2-d46a-4eb6-0480-85be2803b900/public)

then add the ENV vars by going clicking on pages/buildingblockscrowdfund/settings/environment variables and adding them as shown in the screenshot below

![](https://imagedelivery.net/9dYZtR12J2uzlEZe4Joa5w/ebd4fd7d-6c9b-45ce-e993-63d7ec6c6600/public)


## Create environment variables 

We have to rename file at the root of the project. These files contain the following environment variables.


_.env


to 

.env


APIURL=http://localhost:8789/api/

The API URL

# Production

Pushing the site to production requires a few more steps the first thing you have to do is push the project to your GitHub account if you make any code changes is easy just push 

git push origin master and it will update it on Cloudflare for you 












