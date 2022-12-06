const { Kafka } = require('kafkajs');
const msg = process.argv[2];
run();
async function run (){
  try{
    const kafka = new Kafka({
      clientId: 'seb-demo',
      brokers: ['localhost:9092']
    })
    // const admin = kafka.admin();
    const producer = kafka.producer();
    console.log('Connecting.....');
    const partition = msg[0] < 'N' ? 0 : 1;
    await producer.connect();
    console.log('Connected.....');

    const result = await producer.send({
      topic: 'Users',
      messages: [ { "value": msg,
                    "partition": partition }]

    });

    console.log(`Sent Successfully ${JSON.stringify(result)}`);

    await producer.disconnect();

  }
  catch(ex){
    console.error(`Something bad happened${ex}`);
  }
  finally{
  }

}
