import { create } from "apisauce"

const apiClient = create({
  baseURL: "https://www.universal-tutorial.com/api/",
  headers: {
    Accept: "application/json",
    "api-token":
      "c25HFSGEufNJ4mooaOvtxkMr4sp-zhnT23MB8s0hBCsjlUpFTy-BZzWuaX4USyZBEBo",
    "user-email": "upesa27@gmail.com",
  },
})
// apiClient.get("getaccesstoken").then((response) => {
//   if (!response.ok) {
//     response.problem
//   }
// })
export default apiClient
