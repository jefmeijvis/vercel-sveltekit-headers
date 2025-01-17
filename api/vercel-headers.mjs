export default async function handler(req, res) 
{
    const dynamicCSP = `default-src 'self'; script-src 'self' 'unsafe-inline';`;
    res.setHeader('Content-Security-Policy', dynamicCSP);
    let randomNumber = Math.random();
    res.setHeader('JEF-DYNAMIC-HEADER-KEY', 'JEF-DYNAMIC-HEADER-VALUE-' + randomNumber);



          // Get the full URL from the incoming request
      const url = req.url;

      // Forward the request using fetch to get the actual content
      const response = await fetch(url, {
        method: req.method,
        headers: req.headers,
        body: req.body,
      });

      // Send the actual response back to the client, along with the CSP header
      const responseBody = await response.text();
      res.status(response.status).setHeader('Content-Type', response.headers.get('Content-Type')).send(responseBody);
}
