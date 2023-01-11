wipeOutOldBuild () {
    echo 'Wiping out old build directory'
    rm -rf ./_site/**
}
#pkill -9 esbuild
#pkill -9 node

#delete the files in the site dir
wipeOutOldBuild
#run eleventy
npx @11ty/eleventy
wrangler pages dev _site  --local --live-reload  &

if [[ $ELEVENTY_ENV == 'cypress' ]]
then
echo "wiping KV stores"
rm -rf ./.mf/**
echo "Running cypress tests"
npx cypress run --record --key 86650f1f-8d3c-4c96-a862-58cf46101a5b
exit
fi
