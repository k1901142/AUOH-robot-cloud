const mqtt_client = mqtt.connect('wss://APP_NAME.herokuapp.com');

mqtt_client.on('connect', () => {
 console.log('connected to mqtt broker');
 mqtt_client.subscribe('joints')
});

mqtt_client.on('message', (topic, message) => {
 const joint_data = JSON.parse(message)
 document.body.innerHTML = JSON.stringify(joint_data);
});

let joint_datas = [];
mqtt_client.on('message', (topic, message) => {
    const joint_data = JSON.parse(message)
    joint_datas.push(joint_data);
    update_chart();
   });

