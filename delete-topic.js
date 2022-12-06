// delete a topic from kafka

const { Kafka } = require('kafkajs');
run();
async function run (){

  try{

    const kafka = new Kafka({
      clientId: 'seb-demo',
      brokers: ['localhost:9092']
    });
    const admin = kafka.admin();
    console.log('Connecting.....');

    await admin.connect();
    console.log('Connected.....');
    await admin.deleteTopics({
      topics: [
      
        { 
          "topic": "seb-demo"
        }
      ]

    });
}

catch(e){
  console.error(e);
}
finally{
  process.exit(0);
}

}