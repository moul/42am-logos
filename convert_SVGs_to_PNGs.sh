#!/bin/sh

for image in $(find . -type f -name "*.svg"); do
    echo $image
    dest=$image.png
    convert $image $dest 2>/dev/null
    qlmanage -t -s 1000 -o $(dirname $dest) $image
done
