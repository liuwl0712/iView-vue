import $axios from "./request.js";

export function findStaffData() {
  return $axios({
    url: "/json/staffData.json",
    method: "get",
  });
}
export function findDataCol() {
  return $axios({
    url: "/json/dataCol.json",
    method: "get",
  });
}
