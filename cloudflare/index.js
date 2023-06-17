addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    // Extract the URL parameter from the request
    const urlParam = new URL(request.url).searchParams.get('url')

    if (!urlParam) {
      return new Response('URL parameter not provided', { status: 400 })
    }

    // Fetch the HTML content from the provided URL
    const response = await fetch(urlParam)

    // Extract the HTML content
    const htmlContent = await response.text()

    // Return the HTML content as the response
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html' },
      status: 200
    })
  } catch (error) {
    return new Response('Error occurred while fetching or rendering HTML', { status: 500 })
  }
}
