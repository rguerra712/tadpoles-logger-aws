(function(){
    'use strict';
    
    const tadpolesLogger = require('tadpoles-logger');
    const babyLogger = tadpolesLogger.babyLogger;
    const logBuilder = tadpolesLogger.logBuilder;
    const sqs = require('./apis/sqs/client.js');

    let logs = [
            logBuilder.buildSleepLog(),
            logBuilder.buildBathroomLog(),
            logBuilder.buildFoodLog()
        ];

    sqs.watchForCommand(data => {
        if (data.command && data.command.toLowerCase() === 'daycare'){
            babyLogger.log(logs);
        }
    });
})();