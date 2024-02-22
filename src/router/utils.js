// src/util/util.js
import { Route, Routes,Navigate } from "react-router-dom";

// 根据路由配置实现 Route 渲染
// 这里使用了箭头函数, 省去了很多的 return
/** 这里返回的其实就是要渲染的 Route 列表，大概是像这样子(示意)
 * [<Route/>, <Route/>...]
 * 就是用下面的函数代替了手动写 Route
 */
export const renderRoutes = (routerConfig) => {
  return (
    <Routes>
      {routerConfig.map((e) => {
        if (e.path === "/") {
          return (
            <Route
              path={e.path}
              key={e.path}
              element={<Navigate to="/home" />}
            />
          );
        } else {
          return <Route path={e.path} key={e.path} element={e.element} />;
        }
      })}
    </Routes>
  );
};
