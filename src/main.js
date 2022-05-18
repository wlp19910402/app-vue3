import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './public-path';

// createApp(App).use(store).use(router).mount('#app');

let instance;
// 需要定义该接口，否则`/src/router/index.ts`无法使用`Window.__POWERED_BY_QIANKUN__`
// declare global {
//   interface Window {
//     __POWERED_BY_QIANKUN__?: string;
//   }
// }

// interface IRenderProps {
//   container: Element | string;
// }

// 渲染方法
function render(props) {
  const { container } = props;
  instance = createApp(App);
  instance
    .use(store)
    .use(router)
    .mount(container instanceof Element ? container.querySelector('#app') : container);
}
// 独立运行时
if (!(window && window.__POWERED_BY_QIANKUN__)) {
  render({ container: '#app' });
}

export async function bootstrap() {
  console.log('subapp bootstraped');
}

export async function mount(props) {
  console.log('mount subapp');
  render(props);
}

export async function unmount() {
  console.log('unmount college app');
  instance.unmount();
}
