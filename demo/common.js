function timer (time, fn){
  console.log(fn)
  let timer = window.setInterval(() => {
    time--;
    console.log(time);
    if (time <= 0) {
      clearInterval(timer)
      fn()
    } 
  }, 1000)
}

