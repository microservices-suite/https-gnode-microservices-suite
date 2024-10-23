
module.exports = {
    apps : [{
      name   : shjksgd,
      autorestart: true,
      watch: true,
      time: true,
      script : "./index.js",
      instances:4,
      env_production: {
        NODE_ENV: "prod",
        DATABASE_URL:"mongodb://mongodb:27017/microservices-suite_shjksgd_proddb",
        EXCHANGE:@microservices-suite,
        AMQP_HOST:"amqp://rabbitmq:5672",
        PORT:30067
     },
     env_development: {
      NODE_ENV: "dev",
      DATABASE_URL:"mongodb://mongodb:27017/microservices-suite_shjksgd_devdb",
      EXCHANGE:@microservices-suite,
      AMQP_HOST:"amqp://rabbitmq:5672",
      PORT:30067
   }
    }]
  }
