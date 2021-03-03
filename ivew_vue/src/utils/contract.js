import $axios from "./request.js";

export function findStaffData() {
  return $axios({
    url: "/json/staffData.json",
    method: "get",
  });
}
