module.exports = ({answers}) => `
{
	"port": ${answers.gateway_port},
	"host_member": "http://member.production-host.com",
	"host_logistics": "http://logistics.production-host.com",
	"host_payment": "http://payment.production-host.com",
	"host_order": "http://order.production-host.com",
	"host_case": "http://case.production-host.com",
	"host_channel": "http://channel.production-host.com",
	"host_ticket": "http://ticket.production-host.com",
	"security": "https://keycloak/auth/realms/default/protocol/openid-connect/certs",
	"name": "PROD"
}`