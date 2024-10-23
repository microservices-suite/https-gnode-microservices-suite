
module.exports = {
    apps : [{
      name   : hhgfdsdfghj,
      autorestart: true,
      watch: true,
      time: true,
      script : "./index.js",
      instances:4,
      env_production: {
        NODE_ENV: "prod",
        DATABASE_URL:"mongodb://mongodb:27017/microservices-suite_hhgfdsdfghj_proddb",
        EXCHANGE:@microservices-suite,
        AMQP_HOST:"amqp://rabbitmq:5672",
        PORT:9022
     },
     env_development: {
      NODE_ENV: "dev",
      DATABASE_URL:"mongodb://mongodb:27017/microservices-suite_hhgfdsdfghj_devdb",
      EXCHANGE:@microservices-suite,
      AMQP_HOST:"amqp://rabbitmq:5672",
      PORT:9022
   }
    }]
  }
