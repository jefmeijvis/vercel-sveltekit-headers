export default async function handler(req, res) 
{
    const dynamicCSP = `default-src 'self'; script-src 'self' 'unsafe-inline';`;
    res.setHeader('Content-Security-Policy', dynamicCSP);
    let randomNumber = Math.random();
    res.setHeader('JEF-DYNAMIC-HEADER-KEY', 'JEF-DYNAMIC-HEADER-VALUE-' + randomNumber);
    return await fetch(req);  
}
