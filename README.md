# url-viewer

This tiny worker will render the contents of an HTML file at a URL passed to it.

There are two implementations:
* Cloudflare Worker
* Python using `http.server`

**Disclaimer:** You probably really definitely shouldn't use this. It's stupid and bad. :)

## Python

This implementation will run a HTTP server on port 8080

### Endpoints

- `/healthcheck` - Returns "I'm alive!" with response code 200.
- `/?url=http://some.url` - Returns the contents of the URL provided.

## Get started

```sh
docker build . -t pyurlviewer
docker run --rm -p 8080:8080 --name pyurlviewer pyurlviewer
```
