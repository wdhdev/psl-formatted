# PSL Minified
A minified version of the Public Suffix List.

## Pulling the file
You can pull the file from [psl.hrsn.dev/public_suffix_list.min.dat](https://psl.hrsn.dev/public_suffix_list.min.dat).

You can see the minifying script [here](https://github.com/wdhdev/psl-min/blob/main/scripts/minify.js). We have kept the `VERSION` and `COMMIT` comments so you can verify we have not modified the original rules.

The minified version of the PSL is automatically updated every 24 hours and is deployed to the server using the Docker image [william/psl-nginx](https://github.com/wdhdev/docker-images/tree/main/psl-nginx).

---

*This project is NOT associated or endorsed by the [Public Suffix List](https://publicsuffix.org). It is a community-run project.*
