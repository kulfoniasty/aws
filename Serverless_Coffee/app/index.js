

module.exports.get = (event, context, callback) => {
  callback(null, {statusCode: 200, body: JSON.stringify({text: 'yay!'})});
};