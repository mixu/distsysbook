# Distributed systems: for fun and profit

Read the book here: http://book.mixu.net/distsys/

# Notes

I've added this repository to make it easier to work with the book, if you feel like it.

Writing a patch should be easy: edit the markdown files under `./input/` and file a pull request; I'll handle the rest.

I didn't include the commits from prior to the release, because writing is a messy and painful process of revisions, deletions and rethinking things.

    git shortlog -sn

tells me that I made 205 commits between October 2012 (1st commit was in September) and September 16th 2013 to write this.

# Directory structure

The content of the book is in `./input/`. To generate the book:

    npm install
    make build

which generates the output in `./output/`.

To rebuild the .epub and .mobi files:

    make ebook

You need to install Calibre first for the HTML to epub/mobi conversion.

# Thanks

Many many thanks to: logpath, alexras, globalcitizen, graue, frankshearar, roryokane, jpfuentes2, cmeiklejohn, stevenproctor and eos2102 for their help!

# Licence

This book is available for free, but what I've written remains mine.

Translations: as long as the result made is available for free (you can have ads) I welcome translations.

Other use: contact me; as long as your intentions are good I'd be happy to figure out something. I'm not looking to make money from the book but I don't want it to be republished without my permission.

# Icons

Some icons by <a href="http://p.yusukekamiyamane.com/">Yusuke Kamiyamane</a>. Licensed under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>.

Git Logo by Jason Long is licensed under the Creative Commons Attribution 3.0 Unported License.
