#!/bin/sh

bring() {
  git clone "https://github.com/extra-entries/$1"
  mv "$1/index.js" "$1.js"
  mv "$1/README.md" "$1.md"
  rm -rf "$1"
}

bring "is"
bring "map"
bring "join"
bring "reduce"
bring "every"
bring "some"
bring "equal"
bring "find-all"
bring "includes"
bring "find"
bring "filter"
bring "for-each"
bring "values"
bring "keys"
bring "find-key"
bring "key-of"
bring "find-all-keys"
bring "keys-of"
