# React Study (NomadCoder)

## 1. Requirements

1. [node.js 설치](https://nodejs.org/ko/)

2. npm 설치(node.js 설치하면 같이 설치된다.)

3. npx 설치 
  
    `npm install -g npx`

4. create-react-app을 활용하여 원하는 위치에 react app 만들기 

    `npx create-react-app movie_app`

## 2. React가 작동하는 원리
1. public 디렉토리 내의 index.html을 보여준다.

2. index.html 내의 `<div id=root></div>` 안쪽에 우리가 React로 작업한 코드가 HTML과 JavaScript로 변환되어 들어간다.
    
3. 원리는 index.js의 `ReactDOM.render(<App />, document.getElementById('root'));` 부분이 우리가 만든 App.js 의 App() 함수가 반환하는 것을 root라는 ID를 가진 div 내에 삽입하는 방식이다. 이 방식을 Virtual DOM(Document Oriented Model)을 만들었다고 한다.

4. 그렇기 때문에, index.html의 소스 코드를 보면 우리가 작업한 React 코드가 나오지 않는다. Chrome의 콘솔 창에서 봐야한다.

