export default async function handler(req, res) {
    // Dynamically set CSP based on environment or request headers
    const dynamicCSP = `default-src 'self'; script-src 'self' 'unsafe-inline';`;
    res.setHeader('Content-Security-Policy', dynamicCSP);

    let randomNumber : number = Math.random();
    res.setHeader('VERCEL-DYNAMIC-HEADER-RANDOM-NUMBER', randomNumber);


    res.status(200).send('CSP header set dynamically');
  }
  