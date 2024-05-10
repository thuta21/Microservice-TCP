export default () => ({
  apiGateWay: {
    port: parseInt(process.env.API_GATEWAY_PORT, 10) || 3000,
  },

  foods: {
    tcpPort: parseInt(process.env.FOODS_TCP_PORT, 10) || 4001,
  },

  analytics: {
    port: parseInt(process.env.ANALYTICS_PORT, 10) || 3001,
    tcpPort: parseInt(process.env.ANALYTICS_TCP_PORT, 10) || 4002,
  },
});
