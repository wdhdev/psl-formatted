# PSL Minified
A minified version of the Public Suffix List.

## Pulling the file
You can pull the minified version of the PSL from: [psl.hrsn.dev/public_suffix_list.min.dat](https://psl.hrsn.dev/public_suffix_list.min.dat)

## FAQ
### How can I trust the minified version of the PSL?
We are fully open-source. You can see the minifying script [here](https://github.com/wdhdev/psl-min/blob/main/scripts/minify.js) and the Docker image we use for deploying the web server [here](https://github.com/wdhdev/docker-images/tree/main/psl-nginx).

### How often is the minified version updated?
It is automatically updated every 24 hours and is deployed to the server using the Docker image [william/psl-nginx](https://github.com/wdhdev/docker-images/tree/main/psl-nginx).

---

*This project is NOT associated with the [Public Suffix List](https://publicsuffix.org) project. It is a community-run project.*
