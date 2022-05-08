export default async (req, res) => {
    /* remove cookies from request header */
    res.setHeader('Set-Cookie', [
        `authorization=deleted; Max-age=-1; path=/`,
        `token=deleted; Max-age=-1; path=/`
    ]);
  
    return res.redirect('/')
  }