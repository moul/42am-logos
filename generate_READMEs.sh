#!/bin/sh

ACCOUNT=42am
REPO=logos

pwd=$(pwd)
for dir in * */*; do
    if [ -d $pwd/$dir ]; then
        cd $pwd/$dir
        (
            echo  "$dir"
            echo "$dir" | sed "s/./=/g"
            echo
            for image in *.png; do
                if [ -f $image ]; then
                    echo "<a href=\"/$ACCOUNT/$REPO/raw/master/$dir/$image\"><img src=\"/$ACCOUNT/$REPO/raw/master/$dir/$image\" width=\"400px\" /></a>"
                fi
            done
            #for image in *.svg; do
            #    if [ -f $image ]; then
            #        echo "<embed src=\"/$ACCOUNT/$REPO/raw/master/$dir/$image\" type=\"image/svg+xml\" width=\"400px\" />"
            #    fi
            #done
            echo
            ) > $pwd/$dir/README.md
    fi
done