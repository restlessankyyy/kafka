const { Kafka } = require('kafkajs');
run();
async function run (){
  try{
    const kafka = new Kafka({
      clientId: 'seb-demo',
      brokers: ['20.234.113.65:9092']
    })
    const admin = kafka.admin();
    console.log('Connecting.....');

    await admin.connect();
    console.log('Connected.....');
    // A-M = 0 , N-Z = 1
    await admin.createTopics({
      topics: [
        {
          "topic": "seb-stuff",
          "numPartitions": 2
        }
      ]

    });
    console.log('Created Successfully.....');
    await admin.disconnect();

  }
  catch(e){
    console.error(e);
  }
  finally{
    process.exit(0);
  }

}
