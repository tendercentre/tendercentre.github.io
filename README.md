# PMTC Tailwind
Built using [jekyll-tailwind](https://github.com/taylorbryant/tailwind-jekyll).
This site uses Jekyll to build the site, TailwindCSS as the CSS framework, Gulp to run Autoprefixer & PurgeCSS to remove unused CSS classes.

## To build site
`bundle install ; bundle update ; yarn ; jekyll build ; gulp`

## To deploy site
`jekyll build ; gulp css jekyll-build`
