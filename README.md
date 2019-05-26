这个项目我们来手写redux、react-redux，以及redux-thunk。

相关文件放置在customize-redux下。

这里简单介绍下各个文件。

### customize-redux.js
这是一个简易版的redux库，最重要的API，有两个：
1. createStore方法: 用于生成一个store，生成后的store拥有 getState、 subscribe、 dispatch 等方法。
2. applyMiddleware: 用于包裹中间件。


### customize-react-redux.js
这是一个简易版的 react-redux 库，提供了以下API：
1. Provider: 提供一个父组件，通过 context 向子组件传递参数，比如 store
2. connect
  - 接收一个组件，把 state 数据放进去，返回一个组件
  - 数据变化时，可以通知组件

### simple-redux-thunk
这是一个简易版的 redux-thunk 库，非常简单，它可以让dispatch处理function形式的action。