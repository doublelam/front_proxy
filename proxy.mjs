import http from 'http';
import { mock } from './mock';

const keys = Object.keys(mock);

http.createServer((req, res) => {
  // console.log('resp', req)
  const [headers, body] = [req.headers, req.body];
  console.log('__line 8')
  const newOpt = {
    hostname: headers.host.includes('localhost') ? headers.host.replace(/:\d+/, '') : headers.host,
    port: headers.host.includes('localhost') ? 3000 : req.port,
    headers: headers,
    path: req.url,
    method: req.method,
  };
  console.log('______')

  for (const item of keys) {
    console.log('ifmatch', item, newOpt.path);
    const reg = new RegExp(item);
    if (reg.test(newOpt.path)) {
      try {
        mock[item].call(null, req, res);
      } catch (e) {
        console.warn('Mock Data Error: ', e)
      }
      return;
    }
  }

  console.log('newheader', newOpt)
  const requ = http.request(newOpt, resp => { 
    console.log('__________start request')
    let data = '';
    resp.setEncoding('utf8');
    resp.on('data', chunk => {
      data = data + chunk
    })
    resp.on('end', () => {
      res.writeHead(resp.statusCode, resp.headers);
      res.end(data)
    })
  })

  requ.on('error', e => {
    console.log('error', e)
  })
  if (req.body) {
    requ.write(req.body);
  }
  requ.end();
  setTimeout(() => {
    console.log('requ aborted')
    requ.abort();
  }, 15000);

}).listen(1234)

