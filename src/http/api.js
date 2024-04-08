import { serviceCreate, merge } from "@/http/request";

//这种方式可以采用单个项目的接口，也可以使用多个项目的接口，看自己的项目情况而定
let http0 = serviceCreate({
  baseURL: "/project1/api1",
  timeout: 15000, //请求超时
  emulateJSON: true, //默认表单提交
});
let http1 = serviceCreate({
  baseURL: "/project2/api2",
  timeout: 15000, //请求超时
  emulateJSON: true, //默认表单提交
});

//get请求示例
export function getData(params, config) {
  return http0.get("/project/list", merge(config, { params }));
}
//delete请求示例
export function deleteData(params, config) {
  return http0.delete("/project/list", merge(config, { params }));
}
//post请求示例（表单提交）
export function postDataFrom(params, config) {
  return http0.post("/project/list", params, config);
}
//post请求示例（json提交）
export function postDataJson(params, config) {
  return http0.post(
    "/project/list",
    params,
    merge(config, { emulateJSON: false })
  );
}
//put请求示例（表单提交）
export function putDataFrom(params, config) {
  return http0.put("/project/list", params, config);
}
//put请求示例（json提交）
export function putDataJson(params, config) {
  return http0.put(
    "/project/list",
    params,
    merge(config, { emulateJSON: false })
  );
}
