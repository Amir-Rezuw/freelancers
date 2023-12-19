const API = {
  user: {
    sendOtp: "user/get-otp",
    checkOtp: "user/check-otp",
    completeProfile: "user/complete-profile",
    userProfile: "user/profile",
  },
  projects: {
    getOwnerProjects: "project/owner-projects",
    addOwnerProject: "project/add",
    editOwnerProject: "project/update",
    toggleOwnerProject: "project",
  },
  category: {
    getAll: "category/list",
  },
};
export default API;
