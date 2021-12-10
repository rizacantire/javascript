let timerId = setInterval(() => alert('tick'), 2000);

// 5 saniye sonunda durdur.
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);