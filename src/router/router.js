// Suspense组件是react组件懒加载的时候，路由跳转了，由于网络原因，组件内容无法及时过去
import { lazy, Suspense } from "react";
import External from "../views/external/external";
const Home = lazy(() => import("../views/home/home"));
const HengfengZhiwang = lazy(() =>
  import("../views/hengfengZhiwang/hengfengZhiwang")
);
const DataStandards = lazy(() =>
  import("../views/dataStandards/dataStandards")
);
const Error = lazy(() => import("../views/error/error"));
const News = lazy(() => import("../views/news/news"));

// 将项目中的路由关系配置成数组
/**
 * path 匹配的路径，就是 Route 的 path
 * element 要渲染的组件（这里先采用上面导入方式，后面进行lazy()懒加载优化）
 * children 需要在当前页面渲染的子路由，也是个数组和外层路由结构基本一致
 */
const routerConfig = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/home",
    name: "Home",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/external",
    name: "External",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <External />
      </Suspense>
    ),
  },
  {
    path: "/hengfengZhiwang",
    name: "HengfengZhiwang",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <HengfengZhiwang />
      </Suspense>
    ),
  },
  {
    path: "/dataStandards",
    name: "DataStandards",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <DataStandards />
      </Suspense>
    ),
  },
  {
    path: "/error",
    name: "Error",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/news",
    name: "News",
    element: (
      <Suspense fallback={<div>稍等</div>}>
        <News />
      </Suspense>
    ),
  },
];

export default routerConfig;
