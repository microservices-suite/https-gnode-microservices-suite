module.exports = () => `
#These files wont be sent to the docker builder during the COPY . . command

node_modules
bar
`;
