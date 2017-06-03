import socket from 'socket.io-client'

let io =socket('http://localhost:3000')

io.on('connect',function(){
    postMessage('实时数据已连接')
})

io.on('disconnect',function(){
    postMessage('已断开连接')
})

io.on('realTimeData',data =>{
    postMessage(data)
})

onmessage = message =>console.log('Worker received a message:'+message)
