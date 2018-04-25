# PMTC Tailwind
This is a fork of [jekyll-tailwind](https://github.com/taylorbryant/tailwind-jekyll).
This site uses Jekyll to build the site, TailwindCSS as the CSS framework, Gulp to run Autoprefixer & PurgeCSS to remove unused CSS classes.

## To build site
* `bundle install` to install Ruby gems
* `bundle update` to make sure all the ruby gems are up to date
* `yarn` to install all npm packages
* `gulp` to run tailwind through purgecss (which removed unused classes in CSS) builds site with Jekyll and serves it in your browser with browser-sync
