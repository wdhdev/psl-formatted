# PSL: Formatted
A project with the aim of providing the Public Suffix List in different formats.

## Pulling the formatted files
You can pull the formatted versions of the PSL from: [psl.hrsn.dev](https://psl.hrsn.dev), simply select the format you want and the copy the URL!

## FAQ
### How can I trust the formatted versions of the PSL?
We are fully open-source. You can see the different formatting scripts [here](https://github.com/wdhdev/psl-min/tree/main/scripts) and the Docker image we use for deploying the web server [here](https://github.com/wdhdev/psl-formatted/blob/main/Dockerfile), as well as the NGINX config [here](https://github.com/wdhdev/psl-formatted/blob/main/nginx.conf).

### How often are the formatted versions updated?
All formats are automatically updated every 24 hours via GitHub Actions and are automatically deployed to `psl.hrsn.dev`.

---

*This project is NOT associated nor endorsed by the [Public Suffix List](https://publicsuffix.org) project.*
