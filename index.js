// 导入所需的模块
const express = require('express');
const axios = require('axios');
const app = express();

// 设置中间件
app.use(express.json());

// 路由处理程序
app.get('/', (req, res) => {
  res.send('Welcome to our news aggregator!');
});

app.get('/news', async (req, res) => {
  try {
    // 发起请求获取新闻数据
    const response = await axios.get('https://api.newsapi.com/v2/news');
    const news = response.data;

    // 处理新闻数据，可以根据需要进行过滤、排序等操作

    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
