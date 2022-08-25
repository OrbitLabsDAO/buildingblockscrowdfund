this is a 11.ty template with sanity admin

it is based on the santiy starter template and modified to my requirements

https://github.com/sanity-io/sanity-template-eleventy-blog/tree/55a9cfbd5e525070a44de68b3e7357e157e1bd70

It uses cloudflare pages for hosting, github to store the repo, sanity for the CMS / API and eleventy for the JAM frontend.

It is all in one repo can can be hosted fully in cloudflare.  


Other links

https://www.sanity.io/
https://www.11ty.dev/
https://pages.cloudflare.com/


**Usage**

````
git clone https://github.com/cryptoskillz/sanity_11ty_template.git
cd sainity_11ty_template
npm install
````

Copy across the html file into a folder for HTML (I like it there reference but not required)

**Set up layout**

In includes dir create file called layout.njk
Copy the full html across


I use http-server (https://www.npmjs.com/package/http-server_ as it works better for me that eleventy —serve but use what you want i am not your boss.
This is a MVP deploy as things evolve I would use CDN’s, image can, bundlers etc but for this use case I will let cloud flare handle all of that as it does it great.

**CMS**

***STRAPI***

Remove from eleventy.js

````
eleventyConfig.addFilter('sanityToHTML', function(value) {
    return blocksToHtml({
      blocks: value,
    })
  })
````

Remove api.sanity.js_
Rename api.strapi.js tos api.js
Remove api.strapi.js 
Rename api.sanity.js_ to api.js
Rename _env to .env
Remove the sanity env vars
Install strapi using this guide (we are going to host on heroku) https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html



***SANITY***

```
sanity init
sanity start
````
Add a post from http://localhost:3333/
````
Close it ctrl -c
````

````
Sanity manage 
	get project id
	get dataset 
	create a token
````

Open api.js in _data directory and remove the comment

Rename _env to .env
Remove the straps env vars

Add the sanity details as above here

````
Sanity deploy
Update api 
````

Remove post detail from .eleventyingore

***CLOUDFLARE***

Create new cloud flare page and add it to the repo
Create a deploy hook
Add this to sanity


We done.
