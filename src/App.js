import { Header } from "./components/header/Header";
import { TaskCards } from "./components/header/task/TaskCards";

function App() {
  return (
    <div className="background">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;

// 井上様からの要望
//カード内の背景色を変更する
// STEP1: 右クリックで"color"をコンソールログで出力させる

//カードをクリックしたら備考を記載できるモーダルを表示
