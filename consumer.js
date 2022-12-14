const { Kafka } = require('kafkajs');

run();
async function run (){
  try{
    const kafka = new Kafka({
      clientId: 'seb-demo',
      brokers: ['localhost:9092']
    })
    // const admin = kafka.admin();
    const consumer = kafka.consumer({"groupId": "test"});
    console.log('Connecting.....');

    await consumer.connect();
    console.log('Connected.....');

    await consumer.subscribe({
      topic: 'Users',
      fromBeginning: true

    });
    await consumer.run({
      eachMessage: async result => {
        console.log(`Received ${result.message.value} on partition ${result.partition}`);
      }
    });

    // await admin.createTopics({
    //   topics: [
    //     {
    //       "topic": "seb-demo",
    //       "numPartitions": 2
    //     }
    //   ]

    // await producer.disconnect();

  }
  catch(e){
    console.error(e);
  }
  finally{

  }

}
