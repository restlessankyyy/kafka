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
    const consumer = kafka.consumer();
    console.log('Connecting.....');

    await consumer.connect();
    console.log('Connected.....');

    await consumer.subscribe({
      topic: 'seb-demo',
      fromBeginning: true

    });
    await consumer.run({
      eachMessage: async result => {
        console.log(`Received ${result.message.value}`);
      }
    });

    // await admin.createTopics({
    //   topics: [
    //     {
    //       "topic": "seb-demo",
    //       "numPartitions": 2
    //     }
    //   ]

    console.log('Created Successfully.....');
    // await producer.disconnect();

  }
  catch(e){
    console.error(e);
  }
  finally{
    process.exit(0);
  }

}
