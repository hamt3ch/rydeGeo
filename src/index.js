import match from 'micro-match';
import { send } from 'micro';
import 'babel-core/register';
import 'babel-polyfill';

export default async (req, res) => {

  const userid = match('/:id', req.url)
  const method = req.method

  // query user information an return current location
  if(req.method === 'GET'){
    return send(res, 200, {'foo': 'get'})
  }

  // set current users current location
  if(req.method === 'POST') {
    return send(res, 200, {'foo': 'post'})
  }

  return send(res, 404);
}
