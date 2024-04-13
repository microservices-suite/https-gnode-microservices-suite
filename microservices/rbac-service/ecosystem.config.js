module.exports = {
    apps : [{
      name   : "upload_service",
      autorestart: true,
      watch: true,
      time: true,
      script : "./index.js",
      instances:4,
      env_production: {
        NODE_ENV: "prod",
        DATABASE_URL:"host.docker.internal:27017/rbac_service_db_dev",
        PORT:9005
     },
     env_development: {
      NODE_ENV: "dev",
      DATABASE_URL:"host.docker.internal:27017/rbac_service_db_dev",
      PORT:9005
   }
    }]
  }
  // pm2 start ecosystem.config.js --env production
  // pm2 restart ecosystem.config.js --env development
    
  // # Start all applications
  // pm2 start ecosystem.config.js
  
  // # Stop all
  // pm2 stop ecosystem.config.js
  
  // # Restart all
  // pm2 restart ecosystem.config.js
  
  // # Reload all
  // pm2 reload ecosystem.config.js
  
  // # Delete all
  // pm2 delete ecosystem.config.js