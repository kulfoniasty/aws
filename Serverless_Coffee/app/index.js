

module.exports.get = (event, context, callback) => {
  callback(null, {statusCode: 200, body: JSON.stringify({text: 'yay!'})});
};

module.exports.onDbChange = (event, context, callback) => {
  console.log(event);
  console.log(event.Records[0].dynamodb);
  callback(null, {statusCode: 200, body: event});
};