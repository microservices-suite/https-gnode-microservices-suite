module.exports = {
     RMQ_URL: "amqp://127.0.0.1:5672",
//    RMQ_URL: "amqp://rabbitmq:5672",
    RMQ_EXCHANGE_NAME: "MS_SHOPPING",
    RMQ_QUEUE_NAME: "MS_SUPPLIER_QUEUE",
    CUSTOMER_BINDING_KEY: "CUSTOMER_SERVICE",
    SUPPLIER_BINDING_KEY: "SUPPLIER_SERVICE",
    PRODUCT_BINDING_KEY: "PRODUCT_SERVICE"
}
