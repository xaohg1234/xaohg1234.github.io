const express = require('express');
const app = express();
 
// 假设这是你的黑名单IP列表
const blacklist = ['223.79.242.104', '42.59.247.35'];
 
app.use((req, res, next) => {
  const remoteIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (blacklist.includes(remoteIp)) {
    res.status(403).send('Forbidden');
  } else {
    next();
  }
});
 
// 其余的路由和应用配置
app.get('/', (req, res) => {
  res.send('Welcome!');
});
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
