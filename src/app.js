const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} -> ${req.url}`);
  next();
});

let tasks = [
  {
    taskId: 1,
    taskName: "Fonksiyonel analiz dokümanı hazırlanması",
    taskSummary: "Yeni ürünler için gereksinim analizlerini içeren dokümanların yazılması",
    taskPriority: "High",
    taskStatus: "Completed",
    taskAssignee: "Ceren"
  },
  {
    taskId: 2,
    taskName: "Testlerin tamamlanması",
    taskSummary: "Yeni ürünlerin test ortamında Postman üzerinden test edilmesi",
    taskPriority: "Medium",
    taskStatus: "Work in Progress",
    taskAssignee: "Ceren"
  }
];

app.get('/api/tasks', (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks
  });
});

app.get('/api/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const task = tasks.find(t => t.taskId === taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task bulunamadı"
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

app.post('/api/tasks', (req, res) => {
  const { taskName, taskSummary, taskPriority, taskAssignee } = req.body;

  const newTask = {
    taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1,
    taskName,
    taskSummary,
    taskPriority: taskPriority || "Medium",
    taskStatus: "To Do",
    taskAssignee: taskAssignee || "Belirlenmedi"
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task oluşturuldu",
    data: newTask
  });
});

app.put('/api/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskIndex = tasks.findIndex(t => t.taskId === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Güncellenecek task bulunamadı"
    });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...req.body
  };

  res.status(200).json({
    success: true,
    message: "Task güncellendi",
    data: tasks[taskIndex]
  });
});

app.delete('/api/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskIndex = tasks.findIndex(t => t.taskId === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Silinecek task bulunamadı"
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    success: true,
    message: "Task silindi",
    data: deletedTask[0]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`TASKFLOW API http://localhost:${PORT} üzerinde çalışıyor...`);
});
