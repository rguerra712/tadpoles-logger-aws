(function(){
    
    const commandLineArgs = require('command-line-args');
    const optionDefinitions = [
        { name: 'awsUserId', alias: 'a', type: String },
        { name: 'awsRegion', alias: 'r', type: String },
        { name: 'awsQueueName', alias: 'q', type: String },
        { name: 'username', alias: 'u', type: String },
        { name: 'password', alias: 'p', type: String }
    ];
    const options = commandLineArgs(optionDefinitions);

    let settings = {};

    settings.username = options.username;
    settings.password = options.password;
    settings.awsUserId = options.awsUserId;
    settings.awsRegion = options.awsRegion;
    settings.awsQueueName = options.awsQueueName;
    
    if (!settings.username && process.env.BRIGHT_HORIZONS_USERNAME){
        settings.username = process.env.BRIGHT_HORIZONS_USERNAME; 
    }
    if (!settings.password && process.env.BRIGHT_HORIZONS_PASSWORD){
        settings.password = process.env.BRIGHT_HORIZONS_PASSWORD; 
    }
    if (!settings.awsUserId && process.env.AWS_USER_ID){
        settings.awsUserId = process.env.AWS_USER_ID; 
    }
    if (!settings.awsRegion && process.env.AWS_REGION){
        settings.awsRegion = process.env.AWS_REGION; 
    }
    if (!settings.awsQueueName && process.env.AWS_MAKER_SQS_QUEUE_NAME){
        settings.awsQueueName = process.env.AWS_MAKER_SQS_QUEUE_NAME; 
    }
    
    exports.awsSettings = {
        awsUserId: settings.awsUserId,
        awsRegion: settings.awsRegion,
        awsQueueName: settings.awsQueueName
    };

    exports.userSettings = {
        username: settings.username,
        password: settings.password
    };
})();