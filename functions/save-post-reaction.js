/**
 * This function will be sent a post reaction in the form of a string and save it to the sqlite database with prisma
 */
exports.handler = async function (event) {
    const data = JSON.parse(event.body)
    console.log({data})
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Hello world!'}),
    };
  };