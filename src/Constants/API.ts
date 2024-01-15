const API = {
  user: {
    sendOtp: "user/get-otp",
    checkOtp: "user/check-otp",
    completeProfile: "user/complete-profile",
    userProfile: "user/profile",
    logout: "user/logout",
  },
  projects: {
    getOwnerProjects: "project/owner-projects",
    getProjectsList: "project/list",
    addOwnerProject: "project/add",
    editOwnerProject: "project/update",
    singleProject: "project",
  },
  category: {
    getAll: "category/list",
  },
  proposal: {
    proposal: "proposal",
    getList: "proposal/list",
    add: "proposal/add",
  },
};
export default API;
