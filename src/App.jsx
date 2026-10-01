import './App.css';

function App() {
  return (
    <div className="app">
      <h2>리액트를 이용한 CI/CD</h2>
      <h3>빌드 파일 추가</h3>
    </div>
  );
}

export default App;

/*
dist 폴더 만들기 위해서는 빌드 
npm run build

리액트로 만든 프로그램을 브라우저가 사용하기 쉽게 묶어줘야된다.
dist폴더는 깃허브에 올라지 않고 git actions 작업할 때 따로 빌드를해서
EC2로 보낸다.


# 파일명: deploy.yaml

name: React 코드 가져오기 

on: [push]

jobs:
  reactDeploy:
    runs-on: ubuntu-24.04

    steps:
      - uses: actions/checkout@v6


*/