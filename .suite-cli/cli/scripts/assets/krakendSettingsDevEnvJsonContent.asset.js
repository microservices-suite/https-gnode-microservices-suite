module.exports = ({answers}) => `
{
	"port": ${answers.gateway_port},
	"host_member": "http://member",
	"host_logistics": "http://logistics",
	"host_payment": "http://payment",
	"host_order": "http://order",
	"host_case": "http://case",
	"host_channel": "http://channel",
	"host_ticket": "http://ticket",
	"security": "https://keycloak/auth/realms/default/protocol/openid-connect/certs",
	"name": "DEV"
}`