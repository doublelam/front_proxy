export const send = (res, json) => {
  const jsonString = JSON.stringify(json);
  res.setHeader('content-type', 'application/json');
  res.end(jsonString)
  return;
}