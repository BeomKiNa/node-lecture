const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader("Content-Type", "text/html");
  // createReadStream을 사용할 경우 res.end()를 사용하면 안되는 이유

  // 스트림은 기본적으로 Event Driven 형태로 구현되어 있어요.
  // 파일을 읽으면서 중간중간 이벤트가 발생하고,  최종적으로는 end 이벤트를 호출하게 됩니다. 그리고 res 객체는 내부적으로 WriteStream을 상속하고 있고, 이는 end 메서드를 포함하고 있습니다.
  // end 이벤트가 발생했을때 내부적으로 호출하는 메서드가 res.end() 메서드와 동일하기 때문에,
  // 스트림을 읽는 도중에 end 메서드를 호출하면 스트림을 읽는 작업이 완료되기 전에 작업을 해당 끝내버려서 정상적인 결과를 얻지 못하는 것 같습니다.

  // pipe는 비동기적인 함수 이므로, 호출만 해놓고 (작업이 끝나길 기다리지 않고) 다음 코드 라인으로 넘어가죠.
  // 그래서 piping이 되고 있는 중간에 res.end를 호출하게 되면 파이핑이 멈추게 된답니다.
  // pipe이 끝나면 자동으로 end() 처리가 되므로, 수동적으로 호출해줄 필요는 없어요 🙌

  if (url === "/") {
    fs.createReadStream("./html/home.html").pipe(res);
  } else if (url === "/detail") {
    fs.createReadStream("./html/detail.html").pipe(res);
  } else {
    fs.createReadStream("./html/404.html").pipe(res);
  }
});

server.listen(PORT, () =>
  console.log(`🚀 Server listening: http://localhost:${PORT}`)
);
